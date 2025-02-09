// app/api/authenticate/route.ts
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Helper function to get the secret key
const getSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) {
    throw new Error('JWT_SECRET_KEY is not defined in environment variables');
  }
  return new TextEncoder().encode(secret);
};

// GET request handler
export async function GET(request: Request) {
  try {
    // Access the authToken cookie
    const authToken = request.headers.get('cookie')?.split('; ')
      .find((cookie) => cookie.startsWith('authToken='))
      ?.split('=')[1];

    console.log(`Checking authentication. Token found: ${!!authToken}`);
    if (!authToken) {
      return NextResponse.json({ error: 'No authToken provided' }, { status: 401 });
    }

    // Verify the token using the secret key
    const secretKey = getSecretKey();
    const { payload } = await jwtVerify(authToken, secretKey);

    console.log('Decoded token:', payload);

    // Return the decoded payload
    return NextResponse.json({ success: true, payload }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error verifying token:', error.message);

      if (error.message === 'JWT expired') {
        return NextResponse.json({ error: 'Token expired' }, { status: 401 });
      }
    } else {
      console.error('Unknown error:', error);
    }

    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}
















// // pages/api/authenticate.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { jwtVerify } from 'jose';

// // Helper function to get the secret key
// const getSecretKey = () => {
//   const secret = process.env.JWT_SECRET_KEY;
//   if (!secret) {
//     throw new Error('JWT_SECRET_KEY is not defined in environment variables');
//   }
//   return new TextEncoder().encode(secret);
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // Ensure the request method is GET
//     if (req.method !== 'GET') {
//       return res.status(405).json({ error: 'Method Not Allowed' });
//     }

//     // Access the authToken cookie
//     const authToken = req.cookies.authToken;

//     console.log(`Checking authentication. Token found: ${!!authToken}`);
//     if (!authToken) {
//       return res.status(401).json({ error: 'No authToken provided' });
//     }

//     // Verify the token using the secret key
//     const secretKey = getSecretKey();
//     const { payload } = await jwtVerify(authToken, secretKey);

//     console.log('Decoded token:', payload);

//     // Return the decoded payload
//     return res.status(200).json({ success: true, payload });
//   } catch (error) {
//     const err = error as Error; // Assert the error as type Error
//     console.error('Error verifying token:', error);

//     // Handle invalid or expired tokens
//     if (err.message === 'JWT expired') {
//       return res.status(401).json({ error: 'Token expired' });
//     }

//     return res.status(401).json({ error: 'Invalid token' });
//   }
// }