import Catalogue from "../modules/catalogue/Catalogue";
import PaginationButtons from "../modules/paginationButtons/PaginationsButtons";
import SortMenu from "../elements/sort_menu/SortMenu";
import { getCursors } from "@/app/lib/firebase/productapi";



const CataloguePage = async ({searchParams})=>{
    const code = searchParams?.code;
    const category = searchParams?.category ? searchParams?.category : 'all';
    const page = searchParams?.page;
    const color = searchParams?.color;
    const sort_by = searchParams?.sort_by;
    const ascending = searchParams?.ascending;
    const cursors = await getCursors(category, searchParams?.color, sort_by, ascending, code);
    const currentCursor = cursors[page -1];

   

    return(
        <>
        <SortMenu/>
        <Catalogue code = {code} category={category} cursor={currentCursor} color={color} sort_by={sort_by} ascending={ascending}/>
        <PaginationButtons currentPage={page} totalPages={cursors?.length}/>
        </>
    )
};

export default CataloguePage;