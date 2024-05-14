import s from './mobile_menu.module.scss';
import clsx from 'clsx';

export const MobileMenu = ({isOpen ,children})=> {


    return (
        <>
         <div className={clsx(s.overlay, {[s.hidden] : !isOpen})}>
            {children}
        </div> 
        </>
       
    )
};

export default MobileMenu;