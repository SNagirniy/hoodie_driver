

const ProductDetail = async({params:{product}})=> {
    console.log(product)
    return <div><h1>{product}</h1></div>
}

export default ProductDetail;