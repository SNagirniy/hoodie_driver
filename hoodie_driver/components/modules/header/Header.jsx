import Logo from "../../elements/logo/Logo";
import Navigation from "../../elements/navigation/Navigation";
import BtnSet from "../../elements/navigation/BtnSet";
import s from './index.module.scss'
const Header =()=> {

    return (
        <header className={s.header}>
            <Logo/>
            
            <div className={s.nav_box}>
                <Navigation/>
                <BtnSet/>
            </div>
        </header>
    )
};

export default Header;