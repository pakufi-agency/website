import { NextRequest, NextResponse } from "next/server";

/**
 * Shape of a `form-redirect` entry as returned by the Strapi v5 REST API.
 * Strapi v5 flattens attributes, so fields live directly on the entry object.
 */
interface FormRedirectEntry {
  slug: string;
  destinationUrl: string;
  source?: string | null;
  enabled?: boolean | null;
}

const CMS_ENDPOINT = process.env.NEXT_PUBLIC_CMS_ENDPOINT;
const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

const DEFAULT_SOURCE = "event";

/**
 * Looks up a single `form-redirect` entry by slug from Strapi at request time.
 * Uses the server-only API token and disables all caching so admin edits take
 * effect on the very next request. Returns null on any failure so callers can
 * safely fall back to a hardcoded destination.
 */
async function fetchFormRedirect(
  slug: string,
): Promise<FormRedirectEntry | null> {
  if (!CMS_ENDPOINT) {
    console.error("[form-redirect] NEXT_PUBLIC_CMS_ENDPOINT is not set.");
    return null;
  }

  const url = `${CMS_ENDPOINT}/api/form-redirects?filters[slug][$eq]=${encodeURIComponent(
    slug,
  )}`;

  try {
    const response = await fetch(url, {
      headers: STRAPI_API_KEY
        ? { Authorization: `Bearer ${STRAPI_API_KEY}` }
        : {},
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `[form-redirect] Strapi responded ${response.status} for slug "${slug}".`,
      );
      return null;
    }

    const json = await response.json();
    const entry: FormRedirectEntry | undefined = json?.data?.[0];
    return entry ?? null;
  } catch (error) {
    console.error(`[form-redirect] Failed to fetch slug "${slug}":`, error);
    return null;
  }
}

/**
 * Builds a 302 redirect response for a form-redirect slug.
 *
 * - Destination comes from Strapi when the entry exists and is enabled,
 *   otherwise from the hardcoded `fallbackUrl` (a printed QR code must never
 *   reach an error page).
 * - An incoming `?source=` on the request always wins, so shared links like
 *   `?source=linkedin` override the CMS value; otherwise the Strapi `source`
 *   (or "event") is used.
 * - Always responds with 302 (never 301, which browsers cache aggressively)
 *   and `Cache-Control: no-store`.
 */
export async function buildFormRedirectResponse(
  request: NextRequest,
  slug: string,
  fallbackUrl: string,
): Promise<NextResponse> {
  const incomingSource = request.nextUrl.searchParams.get("source");

  let destinationUrl = fallbackUrl;
  let source = incomingSource || DEFAULT_SOURCE;

  const entry = await fetchFormRedirect(slug);
  if (entry && entry.enabled !== false && entry.destinationUrl) {
    destinationUrl = entry.destinationUrl;
    source = incomingSource || entry.source || DEFAULT_SOURCE;
  }

  let target: URL;
  try {
    target = new URL(destinationUrl);
  } catch {
    console.error(
      `[form-redirect] Invalid destination URL "${destinationUrl}" for slug "${slug}", using fallback.`,
    );
    target = new URL(fallbackUrl);
  }

  target.searchParams.set("source", source);

  const response = NextResponse.redirect(target.toString(), 302);
  response.headers.set("Cache-Control", "no-store");
  return response;
}
