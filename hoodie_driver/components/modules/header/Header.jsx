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
import LocalesSwitcher from "@/components/elements/navigation/locales/LocalesSwitcger";
import s from './index.module.scss';


import { useState, useEffect } from "react";


const Header =({categories})=> {
    const {width}= useWindowSize();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] =useState(false);

    const toggleModal = ()=> {setIsModalOpen(!isModalOpen)}

    const handleToggleMenu = ()=> {
        setIsMenuOpen(!isMenuOpen)
    };

    const handleCloseModal =()=> {
        setIsModalOpen(false)
    }

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
        <header className={s.root_header}>
            <MainContainer> 
                <div className={s.header}>
                    <Logo/>
            
                    <div className={s.nav_box}>
                       <div className={s.desktop_wrapper}>
                            <Navigation onCloseMenu={onCloseMenu} categories={categories}/>
                        </div>
                        <BtnSet toggleModal={toggleModal}/>
                        <div className={s.except_desktop_wrapper}>
                            <BurgerBtn onToggleMenu={handleToggleMenu} isMenuOpen= {isMenuOpen}/>
                        </div>
                    </div>

                  
                    <MobileMenu isOpen={isMenuOpen}>
                        <Navigation categories={categories} onCloseMenu={onCloseMenu}/>
                        <Social/>
                        <div className={s.tablet_wrapper}>
                            <Newsletter/>
                        </div>
                        <LocalesSwitcher/>
                        <Credits/>
                        
                    </MobileMenu>
                    
                </div>
           
            </MainContainer>
            { isModalOpen && 
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <Cart closeModal={handleCloseModal}/>
            </Modal>}
        </header>
    )
};

export default Header;