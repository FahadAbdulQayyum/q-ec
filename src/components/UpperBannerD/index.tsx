// // pages/index.tsx
// import { GetServerSideProps } from 'next';
// import UpperBanner from '@/components/UpperBanner';
// import { jwtVerify, SignJWT } from 'jose';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const authToken = context.req.cookies.authToken;

//     if (!authToken) {
//         return {
//             redirect: {
//                 destination: '/Sign/In',
//                 permanent: false,
//             },
//         };
//     }

//     // Decode or fetch user info using the authToken (optional)
//     // const userInfo = await fetchUserInfoFromAuthToken(authToken); // Implement this function

//     // Verify the token using the secret key
//     const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
//     const { payload } = await jwtVerify(authToken, secretKey);

//     console.log('...pyalod...', payload)

//     return {
//         props: {
//             payload, // Pass user info to the client
//         },
//     };
// };

// interface PayloadType {
//     firstname: string,
//     email: string,
//     iat: number,
//     exp: number
// }

// const UpperBanerD = ({ payload }: PayloadType) => {
//     return (
//         <div>
//             <UpperBanner userInfo={payload} />
//         </div>
//     );
// };

// export default UpperBanerD;