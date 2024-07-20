import ProductPage from "@/components/templates/ProductPage";
const ProductDetail = async({params:{product}})=> {
   
    return <ProductPage slug={product}/>
}

export default ProductDetail;