import s from './slider.module.scss';
import clsx from 'clsx';

const Custom_dot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
  
    return (
        <>
        <li key={index}>
            <button
        className={clsx(s.dot, {[s.active] : active}) }
        onClick={() => onClick()}
      >
            </button></li>
        </>
      
    );
  };

  export default Custom_dot;