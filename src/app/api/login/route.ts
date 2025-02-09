// src/app/api/login/route.ts
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { FormDataSchema } from '../signin/schema';
import { client } from '@/sanity/lib/client';
import jwt from 'jsonwebtoken'; // Import the jsonwebtoken library

interface SignInType {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    console.log('...body...', body);
    const validatedData = FormDataSchema.parse(body);
    console.log("Validated data:", validatedData);

    // Query the database for the user by email
    const result = await client.fetch(
      `*[_type == 'signup' && email == $email]{email, password, firstname, lastname, gender, dob, country}`,
      { email: validatedData.email }
    );
    console.log("Sanity query result:", result);

    // Check if the user exists
    if (!result || result.length === 0) {
      return NextResponse.json(
        { success: false, msg: "User not found", status: 401 },
        { status: 401 }
      );
    }

    // Compare the provided password with the hashed password in the database
    const doesExist = result.filter((r: SignInType) => r.email === validatedData.email);
    const doesPasswordMatch = doesExist[0].password === validatedData.password;
    console.log('...doesPasswordMatch...', doesPasswordMatch);

    if (!doesPasswordMatch) {
      return NextResponse.json(
        { success: false, msg: "Invalid credentials", status: 401 },
        { status: 401 }
      );
    }

    // Extract user details
    const user = doesExist[0];

    // Generate a JWT token with the user's firstname
    const secretKey = process.env.JWT_SECRET_KEY; // Ensure this is set in your .env file
    if (!secretKey) {
      throw new Error("JWT_SECRET_KEY is not defined in environment variables");
    }

    const token = jwt.sign(
      { firstname: user.firstname, email: user.email }, // Payload containing user's firstname and email
      secretKey,
      { expiresIn: '1d' } // Token expires in 1 day
    );

    // Serialize the authToken cookie
    const serializedCookie = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    // Return a successful response with the cookie
    return new Response(JSON.stringify({ msg: 'Login successful', success: true, data: result }), {
      status: 200,
      headers: { 'Set-Cookie': serializedCookie },
    });
  } catch (error) {
    console.error('Error during login:', error);
    // Handle validation errors
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, msg: error.message || 'An error occurred', status: 500 },
        { status: 500 }
      );
    }
    // Generic error response
    return NextResponse.json(
      { success: false, msg: 'An unexpected error occurred', status: 500 },
      { status: 500 }
    );
  }
}

















// // src/app/api/login/route.ts
// import { NextResponse } from 'next/server';
// import { serialize } from 'cookie';
// import { FormDataSchema } from '../signin/schema';
// import { client } from '@/sanity/lib/client';
// // import bcrypt from 'bcrypt';


// interface SignInType {
//   email: string;
//   password: string;
// }

// export async function POST(request: Request) {
//   try {
//     // Parse and validate the request body
//     const body = await request.json();
//     console.log('...body...', body);
//     const validatedData = FormDataSchema.parse(body);
//     console.log("Validated data:", validatedData);

//     // Query the database for the user by email
//     const result = await client.fetch(
//       `*[_type == 'signup' && email == $email]{email, password, firstname, lastname, gender, dob, country}`,
//       { email: validatedData.email }
//     );
//     console.log("Sanity query result:", result);

//     // Check if the user exists
//     if (!result || result.length === 0) {
//       return NextResponse.json(
//         { success: false, msg: "User not found", status: 401 },
//         { status: 401 }
//       );
//     }

//     // Compare the provided password with the hashed password in the database
//     // const doesPasswordMatch = await bcrypt.compare(validatedData.password, user.password);
//     const doesExist = result.filter((r: SignInType) => r.email === validatedData.email)

//     const doesPasswordMatch = doesExist[0].password === validatedData.password;

//     console.log('...doesPasswordMatch...', doesPasswordMatch);

//     if (!doesPasswordMatch) {
//       return NextResponse.json(
//         { success: false, msg: "Invalid credentials", status: 401 },
//         { status: 401 }
//       );
//     }

//     // Generate a unique token (e.g., JWT) for the user
//     const token = 'your-auth-token'; // Replace with a proper token generation mechanism

//     // Serialize the authToken cookie
//     const serializedCookie = serialize('authToken', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       maxAge: 60 * 60 * 24, // 1 day
//       path: '/',
//     });

//     // Return a successful response with the cookie
//     return new Response(JSON.stringify({ msg: 'Login successful', success: true, data: result }), {
//       status: 200,
//       headers: { 'Set-Cookie': serializedCookie },
//     });
//   } catch (error) {
//     console.error('Error during login:', error);

