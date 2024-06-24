import Catalogue from "@/components/modules/catalogue/Catalogue"



const CataloguePage = async ({searchParams})=> {
    return <Catalogue searchParams={searchParams}/>
}

export default CataloguePage;