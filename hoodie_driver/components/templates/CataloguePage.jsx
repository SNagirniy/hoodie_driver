import Catalogue from "../modules/catalogue/Catalogue";
import PaginationButtons from "../modules/paginationButtons/PaginationsButtons";
import { getCursors } from "@/app/lib/firebase/productapi";


const CataloguePage = async ({searchParams})=>{
    const category = searchParams?.category ? searchParams?.category : 'all';
    const page = searchParams?.page;
    const color = searchParams?.color;
    const cursors = await getCursors(category, searchParams?.color);
    const currentCursor = cursors[page -1];

    return(
        <>
        <Catalogue category={category} cursor={currentCursor} color={color}/>
        <PaginationButtons currentPage={page} totalPages={cursors?.length}/>
        </>
    )
};

export default CataloguePage;