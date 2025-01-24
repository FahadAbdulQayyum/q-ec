import { NextResponse } from 'next/server';
import { FormDataSchema } from './schema';

import { z } from 'zod';

export async function GET() {
    return NextResponse.json({ message: 'Hello, this is your API route!', status: 201 });
}

export async function POST(request: Request) {
    try{
      const body = await request.json();
      const validatedData = FormDataSchema.parse(body);
      console.log('...validatedData...', validatedData);
      return NextResponse.json({ success: 1, data: validatedData });
    }catch(err){
      if(err instanceof z.ZodError){
        return NextResponse.json({error: 'Validation faild', details: err.errors, status: 400});
      }
    }
}
