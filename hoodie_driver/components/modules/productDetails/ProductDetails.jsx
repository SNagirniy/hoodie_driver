
import s from './product_details.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import ProductSlider from '@/components/elements/productSlider/ProductSlider';
import ProductDescription from '@/components/elements/productDescription/ProductDescription';
import { useLocale } from 'next-intl';
import ProductForm from '../productForm/ProductForm';

const ProductDetails = ({product, colors})=> {

    const locale = useLocale();
    const title = product?.title[locale];
    const description = product?.description[locale];
    const available_colors = product?.available_colors?.map((color) => { const {value, icon}= colors[color]; return {title: color,value,icon}});


    return (
        <section className={s.section}>
            <MainContainer>
                <article className={s.article}>
                    <ProductSlider image={product?.imageURL} title={product?.title.uk}/>
                    <div className={s.container}>
                        <ProductDescription title={title} slug={product?.id} description={description} price={product?.price}/>
                        <ProductForm colors={available_colors}/>
                    </div>
                   
                </article>
            </MainContainer>
        </section>
    )
};

export default ProductDetails;