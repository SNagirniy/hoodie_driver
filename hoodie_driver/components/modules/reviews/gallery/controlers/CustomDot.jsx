import s from './index.module.scss';
import clsx from 'clsx';

const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
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

  export default CustomDot;