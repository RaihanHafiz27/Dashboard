import { NextRequest, NextResponse } from "next/server";
import { createServerClient, CookieOptions } from "@supabase/ssr";

/**
 * Next.js Middleware for centralized authentication guarding and session syncing.
 *
 * @description
 * 1. Synchronizes and refreshes Supabase auth cookies between Server Components and Next.js Routing.
 * 2. Protection Layer: Redirects unauthenticated users attempting to access protected routes to `/signin`.
 * 3. Inverse Protection: Redirects authenticated users attempting to access auth pages (`/signin`, `/signup`) to `/dashboard`.
 */
async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );

          response = NextResponse.next({
            request: { headers: request.headers },
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const isAuthenticated = !!user && !error;

  const path = request.nextUrl.pathname;

  const isAuthPage = path.startsWith("/signin") || path.startsWith("/signup");

  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

/**
 * Middleware Matcher Configuration
 * Excludes internal Next.js assets, static files, API routes, and common image extensions.
 */
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

export default middleware;
