import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
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