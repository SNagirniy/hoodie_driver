import { getSingleProduct } from "@/app/lib/firebase/productapi";

const ProductDetail = async({params:{product}})=> {
    const productDoc = await getSingleProduct(product)
    return (<div>
        <h1>{product}</h1>
        <img src={productDoc?.imageURL} style={{width:300, margin: 15,}} alt={productDoc?.title.uk} />
        <h2>{productDoc?.title.uk}</h2>
        <p>{productDoc?.price} грн</p>
        <p>{productDoc?.description.uk}</p>
            </div>)
}

export default ProductDetail;