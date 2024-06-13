
import Catalogue from "@/components/modules/catalogue/Catalogue";
import { Suspense } from "react";

const CataloguePage = ({params:{catalogue},searchParams})=>{

return <Suspense fallback={<div>Loading...</div>}>
    <Catalogue slug={catalogue} color={searchParams?.color} />
      </Suspense>
};

export default CataloguePage;