'use server'

const telegramToken = process.env.TELEGRAM_TOKEN;
const telegramChatId= process.env.TELEGRAM_CHAT_ID;

export const sendTextMessage = async(text)=> {

    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: text,
          parse_mode: 'HTML',
        }),
      });
    
      const data = await response.json();
      if (!response.ok) {
        console.error('Telegram API error (text message):', data);
        throw new Error(data.description);
      }
    
      return data;

};

export const sendPhotoMessage = async(photoUrl, caption) => {
    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendPhoto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        photo: photoUrl,
        caption: caption,
        parse_mode: 'HTML',
      }),
    });
  
    const data = await response.json();
    if (!response.ok) {
      console.error('Telegram API error (photo message):', data);
      throw new Error(data.description);
    }
  
    return data;
  }