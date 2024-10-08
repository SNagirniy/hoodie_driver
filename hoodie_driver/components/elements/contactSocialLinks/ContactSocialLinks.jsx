import s from './contact_social_links.module.scss';
import { v4 } from 'uuid';
import socialLinks from '@/utils/socialLinkList';


const ContactSocialLinks =()=> {
    return (
        <div className={s.list_wrapper}>
            <ul className={s.list}>
            {socialLinks?.map(({icon, alt, url})=> {return (
                <li key={v4()}>
                    <a className={s.link} href={url} target="_blank" >
                    {icon(s.icon)}
                    <span>{alt}</span>
                    </a>
                </li>
            )})}
            </ul>
        </div>
    )
};

export default ContactSocialLinks;
