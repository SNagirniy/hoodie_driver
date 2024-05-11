import s from './credits.module.scss';
import Link from 'next/link';

const Credits= ()=> {

    const year = new Date().getFullYear();

    return (
        <div className={s.container}>
            <p>&copy; {year} Hoodie Driver</p>
            <Link className={s.link} href={'/'}>Політика приватності</Link>
            <Link className={s.link} href={'/'}>Умова користувача</Link>

        </div>
    )
};


export default Credits;