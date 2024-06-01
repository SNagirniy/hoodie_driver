'use client';
import s from './modal_form.module.scss';
import Button from '@/components/elements/mainButton/Button';
import Check from '../../../public/check_icon.svg';


const ModalForm = ()=> {

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log('submit')
    }
    return(
        <div className={s.container}>
            <h2 className={s.title}>Швидке замовлення</h2>
            <form onSubmit={onSubmit} className={s.form}>
                <label className={s.tel_label}>Номер телефону
                <input  type="tel" required placeholder='+38'/>
                </label>
                <p id="question">Як краще з Вами зв‘язатися?</p>
                <div className={s.radio_group} role="radiogroup"  aria-labelledby="question">
                    
                    <label><input type="radio" name="chanell" value="instagram" /><span><Check className={s.icon}/></span>Instagram</label>
                    
                    <label><input type="radio"  name="chanell" value="telegram" /><span><Check className={s.icon}/></span>Telegram</label>
                    
                    <label ><input type="radio" name="chanell" value="viber" /><span><Check className={s.icon}/></span>Viber</label>
                </div>

                <Button type={'submit'} title={'Замовляю швидко!'}/>
            </form>
        </div>
    )
};

export default ModalForm;