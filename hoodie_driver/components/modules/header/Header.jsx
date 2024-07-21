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
import Modal from "../modal/Modal";
import Cart from "../cart/Cart";
import s from './index.module.scss';


import { useState, useEffect } from "react";


const Header =()=> {
    const {width}= useWindowSize();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] =useState(false);

    const toggleModal = ()=> {setIsModalOpen(!isModalOpen)}

    const handleToggleMenu = ()=> {
        setIsMenuOpen(!isModalOpen)
    };

    const onCloseMenu = ()=> {
        setIsMenuOpen(false)
    };

    useEffect(()=> {
        if(width >=1280) { setIsMenuOpen(false)}
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
                        <BtnSet toggleModal={toggleModal}/>
                        {width < device.desktop && (<BurgerBtn onToggleMenu={handleToggleMenu} isMenuOpen= {isMenuOpen}/>)} 
                        
                    </div>
                    {width < device.desktop && 
                    <MobileMenu isOpen={isMenuOpen}>
                        <Navigation onCloseMenu={onCloseMenu}/>
                        <Social/>
                        {width >= device.tablet &&  <Newsletter/>}
                        <Credits/>
                        
                    </MobileMenu>}
                
                </div>
           
            </MainContainer>
            { isModalOpen && 
            <Modal onClose={toggleModal}>
                <Cart/>
            </Modal>}
        </header>
    )
};

export default Header;