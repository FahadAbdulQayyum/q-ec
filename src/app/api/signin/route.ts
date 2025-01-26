import { NextResponse } from "next/server";
import { FormDataSchema } from "./schema";
import { z } from "zod";
import { client } from "@/sanity/lib/client";


interface signInType {
  email: string,
  password: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('...body...', body);
    const validatedData = FormDataSchema.parse(body);
    console.log("Validated data:", validatedData);

    // Create the record directly using your Sanity client
    // const result = await client.create({
    //   _type: "signin",
    //   email: validatedData.email,
    //   password: validatedData.password,
    // });

    const result = await client.fetch(`
      *[_type=='signup']{email, password, firstname, lastname, signup, gender, dob, country}
      `)
      console.log("Sanity creation result:", result);
      const doesExist = result.filter((r: signInType) => r.email === validatedData.email)
      console.log("doesExist:", doesExist);

    if (doesExist.length) {
      const doesPasswordMatch = doesExist[0].password === validatedData.password;
      console.log('...doesPasswordMatch...', doesPasswordMatch);
      if(doesPasswordMatch) {
        return NextResponse.json(
          { success: true, msg: "Successfully Logged In", status: 200, data: doesExist},
        );
      }
      console.log('...bypassed...')
          return NextResponse.json({ success: false, msg: "Invalid Credentials", status: 400 });
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error("Validation error:", err.errors);
      return NextResponse.json(
        { error: "Validation failed", details: err.errors, status: 400 },
        { status: 400 }
      );
    }

    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error", status: 500 },
      { status: 500 }
    );
  }
}












// import { NextResponse } from "next/server";
// import { FormDataSchema } from "./schema";
// import { z } from "zod";
// import { createSignUp } from "@/components/lib/features/dynamicApiCall/dynamicAPISlice";
// import { store } from "@/app/store/store";

// export async function POST(request: Request) {
//   try {
//     // Parse and validate request body
//     const body = await request.json();
//     const validatedData = FormDataSchema.parse(body);
//     console.log("Validated data:", validatedData);

//     // Dispatch Redux action
//     console.log("Dispatching createSignUp action...");
//     const result = await store.dispatch(
//       createSignUp({
//         collectionType: "signin",
//         email: validatedData.email,
//         firstname: validatedData.firstName,
//       })
//     );
//     console.log("Action result:", result);

//     // Return success response
//     return NextResponse.json({ success: true, data: validatedData });
//   } catch (err) {
//     if (err instanceof z.ZodError) {
//       console.error("Validation error:", err.errors);
//       return NextResponse.json(
//         { error: "Validation failed", details: err.errors, status: 400 },
//         { status: 400 }
//       );
//     }

//     // Log unexpected errors
//     console.error("Unexpected error:", err);
//     return NextResponse.json(
//       { error: "Internal server error", status: 500 },
//       { status: 500 }
//     );
//   }
// }






// // import { NextResponse } from "next/server";
// // import { FormDataSchema } from "./schema";
// // import { z } from "zod";
// // import { createSignUp } from "@/components/lib/features/dynamicApiCall/dynamicAPISlice";
// // import { store } from "@/app/store/store";

// // export async function GET() {
// //   return NextResponse.json({ message: "Hello, this is your API route!", status: 201 });
// // }

// // export async function POST(request: Request) {
// //   try {
// //     const body = await request.json();

// //     // Validate the incoming request body
// //     const validatedData = FormDataSchema.parse(body);
// //     console.log("...validatedData...", validatedData);

// //     // Dispatch the `createSignUp` action
// //     const result = await store.dispatch(
// //       createSignUp({
// //         collectionType: "signin",
// //         email: validatedData.email,
// //         firstname: validatedData.firstName,
// //       })
// //     );

// //     console.log("...result...", result);

// //     // Return a success response
// //     return NextResponse.json({ success: 1, data: validatedData });
// //   } catch (err) {
// //     if (err instanceof z.ZodError) {
// //       // Return validation error response
// //       return NextResponse.json({
// //         error: "Validation failed",
// //         details: err.errors,
// //         status: 400,
// //       });
// //     }

// //     // Handle unexpected errors
// //     console.error("Unexpected error:", err);
// //     return NextResponse.json(
// //       { error: "Internal server error", status: 500 },
// //       { status: 500 }
// //     );
// //   }
// // }
