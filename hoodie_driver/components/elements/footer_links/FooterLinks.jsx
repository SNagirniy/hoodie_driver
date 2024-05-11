import s from './footerlinks.module.scss';
import Logo from '../logo/Logo';
import FooterNavList from '../footer_nav_list/FooterNavList';
import { v4 } from 'uuid';
import Instagram from '../../../public/Instagram.svg';
import Viber from '../../../public/Viber.svg';
import Telegram from '../../../public/Telegram.svg';
import Tiktok from '../../../public/Tiktok.svg';


const sociallinks = [
    {icon: <Instagram className={s.icon}/>,
     alt: 'Instagram',
     url: 'https://www.instagram.com/hoodie.driver/'
    },
   
       {icon: <Telegram className={s.icon}/>,
        alt: 'Telegram',
        url: 'https://www.instagram.com/hoodie.driver/'
       },
       {icon: <Tiktok className={s.icon}/>,
        alt: 'TikTok',
        url: 'https://www.instagram.com/hoodie.driver/'
       },
       {icon: <Viber className={s.icon}/>,
       alt: 'Viber',
       url: 'https://www.instagram.com/hoodie.driver/'
      },
];


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

const Footerlinks =()=> {
    return (
        <div className={s.container}>
            <div className={s.social_links} >
            <Logo style={s.logo}/>
            <ul className={s.list}>
            {sociallinks.map(({icon, alt, url})=> {return (
                <li key={v4()}>
                    <a className={s.link} href={url} target="_blank" >
                    {icon}
                    <span>{alt}</span>
                    </a>
                </li>
            )})}
            </ul>
            </div>
            <nav className={s.navigation}>
                <FooterNavList links={catalogue} title={'Наш каталог'}/>
                <FooterNavList links={info} title={'Інформація'}/>
            </nav>
            
        </div>
    )
};

export default Footerlinks;