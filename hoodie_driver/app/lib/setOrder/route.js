'use server'
import { NextResponse } from "next/server";
import addNewOrder from "../firebase/orderApi";
import { orderMessage, productMessage, giftMessage } from "@/utils/createMessage";
import { sendTextMessage, sendPhotoMessage } from "../telegram/telegramAPI";

export async function POST(req) {
    const data = await req.json();

    try {
  
     const response = await addNewOrder(data);

      if (response.ok) {
        
        const id = response?.id;
        const text = orderMessage(data.order, id);
        const cart = data?.order?.cart;
        const gift = data?.order?.gift;
        
        const message = await sendTextMessage(text);

       

        for (const item of cart) {
           const caption = productMessage(item);
           await sendPhotoMessage(item?.image, caption)
        };

        if(Object.keys(gift).length !== 0){
          const gift_caption = giftMessage(gift);
          await sendPhotoMessage(gift?.imageURL, gift_caption )
        }

        if(!message?.ok) {
          //відправити на email
        }



        return NextResponse.json({ok: true, id: response.id }, { status: 201 });
      } else {
        return NextResponse.json({ok: false, message: response.message }, { status: 200 });
      }
    } catch (error) {
      return NextResponse.json({ok:false, message: 'Internal Server Error' }, { status: 500 })
      
    }
  }