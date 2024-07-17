import Instagram from '../public/Instagram.svg';
import Viber from '../public/Viber.svg';
import Telegram from '../public/Telegram.svg';
import Tiktok from '../public/Tiktok.svg';




const socialLinks = [
    {icon: (style) =><Instagram className={style}/>,
     alt: 'Instagram',
     url: 'https://www.instagram.com/hoodie.driver/'
    },
   
       {icon: (style)=> <Telegram className={style}/>,
        alt: 'Telegram',
        url: 'https://www.instagram.com/hoodie.driver/'
       },
       {icon: (style)=> <Tiktok className={style}/>,
        alt: 'TikTok',
        url: 'https://www.instagram.com/hoodie.driver/'
       },
       {icon:(style)=> <Viber className={style}/>,
       alt: 'Viber',
       url: 'https://www.instagram.com/hoodie.driver/'
      },
];


export default socialLinks;