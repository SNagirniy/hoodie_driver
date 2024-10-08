'use server'
import { NextResponse } from "next/server";
import addNewOrder from "../firebase/orderApi";
import { orderMessage, productMessage } from "@/utils/createMessage";
import { sendTextMessage, sendPhotoMessage } from "../telegram/telegramAPI";

export async function POST(req) {
    const data = await req.json();

   const text = orderMessage(data.order);
   const cart = data?.order?.cart;
  
    try {
  
     const response = await addNewOrder(data);
     const message = await sendTextMessage(text);

     for (const item of cart) {
        const caption = productMessage(item);
        await sendPhotoMessage(item?.image, caption)
     };

      if (response.ok) {

        return NextResponse.json({ok: true, id: response.id }, { status: 201 });
      } else {
        return NextResponse.json({ok: false, message: response.message }, { status: 200 });
      }
    } catch (error) {
      return NextResponse.json({ok:false, message: 'Internal Server Error' }, { status: 500 })
      
    }
  }