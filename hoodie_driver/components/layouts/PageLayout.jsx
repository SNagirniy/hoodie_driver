import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import { getLocale } from "next-intl/server";
import { getCategories } from "@/app/lib/firebase/productapi";
import { getTranslations } from "next-intl/server";

const PageLayout = async({children})=> {
    const locale = await getLocale();
    const data = await getCategories();
    const t = await getTranslations("Home")

    const categories = data?.map(({id, title})=> {return {id: id, url: `/store/catalogue`, title: title[locale]}});
    categories?.unshift({id: 'all' ,title: t("Categories.all"),
    url: '/store/catalogue'
    });

    return (
<>
<Header categories = {categories}/>
<main>{children}</main>
<Footer categories = {categories}/>
</>

    )
};

export default PageLayout;