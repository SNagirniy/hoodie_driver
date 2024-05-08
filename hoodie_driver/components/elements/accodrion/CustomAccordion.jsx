'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { v4 } from 'uuid';
import s from './accordion.module.scss';
import IndicatorIcon from  '../../../public/indicator_icon.svg';
import clsx from 'clsx';



const CustomAccordion = ({items})=> {

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
                    <AccordionItem  indicator={({ isOpen }) => <IndicatorIcon className={clsx(s.icon, {[s.open]: isOpen})}/>} key={v4()} aria-label={question} title={question}>
                        {answer}
                    </AccordionItem>
                )})
            }

        </Accordion>
    )

};

export default CustomAccordion;