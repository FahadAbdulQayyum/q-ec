import { jwtVerify, SignJWT } from 'jose';

export const isAuthenticated = async({ req }: { req?: any }) => {
  try {
    // Access the authToken cookie directly
    const token = req?.cookies?.get('authToken')?.value;

    // Log whether a token was found
    console.log(`Checking authentication. Token found: ${!!token}`);

    if (!token) {
      console.log('No token found');
      return null; // Return null if no token is present
    }

    // Verify the token using the secret key
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const { payload } = await jwtVerify(token, secretKey);

    console.log('Decoded token:', payload);
    return payload; // Return the decoded payload
  } catch (error) {
    console.error('Invalid or expired token:', error);
    return null;
  }
};





// import jwt from 'jsonwebtoken';

// export const isAuthenticated = ({ req }: { req?: any }) => {
//   try {
//     // Access the authToken cookie directly
//     const token = req?.cookies?.get('authToken')?.value;

//     // Log whether a token was found
//     console.log(`Checking authentication. Token found: ${!!token}`);

//     if (!token) {
//       console.log('No token found');
//       return null; // Return null if no token is present
//     }

//     // Decode and verify the JWT token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!);

//     // Log the decoded token for debugging purposes
//     console.log('Decoded token:', decoded);

//     // Return the decoded token (contains user information like firstname, email, etc.)
//     return decoded;
//   } catch (error) {
//     // Handle token verification errors (e.g., invalid or expired token)
//     console.error('Invalid or expired token:', error);
//     return null;
//   }
// };











// export const isAuthenticated = ({ req }: { req?: any }) => {
//     const token = req?.cookies?.get('authToken')?.value; // Access the cookie directly
//     console.log(`Checking authentication. Token found: ${!!token}`); // Log the token status
//     return !!token;
//   };