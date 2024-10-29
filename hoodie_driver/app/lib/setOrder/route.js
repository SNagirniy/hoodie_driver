'use server'
import { NextResponse } from "next/server";
import addNewOrder from "../firebase/orderApi";
import { orderMessage, productMessage, giftMessage } from "@/utils/createMessage";
import { sendTextMessage, sendPhotoMessage } from "../telegram/telegramAPI";
import { sendOrderEmail } from "../emailservice/emailservice";

export async function POST(req) {
    const data = await req.json();

    try {
  
     const response = await addNewOrder(data);


      if (response.ok) {
        
        const id = response?.id;
        const text = orderMessage(data.order, id);
        const cart = response?.data?.cart;
        const gift = response?.data?.gift;
        
        const message = await sendTextMessage(text);
          if(message?.ok) {

        for (const item of cart) {
         
           const caption = productMessage(item);
           await sendPhotoMessage(item?.image, caption)

           if(item?.custom_logo) { await sendPhotoMessage(item?.custom_logo, 'custom logo')}
        };

        if(Object.keys(gift).length !== 0){
          const gift_caption = giftMessage(gift);
          await sendPhotoMessage(gift?.imageURL, gift_caption )
        }} else{
          await sendOrderEmail(response, text)
        }

        return NextResponse.json({ok: true, id: response.id }, { status: 201 });
      } else {
        return NextResponse.json({ok: false, message: response.message }, { status: 200 });
      }
    } catch (error) {
      return NextResponse.json({ok:false, message: 'Internal Server Error' }, { status: 500 })
      
    }
  }