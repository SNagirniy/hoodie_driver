"use client"
import s from './checkout_client_data.module.scss';

const CheckoutClientData=({setClientData, clientData})=>{


    const changeClientData =(e)=>{
        const {value, name} = e.currentTarget;
        setClientData((prev)=> ({...prev,[name]: value,}))
    }
    return(
        <div className={s.block_wrapper}>
        <h3 className={s.block_title}>Контактні дані</h3>
        <div className={s.input_wrapper}>
            <label className={s.label}>
                Імʼя
                <input required onChange={changeClientData} value={clientData.firstname} name='firstname' className={s.input} type="text" />
            </label>
            <label className={s.label}>
                Прізвище
                <input required onChange={changeClientData} value={clientData.lastname} name='lastname' className={s.input} type="text" />
            </label>
            <label className={s.label}>
                Телефон
                <input required onChange={changeClientData} value={clientData.phone} name='phone' className={s.input} type="tel" />
            </label>
        </div>
           
    </div>
    )
};


export default CheckoutClientData;