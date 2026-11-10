import { NextRequest, NextResponse } from "next/server";
import { buildFormRedirectResponse } from "@/utils/formRedirect";

export const dynamic = "force-dynamic";

const SLUG = "talent-validation-form";
const FALLBACK_URL = "https://tally.so/r/e5DONe";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return buildFormRedirectResponse(request, SLUG, FALLBACK_URL);
}
