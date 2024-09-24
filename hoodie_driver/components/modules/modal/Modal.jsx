'use client';
import s from './modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import Close from '../../../public/close.svg';




export default function Modal({isOpen,onClose, children}) {
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);



  useEffect(() => {
      const handleKeyDown = e => {
       if (e.code === 'Escape') {
          onClose()}};
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);



  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  

  if (!isMounted) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div onClick={handleBackdropClick} className={s.modal_backdrop}>
      <div className={s.modal_content}>
        <Close onClick={onClose} className={s.close_btn}/>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
