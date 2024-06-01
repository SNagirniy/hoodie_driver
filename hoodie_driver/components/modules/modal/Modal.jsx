
import s from './modal.module.scss';




export default function Modal({ children }) {
  

  return (
    <div className={s.modal_backdrop}>
      <div className={s.modal_content}>
        <button className={s.modal_btn}>
        </button>
        {children}
      </div>
    </div>
  );
}
