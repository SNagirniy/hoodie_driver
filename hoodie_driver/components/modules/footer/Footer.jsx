import MainContainer from "@/components/layouts/MainCintainer";
import Newsletter from "@/components/elements/newsletter/Newsletter";
import SocialLinks from "@/components/elements/social_links/SocialLinks";
import Credits from "@/components/elements/credits/Credits";
import Logo from "@/components/elements/logo/Logo";
import FooterNavList from "@/components/elements/footer_nav_list/FooterNavList";
import s from './footer.module.scss';
import { getLocale } from "next-intl/server";

import { getCategories } from "@/app/lib/firebase/productapi";


const info =[
    {title: 'Про нас',
    url: '/about'
    },
    {title: 'Блог',
    url: '/blog'
    },
    {title: 'Контакти',
    url: '/contacts'
    },
]

const Footer = async ()=> {

    const locale = await getLocale();
    const data = await getCategories();

    const categories = data?.map(({id, title})=> {return { url: '/store', title: title[locale]}});
    categories.unshift({title: 'Усі',
    url: '/store'
    })


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