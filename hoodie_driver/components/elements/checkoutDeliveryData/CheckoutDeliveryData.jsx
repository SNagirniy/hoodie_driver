'use client'


import Select from 'react-select';
import s from './checkout_delivery_data.module.scss';
import { useState,useEffect} from 'react';
import { useDebouncedCallback } from 'use-debounce';


const CheckoutDeliveryData =({deliveryAdress,setDeliveryAdress, cityRef, setCityRef, deliveryAbroad, setDeliveryAbroad})=> {
    const [city, setCity]= useState('');
    const [cities, setCities] = useState([]);
    const [warehouses, setWarehouses]=useState([]);
   


    const changeCity = async(e)=> {
      setDeliveryAdress(null);
      setCityRef(e)   
    };

    const handleChangeDeliveryAbroad = (e)=> {
      const msg = e?.currentTarget?.value;
      setDeliveryAbroad(msg)
    }

    const getCities = async(city)=>{
        if( city === ''){setDeliveryAdress(null); return};

        try {
          const res = await fetch('/lib/getNovaPostCities', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({city: city}),
            });
            const result = await res?.json();
          
          if (result) {
            setDeliveryAdress(null)
            const optionsCities = result?.cities?.map(({description, ref})=> {return {value: ref, label: description}});
            setCities(optionsCities)

          }} catch (error) {
           console.log(error)
          } 
      };




    const getWarehouses = async(ref)=>{
     
        try {
          const res = await fetch('/lib/getNovaPostWarehouses', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ref: ref?.value}),
            });
            const result = await res?.json();
          if(result?.divisions?.length === 0) {setWarehouses([]);return}
          if (result) {
            const flatResult=result?.divisions.flat();
            const warehousesOptions = flatResult?.map(w => ({ value: w?.Description, label: w?.Description }));
           setWarehouses(warehousesOptions)
      
          }} catch (error) {
           console.log(error)
          } 
      };

      const debaunced = useDebouncedCallback(getCities, 1000);

    useEffect(()=>{debaunced(city)}, [city]);
    useEffect(()=> { if(!cityRef){return}; getWarehouses(cityRef)}, [cityRef]);

    return(
        <>
         <div className={s.block_wrapper}>
                        <h3 className={s.block_title}>
                            Доставка</h3>
                            <div className={s.input_wrapper}>
                                <label className={s.label}>
                                Населений пункт
                                <Select
                               classNames={{
                                control: ()=>s.input,
                               }}
                                onInputChange={(e)=> {setCity(e)}}
                                options={cities}
                                onChange={changeCity}
                                placeholder={''}
                               
                               /></label>

                                <label className={s.label}>
                                Відділення
                                <Select
                                required
                                 classNames={{
                                  control: ()=>s.input,
                                 }}
                                value={deliveryAdress}
                                onChange={setDeliveryAdress}
                                options={warehouses}
                                placeholder={''}
                               />
                                </label>
                            </div>
                            
                    </div>

                    <div className={s.block_wrapper}>
                        <h3 className={s.block_title}>
                            Або доставка за кордон</h3>
                            <label className={s.label}>
                            Напиши всі необхідні дані латиницею
                                <textarea
                                value={deliveryAbroad}
                                onChange={handleChangeDeliveryAbroad}
                                className={s.msg_area}
                                name="message" 
                                id="delivery_message"
                                placeholder='Пишіть тут...'/>
                            </label>
                    </div>
        </>
    )
};

export default CheckoutDeliveryData;