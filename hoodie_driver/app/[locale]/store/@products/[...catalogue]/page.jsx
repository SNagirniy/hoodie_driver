
import Catalogue from "@/components/modules/catalogue/Catalogue";
import { getColors, getProducts } from "@/app/lib/firebase/productapi";


const CataloguePage = async({params:{catalogue},searchParams})=>{

  const color_map = await getColors();
 const products = await getProducts(catalogue, searchParams?.color);

return (<Catalogue  color_map={color_map} products={products} />)
    
};

export default CataloguePage;