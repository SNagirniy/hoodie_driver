'use server'
import { NextResponse } from "next/server";
import { checkPromotion } from "../firebase/promotionApi";

export async function POST(req) {
    const data = await req.json();
  
    try {
  
     const response = await checkPromotion(data?.promocode);
      if (response.message) {
        return NextResponse.json({ok: false, message: response.message }, { status: 200 });
      } else {return NextResponse.json({ok: true, promotion: response }, { status: 200 });}
    } catch (error) {
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
      
    }
  }