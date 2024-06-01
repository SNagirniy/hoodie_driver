'use client';

import s from './locales.module.scss'
import {useLocale} from 'next-intl';
import { locales } from '@/navigation';
import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {useRouter,usePathname} from '@/navigation';
import { useState,useEffect,useRef,useTransition } from 'react';




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
          <p className={s.loc_title}>{locale?.toLocaleUpperCase()}</p>
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
                <p className={s.loc_title}>{loc?.toLocaleUpperCase()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  


  export default LocalesSwitcher;