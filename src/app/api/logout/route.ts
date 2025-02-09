// src/app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  console.log('Logout route hit'); // Log to confirm the route is being called

  // Clear the authToken cookie
  const serializedCookie = serialize('authToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0), // Set the expiration date to a past date
    path: '/',
  });

  console.log('Clearing authToken cookie'); // Log to confirm the cookie is being cleared

  return new Response(JSON.stringify({ message: 'Logout successful' }), {
    status: 200,
    headers: { 'Set-Cookie': serializedCookie },
  });
}

















// // src/app/api/logout/route.ts
// import { NextResponse } from 'next/server';
// import { serialize } from 'cookie';

// export async function POST() {
//   // Clear the authToken cookie
//   const serializedCookie = serialize('authToken', '', {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     expires: new Date(0), // Set the expiration date to a past date
//     path: '/',
//   });

//   return new Response(JSON.stringify({ message: 'Logout successful' }), {
//     status: 200,
//     headers: { 'Set-Cookie': serializedCookie },
//   });
// }