import Reviews from "@/components/modules/reviews/Reviews";
import Button from "@/components/elements/mainButton/Button";
import CataloquePromoCta from "@/components/modules/cataloquePromoCTA/CataloquePromoCta";
import { getAllProductsByCategory } from "@/app/lib/firebase/productapi";


const StoreLayout = async ({children}) =>{
    return <>
    {children}
    <Reviews fetchFunc={getAllProductsByCategory} title={'Прикраси до худі'} description={'Прикрась свій худі на КПП, додай родзинку 🤪'}>
        <Button title={'Хочу побачити всі!'}/>
    </Reviews>
    <CataloquePromoCta/>
            </>
};

export default StoreLayout;