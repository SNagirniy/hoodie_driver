import s from "./product_slider.module.scss";

const ProductSlider = ({image, title})=> {

    return (
        <div className={s.thumb}>
            <img  className={s.image} src={image} alt={title} />
        </div>
    )
};

export default ProductSlider;