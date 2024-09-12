import MainContainer from "@/components/layouts/MainCintainer";
import s from './about.module.scss';
import { Link } from "@/navigation";


const About = ()=> {
    return(
        <section className={s.conatiner}>
            <MainContainer>
                <article className={s.article}>
                <span>Hoodie Driver</span> - це спільнота для людей, об’єднаних любов’ю до своїх авто та відчуттям стилю. 

                Наразі Hoodiedriver активно розвивається, ми створюємо  нові продукти, додаємо нові категорії товарів та намагаємось завжди дивувати та задовольняти забаганки клієнтів. 

                Наша команда завжди працює з любов’ю та старанням, а емоції та відгуки наших клієнтів говорять про те, що наші зусилля не марні.

                Тож переходь в наш <Link href={'/store'}>Магазин</Link> та обирай стильну обновку для свого авто 😎

                Історію створення нашого бренду можна почитати в нашому <Link href={'/blog'}>блозі</Link>.
                </article>
            </MainContainer>
        </section>
    )
}

export default About;