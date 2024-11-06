'use server'
import { NextResponse } from "next/server";
import { checkPromotion } from "../firebase/promotionApi";

export async function POST(req) {
    const data = await req.json();
    const code = data?.promocode.toLowerCase();
  
    try {
  
     const response = await checkPromotion(code);
      if (response.message) {
        return NextResponse.json({ok: false, message: response.message }, { status: 200 });
      } else {return NextResponse.json({ok: true, promotion: response }, { status: 200 });}
    } catch (error) {
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
      
    }
  }