'use client';

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import s from './embla.module.scss';
import { v4 } from 'uuid';

const EmblaCarousel = ({slides, direction}) => {
   
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [
      AutoScroll({
        ...direction,
        playOnInit: true,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        speed: 0.5,
      })
    ])
  
    return (
      <div className={s.embla}>
        <div className={s.embla__viewport} ref={emblaRef}>
          <div className={s.embla__container}>
            {slides.map((image) => (
              <div className={s.embla__slide} key={v4()}>
                <div className={s.thumb}><img src={image.url} alt={image.alt} /></div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default EmblaCarousel