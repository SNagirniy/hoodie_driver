import { getSingleProduct, getColors } from "@/app/lib/firebase/productapi";
import ProductDetails from "../modules/productDetails/ProductDetails";


const ProductPage = async({slug})=> {

    const product = await getSingleProduct(slug);
    const colors = await getColors()
    return <>
    <ProductDetails product={product} colors={colors}/>
    </>
}

export default ProductPage;