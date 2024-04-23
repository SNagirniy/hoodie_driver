import Link from "next/link";
import Image from "next/image";
import Hoodie_Dark2x from '../../public/Hoodie_Dark2x.png';
import Hoodie_Yellow2x from '../../public/Hoodie_Yellow2x.png';

import clsx from "clsx";
import s from './hero.module.scss'

const Hero =()=> {
    return (
        <section className={s.hero_section}>
            <div className={s.header_container}>
                <hgroup>
                    <h1 className={s.title}>Худі на КПП - найкращий подарунок!</h1>
                    <p className={s.description}>Худі-бро у твоє авто! Такого ти точно ще не бачив,
бо ми зробили це перші. Готові колекції або кастом. Даруємо
емоції та стиль</p>
                </hgroup>
                <Link className={s.button} href={'/store'}>Швидке замовлення</Link>
                <div className={s.counter_cont}>
                    <p className={s.counter}><span className={clsx(s.value, s.blue) }><data value={3400}>3400</data>+</span><span>задоволених </span><span> клієнтів</span></p>
                    <p className={s.counter}><span className={clsx(s.value, s.yellow) }><data value={200}>200</data>+</span><span>відгуків</span></p>
                </div>
                </div>
            <div className={s.image_container}>
                <div className={clsx(s.thumb, s.yellow)}><Image className={s.image} src={Hoodie_Yellow2x} alt="Yellow hoodie image"/></div>
                <div className={s.thumb}> <Image className={s.image}src={Hoodie_Dark2x} alt="Dark hoodie image"/></div>
                
               
            </div>
        </section>
    )
};

export default Hero;