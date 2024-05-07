import Logo from "../../elements/logo/Logo";
import Navigation from "../../elements/navigation/Navigation";
import BtnSet from "../../elements/navigation/BtnSet";
import MainContainer from "@/components/layouts/MainCintainer";
import s from './index.module.scss'
const Header =()=> {

    return (
        <header >
            <MainContainer> 
                <div className={s.header}>
                    <Logo/>
            
                    <div className={s.nav_box}>
                        <Navigation/>
                        <BtnSet/>
                    </div>
                </div>
           
            </MainContainer>
           
        </header>
    )
};

export default Header;