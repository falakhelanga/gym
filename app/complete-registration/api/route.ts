// src/app/auth/login/route.ts
import { NextResponse, NextRequest } from "next/server";
import { SignJWT } from "jose";

export const dynamic = "force-dynamic";

// Create a POST endpoint
export async function POST(request: NextRequest) {
  const data = await request.json();

  const token = request.cookies.get("token")
    ? JSON.parse(request.cookies.get("token")!.value)
    : null;

  try {
    const res = await fetch(
      `${process.env.BASE_URL}auth/complete-registration`,
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      const data = await res.json();

      const response = NextResponse.json({ success: true });
      response.cookies.set({
        name: "token",
        value: JSON.stringify({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        }),
        path: "/", // Accessible site-wide
        maxAge: 86400, // 24-hours or whatever you like
        httpOnly: true, // This prevents scripts from accessing
        sameSite: "strict",
      });
      return response;
    }
    const errorData = await res.json();

    return NextResponse.json(
      { success: false, error: errorData },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
