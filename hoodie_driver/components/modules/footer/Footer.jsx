
import MainContainer from "@/components/layouts/MainCintainer";
import Newsletter from "@/components/elements/newsletter/Newsletter";
import SocialLinks from "@/components/elements/social_links/SocialLinks";
import Credits from "@/components/elements/credits/Credits";
import Logo from "@/components/elements/logo/Logo";
import FooterNavList from "@/components/elements/footer_nav_list/FooterNavList";
import s from './footer.module.scss';
import { getTranslations } from "next-intl/server";





const Footer = async({categories})=> {
    const t = await getTranslations("Home");
    const tF = await getTranslations("Footer");
   
   

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
                        <FooterNavList  links={categories} title={tF("catalogue")}/>
                        <FooterNavList links={info} title={tF("information")}/>
                    </div>
                </div>
                <Credits/>
            </MainContainer>
        </footer>
    )
}

export default Footer;