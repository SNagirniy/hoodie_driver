import s from './credits.module.scss';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const Credits= ()=> {

    const t = useTranslations("Footer");

    const year = new Date().getFullYear();

    return (
        <div className={s.container}>
            <p>&copy; {year} Hoodie Driver</p>
            <Link className={s.link} href={'/'}>{t("privacy_policy")}</Link>
            <Link className={s.link} href={'/'}>{t("terms_of_use")}</Link>

        </div>
    )
};


export default Credits;