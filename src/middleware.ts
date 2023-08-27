import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/product/1004')) {
        return NextResponse.redirect(new URL('/product', request.url));
    }
}

export const config = {
    matcher: ['/product/:path*'],
};
