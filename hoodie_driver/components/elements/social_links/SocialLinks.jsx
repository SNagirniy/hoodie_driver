import s from './social_links.module.scss'
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


const SocialLinks =()=> {
    return (
       
            
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
          
          
            
    )
};

export default SocialLinks;