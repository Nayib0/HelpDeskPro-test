import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.pathname;

  if (!token && (url.startsWith("/agent") || url.startsWith("/client"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token) return NextResponse.next();

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    if (url.startsWith("/agent") && payload.role !== "agent") {
      return NextResponse.redirect(new URL("/client", req.url));
    }

    if (url.startsWith("/client") && payload.role !== "client") {
      return NextResponse.redirect(new URL("/agent", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/agent/:path*", "/client/:path*"],
};
