'use server'
import { NextResponse } from 'next/server';
import { getCities } from '../novapostApi/novapostApi';




export async function POST(req) {
    const data = await req.json();
    const city = data?.city


  try {
    const cities = await getCities(city);

    if(cities) {
        return NextResponse.json({ cities }, { status: 200 });
    };
  
   
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}