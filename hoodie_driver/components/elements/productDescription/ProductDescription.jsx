import s from './product_description.module.scss';

const ProductDescription = ({title, slug, price, description})=> {
return (
    <div className={s.container}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.product_code}> <span>Код товару:</span><span>{slug}</span></p>
        <p className={s.price}>{price}грн</p>
        <p className={s.description}>{description}</p>
    </div>
)};

export default ProductDescription;