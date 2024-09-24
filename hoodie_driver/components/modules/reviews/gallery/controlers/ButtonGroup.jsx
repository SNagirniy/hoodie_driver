
import s from './index.module.scss';
import Arrow from '../../../../../public/arrow.svg';
import clsx from 'clsx';


const ButtonGroup = ({next, previous, goToSlide, ...rest }) => {
    
    return (
      <div className={s.btn_container}>
        <button  onClick={() => previous()} className={s.button } type="button">
            <Arrow className={s.arrow}/>
        </button>
        <button  onClick={() => next()} className={s.button} type="button">
            <Arrow className={ clsx(s.arrow, s.right) }/>
        </button>
      </div>
    );
  };


  export default ButtonGroup;