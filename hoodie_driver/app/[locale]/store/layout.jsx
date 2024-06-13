import StorePage from "@/components/templates/StorePage";


const StoreLayout = async ({products}) =>{
    return <StorePage>
        {products}
        </StorePage>
};

export default StoreLayout;