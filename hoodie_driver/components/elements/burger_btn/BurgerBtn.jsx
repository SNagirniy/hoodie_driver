import s from './burger_btn.module.scss';
import Burger from '../../../public/burger.svg';
import clsx from 'clsx';


const BurgerBtn = ({onToggleMenu, isMenuOpen})=> {
    return (
        <button onClick={onToggleMenu} className={s.btn}>
            <Burger className={clsx(s.icon, {[s.active] : isMenuOpen})}/>
        </button>
    )
};

export default BurgerBtn;