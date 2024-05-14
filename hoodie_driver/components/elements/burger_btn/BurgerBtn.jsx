import s from './burger_btn.module.scss';
import Burger from '../../../public/burger.svg';


const BurgerBtn = ({onToggleMenu})=> {
    return (
        <button onClick={onToggleMenu} className={s.btn}>
            <Burger className={s.icon}/>
        </button>
    )
};

export default BurgerBtn;