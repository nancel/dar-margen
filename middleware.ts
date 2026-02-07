import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isLocale, type Locale } from "@/lib/translations"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Redirect root to Spanish
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/es", request.url))
  }

  // Validate locale in /[locale]/... routes
  const segment = pathname.split("/")[1]
  if (segment && !isLocale(segment)) {
    return NextResponse.redirect(new URL("/es", request.url))
  }

  const response = NextResponse.next()
  // Set locale header so root layout can set <html lang="">
  if (isLocale(segment)) {
    response.headers.set("x-next-locale", segment as Locale)
  }
  return response
}

export const config = {
  // Run on / and on locale paths; skip static files and _next/api
  matcher: ["/", "/((?!_next|api|.*\\.).*)"],
}
