"use client";
import Logo from "../../elements/logo/Logo";
import Navigation from "../../elements/navigation/Navigation";
import BtnSet from "../../elements/navigation/BtnSet";
import MainContainer from "@/components/layouts/MainCintainer";
import BurgerBtn from "@/components/elements/burger_btn/BurgerBtn";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileMenu from "../mobile_menu/MobileMenu";
import s from './index.module.scss';

import { useState, useEffect } from "react";

const Header =()=> {
    const isMedia1280 = useMediaQuery(1279);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = ()=> {
        setIsOpen(!isOpen)
    };

    const onCloseMenu = ()=> {
        setIsOpen(false)
    };

    useEffect(()=> {
        if(!isMedia1280) { setIsOpen(false)}
    }, [isMedia1280]);
   

    return (
        <header >
            <MainContainer> 
                <div className={s.header}>
                    <Logo/>
            
                    <div className={s.nav_box}>
                       {!isMedia1280 && (<Navigation/>)} 
                        <BtnSet/>
                        {isMedia1280 && (<BurgerBtn onToggleMenu={handleToggleMenu}/>)} 
                        
                    </div>
                    {isMedia1280 && 
                    <MobileMenu isOpen={isOpen}>
                        <Navigation onCloseMenu={onCloseMenu}/>
                    </MobileMenu>}
                
                </div>
           
            </MainContainer>
           
        </header>
    )
};

export default Header;