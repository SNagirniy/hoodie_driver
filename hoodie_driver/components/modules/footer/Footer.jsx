
import MainContainer from "@/components/layouts/MainCintainer";
import Newsletter from "@/components/elements/newsletter/Newsletter";
import SocialLinks from "@/components/elements/social_links/SocialLinks";
import Credits from "@/components/elements/credits/Credits";
import Logo from "@/components/elements/logo/Logo";
import FooterNavList from "@/components/elements/footer_nav_list/FooterNavList";
import s from './footer.module.scss';
import { getLocale } from "next-intl/server";
import { getCategories } from "@/app/lib/firebase/productapi";
import { getTranslations } from "next-intl/server";
import Navigation from "@/components/elements/navigation/Navigation";




const Footer = async ()=> {
    const t = await getTranslations("Home");
    const locale = await getLocale();
    const data = await getCategories();

    const categories = data?.map(({id, title})=> {return {id: id, url: `/store/catalogue`, title: title[locale]}});
    categories?.unshift({id: 'all' ,title: 'Усі',
    url: '/store/catalogue'
    });

    const info =[
        {title: t('Navigation.about'),
        url: '/about'
        },
        {title: t('Navigation.blog'),
        url: '/blog'
        },
        {title: t('Navigation.contacts'),
        url: '/contacts'
        },
    ]


    return (
        <footer className={s.footer}>
            <MainContainer>
                <div className={s.container}>
                    <Logo is_footer={true}/>
                    <SocialLinks/>
                    <Newsletter/>
                    <div className={s.nav_list}>
                        <FooterNavList  links={categories} title={'Наш каталог'}/>
                        <FooterNavList links={info} title={'Інформація'}/>
                    </div>
                </div>
                <Credits/>
            </MainContainer>
        </footer>
    )
}

export default Footer;