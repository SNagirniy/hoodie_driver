'use client';
import s from './modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';




export default function Modal({ onClose, children }) {
  
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
        {children}
      </div>
    </div>,
    modalRoot
  );
}
