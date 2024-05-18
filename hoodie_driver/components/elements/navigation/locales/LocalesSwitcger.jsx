'use client';

import s from './locales.module.scss'
import {useLocale} from 'next-intl';
import { locales } from '@/navigation';
import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {useRouter,usePathname} from '@/navigation';
import { useState,useEffect,useRef,useTransition } from 'react';

import Ukr from '../../../../public/ukr.svg';
import Rus from '../../../../public/rus.svg';

const Flags ={ uk: <Ukr className={s.icon}/>, ru: <Rus className={s.icon}/>}

const LocalesSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const locale = useLocale();

  const toggleDropdown = () => !isPending && setIsOpen(!isOpen);

  const localeslist = locales.filter(i => i !== locale);
  
  
    const handleChangeLang = e => {
     if(isPending) return;
      const nextLocale = e.currentTarget?.id;

      startTransition(() => {
        router.replace(pathname,
          {...params,locale: nextLocale}
        );
      });

      toggleDropdown();
    };
  
    useEffect(() => {
      const handleClick = event => {
        const { target } = event;
        if (target instanceof Node && !rootRef.current?.contains(target)) {
          isOpen && setIsOpen(false);
        }
      };
  
      window.addEventListener('click', handleClick);
  
      return () => {
        window.removeEventListener('click', handleClick);
      };
    }, [isOpen]);
  
    return (
      <div onClick={toggleDropdown} className={s.container}>
        <div ref={rootRef} className={s.item}>
          {Flags[locale]}
        </div>
        {(
          <ul className={clsx(s.dropdown, {[s.open]: isOpen})}>
            {localeslist.map((loc) => (
              <li
                id={loc}
                key={loc}
                className={s.item}
                onClick={handleChangeLang}
              >
                {Flags[loc]}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  


  export default LocalesSwitcher;