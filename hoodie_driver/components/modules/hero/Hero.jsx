'use client';
import { useTranslations } from "next-intl";
import Image from "next/image";
import MainContainer from "@/components/layouts/MainCintainer";
import Features from "../../elements/features/Features";
import Hoodie_Dark2x from '../../../public/Hoodie_Dark2x.png';
import Hoodie_Yellow2x from '../../../public/Hoodie_Yellow2x.png';
import Button from "@/components/elements/mainButton/Button";
import useWindowSize from "@/hooks/useWindowSize";


import clsx from "clsx";
import s from './hero.module.scss'

const Hero =()=> {
    const t = useTranslations('Hero');
    const {width} = useWindowSize();



    return (
        <section className={s.hero_section}>
            <MainContainer>
            <div className={s.hero_container}>
                <div className={s.head_container}>
                    <hgroup>
                        <h1 className={s.title}>{t('title')}</h1>
                        <p className={s.description}>{t.rich("descr", {
                         strong: (chunk) => <strong>{chunk}</strong>})}</p>
                    </hgroup>
                    {width >=768 && <Button title={t('btn_title')} />}
                   
                    

                </div>
                <div className={s.image_container}>
                    <div className={clsx(s.thumb, s.yellow)}><Image className={s.image} src={Hoodie_Yellow2x} alt="Yellow hoodie image"/></div>
                    <div className={s.thumb}> <Image className={s.image}src={Hoodie_Dark2x} alt="Dark hoodie image"/></div>
                    {width <768 && <div className={s.btn_container} ><Button title={t('btn_title')}/></div>}
                </div>
            
            <Features/>
            </div>
            <div className={s.decor}></div>
            </MainContainer>
        </section>
    )
};

export default Hero;