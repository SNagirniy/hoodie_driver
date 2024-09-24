'use client'

import s from './checkout_message.module.scss';

const CheckoutMessage = ()=>{

return(
    <div className={s.block_wrapper}>
    <label className={s.label}>
    Потрібно змінити колір, додати інше лого, картинку або напис, розробити індивідуальний дизайн худі, тощо? Просто ориши тут свої побажання, і ми зробимо саме те худі 👌
        <textarea
        className={s.msg_area}
        name="message" 
        id="message"
        placeholder='Пишіть тут...'/>
    </label>
</div>
)
}

export default CheckoutMessage;