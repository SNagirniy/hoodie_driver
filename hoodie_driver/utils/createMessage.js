
const MSG_TYPES = {
    FAST_ORDER: 'fast_order',
    QUESTION: 'question'
 }

export const createMessage = (req)=>{
const {type, msg} = req;


    switch (type) {
        case MSG_TYPES.FAST_ORDER:
            
            return (`<b>Швидке замовлення!!!\n</b>Звяжіться з клієнтом.\n${msg.chanell}: <b><i>${msg.contactData}</i></b>.\n<b>Вдалих продажів!</b>`)
            break;
          case MSG_TYPES.QUESTION:
            return (`<b>Питання та пропозиції</b>\nІм'я: <b><i>${msg.name}</i></b>\n${msg.chanell}: <b><i>${msg.contactData}</i></b>\n<i>${msg.message}</i>`)
                break;}
          
    

};



export const orderMessage = (data, id) => {
    const {client, delivery, payment,message} = data;

    const formattedString = [...Object.entries(client),...Object.entries(delivery),...Object.entries(payment), ['message', message]]
  .map(([key, value]) => {if(!value || value === '') {return}; return`<b>${key}:</b> ${value}`})
  .join('\n');
      
  const resultMessage = `<b>НОВЕ ЗАМОВЛЕННЯ!!!</b>\n<b>Номер: ${id}</b>\n`.concat('', formattedString)
  return resultMessage;
};

export const productMessage = (item)=> {
    const {title, id, color, variant, ammount,message} = item;

    const colorsString = color.join(',')
const itemDetails = `<b>Назва:</b> ${title.uk}\n<b>Код товару:</b> ${id}\n<b>Варіант:</b> ${variant}\n<b>Колір:</b> ${colorsString}\n<b>Кількість:</b>${ammount}\n<b>Побажання</b>${message}`;

return itemDetails;
};


export const giftMessage = (item)=> {
  const {title, code, description} = item;

const itemDetails = `<b>ПОДАРУНОК</b>\n<b>Назва:</b> ${title}\n<b>Код подарунку:</b> ${code}\n<b>Опис:</b> ${description}`;

return itemDetails;
}
