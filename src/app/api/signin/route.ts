import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'Hello, this is your API route!', status: 201 });
}

export async function POST(request: Request) {
    const body = await request.json();
    return NextResponse.json({ message: `You sent: ${body.data}` });
}









// import type { NextApiRequest, NextApiResponse } from 'next'
 
// type ResponseData = {
//   message: string
// }
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }