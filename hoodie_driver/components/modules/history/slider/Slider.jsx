'use client'
import Carousel from "react-multi-carousel";
import Custom_dot from "./Custom_dot";
import s from './slider.module.scss';
import { v4 } from "uuid";

const Slider = ({slides})=> {

    return (
        <Carousel 
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass={s.container}
        dotListClass={s.custom_dot_list}
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
        customDot={<Custom_dot/>}
        swipeable
        >
      
        {slides.map(({url, alt})=> {return <div className={s.thumb} key={v4()} >
            <img className={s.image} src={url} alt={alt}/>
            </div>})}
          </Carousel>
    )

};



export default Slider;