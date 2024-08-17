import MainContainer from "@/components/layouts/MainCintainer";
import s from './store_catalogue_section.module.scss';
import StoreAside from "../store_aside/StoreAside";
import ProductSearch from "@/components/elements/productSearch/ProductSearch";
import SortMenu from "@/components/elements/sort_menu/SortMenu";
import FilterMenu from "@/components/elements/filterMenu/FilterMenu";
import FilterReflection from "@/components/elements/filterReflection/FilterReflection";
import { getLocale } from "next-intl/server";
import { getCategories,getColors } from "@/app/lib/firebase/productapi";
import { getTranslations } from "next-intl/server";

const StoreCataloqueSection = async({children})=> {

const locale = await getLocale();
const data = await getCategories();
const colors = await getColors();


const t = await getTranslations("Home");



const categories = data?.map(({id, title})=> {return { slug: id, title: title[locale]}});
categories.unshift({title: t("Categories.all"),
slug: 'all'});

const color_map = Object.keys(colors)?.map((key)=> {
return {title: colors[key].title[locale], color: colors[key].value, id: key, icon: colors[key].icon}});


    return (
        <section className={s.section}>
            <MainContainer>
        <div className={s.container}>
            <hgroup className={s.title_box}>
                <h1>Магазин</h1>
                <p>Вітаємо в нашому магазині.</p>
            </hgroup>

            <div className={s.wrapper}>
                <div className={s.desktop_box}> 
                    <StoreAside categories={categories} color_map={color_map}/>
                </div>
               
                <div className={s.catalogue_list_container}>
                    <div className={s.menu_box}> 
                        <FilterReflection/>
                        <SortMenu/>
                        <FilterMenu categories={categories} color_map={color_map}/>
                        <div className={s.mobile_box}>
                            <ProductSearch/>
                        </div>
                       
                    </div>
                    
                    {children}</div>
            </div>

        </div>
            </MainContainer>
        </section>
    )
};

export default StoreCataloqueSection;