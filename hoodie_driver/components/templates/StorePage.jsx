import StoreCataloqueSection from "../modules/store_catalogue_section/StoreCatalogueSection";


const StorePage = ({children})=>{
return (
   <>
   <StoreCataloqueSection>
    {children}
   </StoreCataloqueSection>

   </>
)}

export default StorePage;