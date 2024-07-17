import MainContainer from "@/components/layouts/MainCintainer";
import s from './store_catalogue_section.module.scss';
import StoreAside from "../store_aside/StoreAside";

const StoreCataloqueSection = ({children})=> {

    return (
        <section className={s.section}>
            <MainContainer>
        <div className={s.container}>
            <hgroup className={s.title_box}>
                <h1>Магазин</h1>
                <p>Вітаємо в нашому магазині.</p>
            </hgroup>

            <div className={s.wrapper}>
                <StoreAside/>
                <div className={s.catalogue_list_container}>{children}</div>
            </div>

        </div>
            </MainContainer>
        </section>
    )
};

export default StoreCataloqueSection;