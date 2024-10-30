import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "./helpers/helpers";

// Add whatever paths you want to PROTECT here
const authRoutes = [
  "/app/*",
  "/account/*",
  "/api/*",
  "/admin/*",
  "/dashboard/*",
  // "/complete-registration",
  // "/welcome",
];

// Function to match the * wildcard character
function matchesWildcard(path: string, pattern: string): boolean {
  if (pattern.endsWith("/*")) {
    const basePattern = pattern.slice(0, -2);
    return path.startsWith(basePattern);
  }
  return path === pattern;
}

export async function middleware(request: NextRequest) {
  // Shortcut for our login path redirect
  // Note: you must use absolute URLs for middleware redirects

  const LOGIN = new URL(`/auth/sign-in`, request.url);

  if (
    authRoutes.some((pattern) =>
      matchesWildcard(request.nextUrl.pathname, pattern)
    )
  ) {
    const token = request.cookies.get("token");

    // For API routes, we want to return unauthorized instead of
    // redirecting to login
    if (request.nextUrl.pathname.startsWith("/api")) {
      if (!token) {
        const response: any = {
          success: false,
          message: "Unauthorized",
        };
        return NextResponse.json(response, { status: 401 });
      }
    }

    // If no token exists, redirect to login
    if (!token) {
      return NextResponse.redirect(LOGIN);
    }

    try {
      // Decode and verify JWT cookie
      const parsedToken = JSON.parse(token.value);

      const payload = await verifyJwtToken(parsedToken.access_token);

      if (!payload) {
        // Delete token
        request.cookies.delete("token");
        return NextResponse.redirect(LOGIN);
      }

      if (payload.is_registration_complete === false) {
        return NextResponse.redirect(
          new URL(`/complete-registration`, request.url)
        );
      }
      if (payload.is_welcome_complete === false) {
        return NextResponse.redirect(new URL(`/welcome`, request.url));
      }

      // If you have an admin role and path, secure it here
      if (request.nextUrl.pathname.startsWith("/admin")) {
        if (payload.role !== "admin") {
          return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_BASE_URL}/access-denied`
          );
        }
      }
    } catch (error) {
      // Delete token if authentication fails
      request.cookies.delete("token");
      return NextResponse.redirect(LOGIN);
    }
  }

  let redirectToApp = false;
  // Redirect login to app if already logged in
  if (
    request.nextUrl.pathname === "/auth/sign-in" ||
    request.nextUrl.pathname === "/auth/sign-up"
  ) {
    const token = request.cookies.get("token");
    const access_token = token?.value
      ? JSON.parse(token.value).access_token
      : null;

    if (token) {
      try {
        const payload = await verifyJwtToken(access_token);

        if (payload) {
          redirectToApp = true;
        } else {
          // Delete token
          request.cookies.delete("token");
        }
      } catch (error) {
        // Delete token
        request.cookies.delete("token");
      }
    }
  }

  if (redirectToApp) {
    // Redirect to app dashboard
    return NextResponse.redirect(new URL("/dashboard/clients", request.url));
  } else {
    // Return the original response unaltered
    return NextResponse.next();
  }
}
