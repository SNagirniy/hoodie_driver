import s from './colors_filter.module.scss';



const ColorsFilter = ({color_map})=> {

    return (
        <ul className={s.list}>
            {color_map?.map(({title, color, id})=>{ return <li key={id} className={s.item}><span className={s.color} style={{background:color}}></span> <p className={s.title}>{title}</p></li>})}
        </ul>
    )
};

export default ColorsFilter;