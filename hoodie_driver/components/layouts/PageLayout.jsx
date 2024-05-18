import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";


const PageLayout =({children})=> {

    return (
<>
<Header/>
<main>{children}</main>
<Footer/>
</>

    )
};

export default PageLayout;