//     // Handle validation errors
//     if (error instanceof Error) {
//       return NextResponse.json(
//         { success: false, msg: error.message || 'An error occurred', status: 500 },
//         { status: 500 }
//       );
//     }

//     // Generic error response
//     return NextResponse.json(
//       { success: false, msg: 'An unexpected error occurred', status: 500 },
//       { status: 500 }
//     );
//   }
// }









// // // // src/app/api/login/route.ts
// // // import { NextResponse } from 'next/server';
// // // import { serialize } from 'cookie';

// // // export async function POST(request: Request) {
// // //   console.log('API route hit:', request.url); // Log the request URL

// // //   const { username, password } = await request.json();

// // //   console.log('Received payload:', { username, password }); // Log the received payload

// // //   if (username === 'test' && password === 'password') {
// // //     const token = 'your-auth-token';
// // //     const serializedCookie = serialize('authToken', token, {
// // //       httpOnly: true,
// // //       secure: process.env.NODE_ENV === 'production',
// // //       sameSite: 'strict',
// // //       maxAge: 60 * 60 * 24, // 1 day
// // //       path: '/',
// // //     });

// // //     return new Response(JSON.stringify({ message: 'Login successful' }), {
// // //       status: 200,
// // //       headers: { 'Set-Cookie': serializedCookie },
// // //     });
// // //   }

// // //   return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
// // // }
























// // // src/app/api/login/route.ts
// // import { NextResponse } from 'next/server';
// // import { serialize } from 'cookie';
// // import { FormDataSchema } from '../signin/schema';
// // import { client } from '@/sanity/lib/client';


// // interface signInType {
// //     email: string,
// //     password: string
// //   }

// // export async function POST(request: Request) {
// // //   const { username, password } = await request.json();
// // const body = await request.json();
// //     console.log('...body...', body);
// //     const validatedData = FormDataSchema.parse(body);
// //     console.log("Validated data:", validatedData);

// //     // Create the record directly using your Sanity client
// //     // const result = await client.create({
// //     //   _type: "signin",
// //     //   email: validatedData.email,
// //     //   password: validatedData.password,
// //     // });

// //     const result = await client.fetch(`
// //       *[_type=='signup']{email, password, firstname, lastname, signup, gender, dob, country}
// //       `)

// //             console.log("Sanity creation result:", result);
// //             const doesExist = result.filter((r: signInType) => r.email === validatedData.email)
// //             console.log("doesExist:", doesExist);
      
// //           if (doesExist?.length > 0) {
// //             const doesPasswordMatch = doesExist[0].password === validatedData.password;
// //             console.log('...doesPasswordMatch...', doesPasswordMatch);
// //             if(doesPasswordMatch) {
// //                 const token = 'your-auth-token';
// //     const serializedCookie = serialize('authToken', token, {
// //       httpOnly: true,
// //       secure: process.env.NODE_ENV === 'production',
// //       sameSite: 'strict',
// //       maxAge: 60 * 60 * 24, // 1 day
// //       path: '/',
// //     //   path: '/dashboard',
// //     });

// //     return new Response(JSON.stringify({ msg: 'Login successful', success:true }), {
// //       status: 200,
// //       headers: { 'Set-Cookie': serializedCookie },
// //     });
// //             //   return NextResponse.json(
// //             //     { success: true, msg: "Successfully Logged In", status: 200, data: doesExist},
// //             //     { status: 200 }
// //             //   );
// //             }
// //             console.log('...bypassed...')
// //               return NextResponse.json({ success: false, msg: "Invalid Credentials", status: 404 },{ status: 404 });
// //           }
// //           return NextResponse.json({ success: false, msg: "Invalid Credentials", status: 404 },{ status: 404 });

// //     //   if (username === 'test' && password === 'password') {
// // //     const token = 'your-auth-token';
// // //     const serializedCookie = serialize('authToken', token, {
// // //       httpOnly: true,
// // //       secure: process.env.NODE_ENV === 'production',
// // //       sameSite: 'strict',
// // //       maxAge: 60 * 60 * 24, // 1 day
// // //       path: '/',
// // //     });

// // //     return new Response(JSON.stringify({ message: 'Login successful' }), {
// // //       status: 200,
// // //       headers: { 'Set-Cookie': serializedCookie },
// // //     });
// // //   }

// // //   return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
// // }