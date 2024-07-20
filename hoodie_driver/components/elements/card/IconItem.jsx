import s from './card.module.scss';


const IconItem = ({icon, icon_title})=>{
      return (<li className={s.color}>
        <img src={icon} alt={icon_title}/>
      </li>)
}

export default IconItem;