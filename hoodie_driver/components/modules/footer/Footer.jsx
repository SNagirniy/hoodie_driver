import MainContainer from "@/components/layouts/MainCintainer";
import Newsletter from "@/components/elements/newsletter/Newsletter";
import Footerlinks from "@/components/elements/footer_links/FooterLinks";
import Credits from "@/components/elements/credits/Credits";
import s from './footer.module.scss';

const Footer =()=> {

    return (
        <footer className={s.footer}>
            <MainContainer>
                <div className={s.container}>
                    <Newsletter/> 
                    <Footerlinks/>
                    <Credits/>
                </div>
           
            </MainContainer>
        </footer>
    )
}

export default Footer;