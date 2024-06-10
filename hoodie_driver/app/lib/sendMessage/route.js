import { NextResponse } from 'next/server';
import sendEmail from '../emailservice/emailservice';


export async function POST(req) {
  const { phone, chanell } = await req.json();

const telegramToken = '7078854432:AAFgk6WocoU7oSXuKWdxnHUFod4oCZeR7f8';
const telegramChatId= 1088271930;

const telegramMessage =
`<b>Швидке замовлення!!!</b>
Звяжіться з клієнтом.
Номер телефону: <b><i>${phone}</i>
</b>Бажаний спосіб з'язку: <b><i>${chanell}</i></b>.
<b>Вдалих продажів!</b>`;

  try {

   const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: telegramMessage,
        parse_mode: 'HTML'
      }),
    });


    if (response.ok) {
      return NextResponse.json({ok: response.ok, message: 'Message sent successfully' }, { status: 200 });
    } else {
      const result =  await sendEmail(telegramMessage);

      if(result.accepted[0]){ 
        return NextResponse.json({ok: true, message: 'Message sent successfully' }, { status: 200 });} else{

          return NextResponse.json({ message: result.response}, { status: result.responseCode });
        }
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}