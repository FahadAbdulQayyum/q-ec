// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated } from './utils/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log(`Middleware executed for path: ${pathname}`);

  // Prevent trailing slash redirection (exclude the root path '/')
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newPathname = pathname.slice(0, -1); // Remove trailing slash
    console.log(`Redirecting to remove trailing slash: ${newPathname}`);
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // Define public routes (e.g., sign-in)
  const publicRoutes = ['/Sign/In'];
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

  // Check if the user is authenticated
  const isLoggedIn = isAuthenticated({ req: request });
  console.log(`Is user authenticated? ${isLoggedIn}`);

  // If the user is not logged in and tries to access a protected route, redirect to /Sign/In
  if (!isLoggedIn && !isPublicRoute) {
    console.log('Redirecting to /Sign/In');
    const signInUrl = new URL('/Sign/In', request.url);
    return NextResponse.redirect(signInUrl);
  }

  // Allow the request to proceed
  console.log('Allowing request to proceed');
  return NextResponse.next();
}

// Match all routes except static assets and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/ (API routes)
     */
    // '/((?!_next/static|_next/image|favicon.ico|api/).*)',
    '/((?!_next/static|_next/image|favicon.ico|api/|assets/).*)',

  ],
};