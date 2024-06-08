import { NextResponse } from 'next/server';

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

    const data = await response.json();
    if (response.ok) {
      return NextResponse.json({ok: response.ok, message: 'Message sent successfully' }, { status: 200 });
    } else {
      console.error('Telegram API error:', data);
      return NextResponse.json({ message: data.description }, { status: response.status });
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}