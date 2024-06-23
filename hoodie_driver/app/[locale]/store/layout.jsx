import StorePage from "@/components/templates/StorePage";
import { Suspense } from "react";


const StoreLayout = async ({products}) =>{
    return <StorePage>
        <Suspense fallback={<div>Loading...</div>}>
        {products}
        </Suspense>
        </StorePage>
};

export default StoreLayout;