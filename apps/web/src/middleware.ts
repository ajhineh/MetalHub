import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr', 'de', 'nl', 'es', 'it', 'no', 'sv', 'pl'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  // 1. Check Cookie first (user preference override)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Check IP Geolocation headers from Cloudflare, CloudFront, or Vercel
  const countryCode = (
    request.headers.get('cf-ipcountry') || 
    request.headers.get('cloudfront-viewer-country') || 
    request.headers.get('x-vercel-ip-country') ||
    (request as any).geo?.country
  )?.toUpperCase();

  if (countryCode) {
    const countryLanguageMap: Record<string, string> = {
      DE: 'de', AT: 'de', CH: 'de',
      FR: 'fr',
      NL: 'nl', BE: 'nl',
      ES: 'es',
      IT: 'it',
      NO: 'no',
      SE: 'sv',
      PL: 'pl'
    };
    const matchedLocale = countryLanguageMap[countryCode];
    if (matchedLocale && locales.includes(matchedLocale)) {
      return matchedLocale;
    }
  }

  // 3. Fallback to browser Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const found = locales.find(locale => acceptLanguage.toLowerCase().includes(locale));
    if (found) return found;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with one of the locales
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale in the path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and public asset files
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
