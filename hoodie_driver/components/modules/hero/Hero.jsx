import Link from "next/link";
import Image from "next/image";
import MainContainer from "@/components/layouts/MainCintainer";
import Features from "../../elements/features/Features";
import Hoodie_Dark2x from '../../../public/Hoodie_Dark2x.png';
import Hoodie_Yellow2x from '../../../public/Hoodie_Yellow2x.png';
import Button from "@/components/elements/mainButton/Button";

import clsx from "clsx";
import s from './hero.module.scss'

const Hero =()=> {
    return (
        <section className={s.hero_section}>
            <MainContainer>
            <div className={s.hero_container}>
                <div className={s.head_container}>
                    <hgroup>
                        <h1 className={s.title}>Худі на КПП - найкращий подарунок!</h1>
                        <p className={s.description}><strong >Худі-бро</strong> у твоє авто! Такого ти точно ще не бачив, бо ми зробили це перші. <strong >Готові колекції</strong> або кастом. <strong >Даруємо
                    емоції</strong> та стиль</p>
                    </hgroup>
                    <Button title={'Швидке замовлення'} />

                </div>
                <div className={s.image_container}>
                    <div className={clsx(s.thumb, s.yellow)}><Image className={s.image} src={Hoodie_Yellow2x} alt="Yellow hoodie image"/></div>
                    <div className={s.thumb}> <Image className={s.image}src={Hoodie_Dark2x} alt="Dark hoodie image"/></div>
                </div>
            
            <Features/>
            </div>
            <div className={s.decor}></div>
            </MainContainer>
            
        </section>
    )
};

export default Hero;