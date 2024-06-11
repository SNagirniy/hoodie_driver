
const MSG_TYPES = {
    FAST_ORDER: 'fast_order',
    QUESTION: 'question'
 }

const createMessage = (req)=>{
const {type, msg} = req;


    switch (type) {
        case MSG_TYPES.FAST_ORDER:
            
            return (`<b>Швидке замовлення!!!\n</b>Звяжіться з клієнтом.\nНомер телефону: <b><i>${msg.phone}</i></b>\nБажаний спосіб з'язку: <b><i>${msg.chanell}</i></b>.\n<b>Вдалих продажів!</b>`)
            break;
          case MSG_TYPES.QUESTION:
            return (`<b>Питання та пропозиції</b>\nІм'я: <b><i>${msg.name}</i></b>\nEmail: <b><i>${msg.email}</i></b>\nБажаний спосіб з'язку: <b><i>${msg.chanell}</i></b>.\n<i>${msg.message}</i>`)
                break;}
          
    

};

export default createMessage;