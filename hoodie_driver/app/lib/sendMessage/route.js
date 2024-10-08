import { NextResponse } from 'next/server';
import sendEmail from '../emailservice/emailservice';
import { createMessage } from '@/utils/createMessage';


export async function POST(req) {
  const data = await req.json();

const telegramToken = process.env.TELEGRAM_TOKEN;
const telegramChatId= process.env.TELEGRAM_CHAT_ID;

const message = createMessage(data)


  try {

   const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'HTML'
      }),
    });


    if (response.ok) {
      return NextResponse.json({ok: response.ok, message: 'Message sent successfully' }, { status: 200 });
    } else {
      const result =  await sendEmail(message);

      if(result.accepted[0]){ 
        return NextResponse.json({ok: true, message: 'Message sent successfully' }, { status: 200 });} else{

          return NextResponse.json({ message: result.response}, { status: result.responseCode });
        }
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}