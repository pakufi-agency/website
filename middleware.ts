import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const { pathname } = request.nextUrl;

  // Skip API routes, Next.js internals, and files with extensions (.css, .js, .png, etc.)
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') 
  ) {
    return;
  }

  // Redirect if missing trailing slash
  if (!pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = `${pathname}/`;
    return NextResponse.redirect(url, 301);
  }
}

