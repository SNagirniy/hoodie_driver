import s from './questions.module.scss';
import MainContainer from '@/components/layouts/MainCintainer';
import MainButton from '@/components/elements/mainButton/Main_Button';
import CustomAccordion from '@/components/elements/accodrion/CustomAccordion';

const question_list = [
{
    question: 'Як зробити замовлення?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
},
{
    question: 'Як замовити свій дизайн/принт/тощо?',
    answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
},
{
    question: 'Скільки часу займає виготовлення?',
    answer: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
},
{
    question: 'Якими транспортними компаніями відбувається доставка та в які країни?',
    answer: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
},
{
    question: 'Які умови оплати замовлення?',
    answer: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
}
];

const Questions = ()=> {

    return (
        <section className={s.section}>
            <MainContainer>
                <article className={s.article}>
                    <hgroup className={s.headers}>
                        <h2 className={s.title}>Питання - Відповідь</h2>
                        <p>Відповіді на популярні питання</p>
                    </hgroup>

                    <CustomAccordion items={question_list}/>


                    <footer className={s.headers}>
                        <p className={s.footer_title}>Залишились питання?</p>
                        <span>Обери зручний спосіб зв’язку</span>
                        <MainButton title={'Запитай зараз!'} path={'/contacts'}/>
                     </footer>
                    

                </article>
            </MainContainer>
        </section>
    )
};


export default Questions;