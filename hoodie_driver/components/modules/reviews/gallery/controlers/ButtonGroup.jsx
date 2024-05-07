
import s from './index.module.scss';
import Arrow from '../../../../../public/arrow.svg';
import clsx from 'clsx';


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, slidesToShow } } = rest;
    return (
      <div className={s.btn_container}>
        <button onClick={() => previous()} className={clsx(s.button, {[s.disable]: currentSlide === 0}) } type="button">
            <Arrow className={s.arrow}/>
        </button>
        <button onClick={() => next()} className={clsx(s.button, {[s.disable]: currentSlide === slidesToShow}) } type="button">
            <Arrow className={ clsx(s.arrow, s.right) }/>
        </button>
      </div>
    );
  };


  export default ButtonGroup;