import Reviews from "@/components/modules/reviews/Reviews";
import MainButton from "@/components/elements/mainButton/Main_Button";
import CataloquePromoCta from "@/components/modules/cataloquePromoCTA/CataloquePromoCta";
import { getAllProductsByCategory } from "@/app/lib/firebase/productapi";


const StoreLayout = async ({children}) =>{
    return <>
    {children}
    <Reviews fetchFunc={getAllProductsByCategory} title={'Прикраси до худі'} description={'Прикрась свій худі на КПП, додай родзинку 🤪'}>
        <MainButton path={'/store//catalogue?category=jewerly_for_hoodie&page=1'} title={'Хочу побачити всі!'}/>
    </Reviews>
    <CataloquePromoCta/>
            </>
};

export default StoreLayout;