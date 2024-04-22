import Header from "../modules/Header";
import Footer from "../modules/Footer";
import PageWrapper from "./PageWrapper";

const PageLayout =({children})=> {

    return (
<>
<Header/>
<PageWrapper>{children}</PageWrapper>
<Footer/>
</>

    )
};

export default PageLayout;