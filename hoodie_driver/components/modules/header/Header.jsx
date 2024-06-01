"use client";
import Logo from "../../elements/logo/Logo";
import Navigation from "../../elements/navigation/Navigation";
import BtnSet from "../../elements/navigation/BtnSet";
import MainContainer from "@/components/layouts/MainCintainer";
import BurgerBtn from "@/components/elements/burger_btn/BurgerBtn";
import useWindowSize from "@/hooks/useWindowSize";
import MobileMenu from "../mobile_menu/MobileMenu";
import Newsletter from "@/components/elements/newsletter/Newsletter";
import Credits from "@/components/elements/credits/Credits";
import Social from "./Social";
import s from './index.module.scss';


import { useState, useEffect } from "react";


const Header =()=> {
    const {width}= useWindowSize();
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = ()=> {
        setIsOpen(!isOpen)
    };

    const onCloseMenu = ()=> {
        setIsOpen(false)
    };

    useEffect(()=> {
        if(width >=1280) { setIsOpen(false)}
    }, [width]);

    const device ={
        desktop: 1280,
        tablet: 768,
    }
   

    return (
        <header >
            <MainContainer> 
                <div className={s.header}>
                    <Logo/>
            
                    <div className={s.nav_box}>
                       {width >= device.desktop && (<Navigation/>)} 
                        <BtnSet/>
                        {width < device.desktop && (<BurgerBtn onToggleMenu={handleToggleMenu}/>)} 
                        
                    </div>
                    {width < device.desktop && 
                    <MobileMenu isOpen={isOpen}>
                        <Navigation onCloseMenu={onCloseMenu}/>
                        <Social/>
                        {width >= device.tablet &&  <Newsletter/>}
                        <Credits/>
                        
                    </MobileMenu>}
                
                </div>
           
            </MainContainer>
           
        </header>
    )
};

export default Header;