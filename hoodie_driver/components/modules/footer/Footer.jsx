import MainContainer from "@/components/layouts/MainCintainer";
import Newsletter from "@/components/elements/newsletter/Newsletter";
import SocialLinks from "@/components/elements/social_links/SocialLinks";
import Credits from "@/components/elements/credits/Credits";
import Logo from "@/components/elements/logo/Logo";
import FooterNavList from "@/components/elements/footer_nav_list/FooterNavList";
import s from './footer.module.scss';


const catalogue = [
    {title: 'Усі',
    url: '/store'
    },
    {title: 'Ароматизатори',
    url: '/store'
    },
    {title: 'Брелоки',
    url: '/store'
    },
    {title: 'Підвіски',
    url: '/store'
    },
    {title: 'Набори',
    url: '/store'
    },
    {title: 'Худі',
    url: '/store'
    },
];

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

const Footer =()=> {

    return (
        <footer className={s.footer}>
            <MainContainer>
                <div className={s.container}>
                    <Logo is_footer={true}/>
                    <SocialLinks/>
                    <Newsletter/>
                    <div className={s.nav_list}>
                        <FooterNavList links={catalogue} title={'Наш каталог'}/>
                        <FooterNavList links={info} title={'Інформація'}/>
                    </div>
                </div>
                <Credits/>
            </MainContainer>
        </footer>
    )
}

export default Footer;