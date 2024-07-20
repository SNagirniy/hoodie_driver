import s from './card.module.scss';


const ColorItem = ({color_value})=>{
      return (<li className={s.color} style={{background:color_value}}></li>)
}

export default ColorItem;