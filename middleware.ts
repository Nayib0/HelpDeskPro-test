import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const cookies = request.headers.get("cookie") || "";
  const url = new URL(request.url);

  const isLogged = cookies.includes("user_logged=true");

  if (!isLogged && !url.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/client/:path*", "/agent/:path*"],
};
