'use server'
import { NextResponse } from 'next/server';
import { getDivisions } from '../novapostApi/novapostApi';




export async function POST(req) {
    const data = await req.json();
    const ref = data?.ref;


  try {
    const divisions = await getDivisions(ref);

    if(divisions) {
        return NextResponse.json({ divisions }, { status: 200 });
    };
  
   
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}