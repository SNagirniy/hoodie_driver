import Link from "next/link";
import Image from "next/image";
import Features from "../../elements/features/Features";
import Hoodie_Dark2x from '../../../public/Hoodie_Dark2x.png';
import Hoodie_Yellow2x from '../../../public/Hoodie_Yellow2x.png';

import clsx from "clsx";
import s from './hero.module.scss'

const Hero =()=> {
    return (
        <section className={s.hero_section}>
            <div className={s.hero_container}>
            <div className={s.head_container}>
                <hgroup>
                    <h1 className={s.title}>Худі на КПП - найкращий подарунок!</h1>
                    <p className={s.description}><strong >Худі-бро</strong> у твоє авто! Такого ти точно ще не бачив,
бо ми зробили це перші. <strong >Готові колекції</strong> або кастом. <strong >Даруємо
емоції</strong> та стиль</p>
                </hgroup>
                <Link className={s.button} href={'/store'}>Швидке замовлення</Link>

                </div>
            <div className={s.image_container}>
                <div className={clsx(s.thumb, s.yellow)}><Image className={s.image} src={Hoodie_Yellow2x} alt="Yellow hoodie image"/></div>
                <div className={s.thumb}> <Image className={s.image}src={Hoodie_Dark2x} alt="Dark hoodie image"/></div>
            </div>
            </div>
            <Features/>
            <div className={s.decor}></div>
        </section>
    )
};

export default Hero;