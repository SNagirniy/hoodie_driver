'use client'
import { useState, useEffect} from "react";


  const discountTypes={
    free_item: "free_item",
    persentage: 'persentage',
    fixed: "fixed",
    gift: 'gift'
  };

const defaultDiscount = {discount: 0, gifts: []};


  const calculateGiftDiscount = (promotion, cart)=> {

    if(promotion?.applicable_categories?.length === 0) {
      return {discount: 0, gifts: promotion?.discount?.gift_options};}

      const categorizedItems = promotion?.applicable_categories?.reduce((acc, category) => {
        acc[category] = cart.filter((item) => item.category === category);
        return acc;
      }, {});

      const values = Object.values(categorizedItems);
      
      if(values.length === 0){return defaultDiscount};

      const totalItems=(arr)=> arr?.reduce((count,item)=> count + item.ammount, 0);

      const isRequiredItems = values?.some((el) => {return totalItems(el) >= promotion?.discount?.required_items_count});

      if(!isRequiredItems){return defaultDiscount}

     return {discount: 0, gifts: promotion?.discount?.gift_options}
  };

  const calculateFixedDiscount = (promotion, cart)=>{
    let discount = 0;
    let promotionalCategoriesValue=0;
      const promotionalCategories = promotion?.applicable_categories?.reduce((acc, category) => {
        const availableCategory = cart.filter((item) => item.category === category);
        acc.push(...availableCategory);
        return acc;
      }, []);
      if(promotionalCategories?.length <= 0) {return defaultDiscount};

      const fixedDiscount = promotion?.discount?.value;

      promotionalCategories?.forEach((category)=> {
        const categoryValue= category?.price * category?.ammount;
        
        promotionalCategoriesValue+=categoryValue;
      });

      if(promotionalCategoriesValue < fixedDiscount) { discount = promotionalCategoriesValue} else{
        discount= fixedDiscount;
      }
     
      return {discount: discount, gifts:[]}
  }

  const calculatePersentageDiscount = (promotion, cart)=>{
    let discount = 0;
      const promotionalCategories = promotion?.applicable_categories?.reduce((acc, category) => {
        const availableCategory = cart.filter((item) => item.category === category);
        acc.push(...availableCategory);
        return acc;
      }, []);
      if(promotionalCategories?.length <= 0) {return defaultDiscount};

      const persentage = promotion?.discount?.value;

      promotionalCategories?.forEach((category)=> {
        const categoryValue= category?.price * category?.ammount;
        
        discount+=(categoryValue * persentage)/100;
      });
     
      return {discount: discount, gifts:[]}
  }

  const calculateFreeItemDiscount = (promotion, cart)=>{
      let discount = 0;
      const categorizedItems = promotion?.applicable_categories?.reduce((acc, category) => {
          acc[category] = cart.filter((item) => item.category === category);
          return acc;
        }, {});
  
  // Обробка кожної категорії окремо
       promotion?.applicable_categories?.forEach((category) => {
          const itemsInCategory = categorizedItems[category];
            if (!itemsInCategory || itemsInCategory?.length === 0) return;
  
      // Підраховуємо загальну кількість товарів у цій категорії
          const totalItemsInCategory = itemsInCategory.reduce((count, item) => count + item.ammount, 0);
     
      // Якщо кількість товарів відповідає умовам для знижки
          const requiredItemsCount = promotion?.discount?.required_items_count;
          const giftCount = promotion.discount?.gift_count;
  
        // Потрібно купити 3 товари для отримання знижки (2+1)
          const setsOfThree = Math.floor(totalItemsInCategory / (requiredItemsCount + giftCount));
  
          if (setsOfThree > 0) {
          // Сортуємо товари по ціні для визначення найдешевшого
          const sortedItems = [...itemsInCategory].sort((a, b) => a.price - b.price);
          // Вираховуємо знижку за кожен комплект із 3 товарів
          
         
         let freeItemsCounter = setsOfThree;
        

         sortedItems.forEach((item)=> {
          if(freeItemsCounter >=item?.ammount) {
              discount+=(item.ammount * item.price);
              freeItemsCounter-=item.ammount
          } else{ discount=(freeItemsCounter * item.price);
            freeItemsCounter=0;
           return}
         })
  
         
        
      }}); return {discount: discount, gifts:[]}}



const usePromotion = (promotion, cart)=> {
    const [totalDiscount, setTotalDiscount] = useState(defaultDiscount);


    const promotionControler =(promotion, cart)=> {
      if(!promotion) {
        return defaultDiscount};

        const now = new Date();

      if(promotion.seasonal && (now < new Date(promotion.valid_from) || now > new Date(promotion.valid_to))) {
        return defaultDiscount};
       

        const total =cart?.reduce((acc, el)=>{ const cost = el.price * el.ammount; return acc+cost}, 0)
       
      if(promotion?.min_order_amount > total) {return defaultDiscount};

        const totalItems = cart?.reduce((count,item)=> count + item.ammount, 0);

      if(totalItems < promotion?.discount?.required_items_count) {return defaultDiscount};

      if(promotion?.discount?.type === discountTypes.free_item){
      const discount = calculateFreeItemDiscount(promotion, cart)
      return discount;}

      if(promotion?.discount?.type === discountTypes.persentage){
        const discount = calculatePersentageDiscount(promotion, cart)
        return discount;
      }
      if(promotion?.discount?.type === discountTypes.fixed) {
        const discount = calculateFixedDiscount(promotion, cart)
        return discount;
      }
      if(promotion?.discount.type === discountTypes.gift) {
        const discount = calculateGiftDiscount(promotion, cart)
        return discount
      }
    };

    useEffect(()=> {const discount = promotionControler(promotion, cart); setTotalDiscount(discount)}, [promotion,cart]);
  


return {totalDiscount}
};


export default usePromotion;