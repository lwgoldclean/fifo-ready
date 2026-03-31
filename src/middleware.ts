import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const isLoggedIn = !!session?.user;
  const hasPaid = session?.user?.hasPaid ?? false;
  const isAdmin = session?.user?.role === "ADMIN";

  const isStudentRoute = nextUrl.pathname.startsWith("/dashboard") ||
    nextUrl.pathname.startsWith("/documents") ||
    nextUrl.pathname.startsWith("/quizzes");

  const isAdminRoute = nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
  }

  if (isStudentRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL(`/login?callbackUrl=${nextUrl.pathname}`, nextUrl));
    }
    if (!hasPaid && !isAdmin) {
      return NextResponse.redirect(new URL("/#pricing", nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/documents/:path*", "/quizzes/:path*", "/admin/:path*"],
};
