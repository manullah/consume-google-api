import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const user = req.nextauth;
    const { token } = user;

    if (req.nextUrl.pathname.startsWith('/dashboard') && !token) {
      return new NextResponse('You are not authorized!');
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        const { token } = params;
        return !!token;
      },
    },
  },
);

export const config = {
  matcher: ['/dashboard/:path*'],
};
