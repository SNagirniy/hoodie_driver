

const telegramToken = '7078854432:AAFgk6WocoU7oSXuKWdxnHUFod4oCZeR7f8';
const telegramChatId= 1088271930;

export async function sendMessage (message) {
    const {phone, chanell}= message;
    const telegramMessage = `Швидке замовлення!!! Звяжіться з клієнтом. Номер телефону: ${phone}, Бажаний спосіб з'язку: ${chanell}. Вдалих продажів!`
try {
    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage,
        }),
      });

      return response
    
} catch (error) {
    console.log(error)
}
   

}

