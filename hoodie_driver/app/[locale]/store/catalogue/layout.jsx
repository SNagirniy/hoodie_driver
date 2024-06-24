import StorePage from "@/components/templates/StorePage"

const CatalogueLayout = async({children})=> {
    return <StorePage>
                {children}
         </StorePage>
};

export default CatalogueLayout;