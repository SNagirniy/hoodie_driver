'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { v4 } from 'uuid';
import s from './accordion.module.scss';
import IndicatorIcon from  '../../../public/indicator_icon.svg';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';



const CustomAccordion = ({items})=> {

    const t = useTranslations("Home");

    const itemClasses = {
        base: s.base,
        title: s.title,
        trigger: s.trigger,
        indicator: s.indicator,
        content: s.content,
       
      };

    return (

        <Accordion variant="light" fullWidth='false' className={s.container} itemClasses={itemClasses}>
            {
                items.map(({question, answer})=> {return (
                    <AccordionItem  indicator={({ isOpen }) => <IndicatorIcon className={clsx(s.icon, {[s.open]: isOpen})}/>} key={v4()} aria-label={t(`QsA.Questions.${question}`)} title={t(`QsA.Questions.${question}`)}>
                        {answer}
                    </AccordionItem>
                )})
            }

        </Accordion>
    )

};

export default CustomAccordion;