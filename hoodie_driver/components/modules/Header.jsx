import Logo from "../elements/logo/Logo";
import Navigation from "../elements/navigation/Navigation";
import s from './index.module.scss'
const Header =()=> {

    return (
        <header className={s.header}>
            <Logo/>
            <Navigation/>
        </header>
    )
};

export default Header;