
'use client';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import s from './slider.module.scss';
import { v4 } from "uuid";
import { usePathname } from "@/navigation";
import ButtonGroup from "./controlers/ButtonGroup";
import CustomDot from "./controlers/CustomDot";
import Card from "@/components/elements/card/Card";

const Slider = ({slides, colors})=> {
  const pathname = usePathname();

  const pathnameToArray =(pathname) =>{

    if (pathname.startsWith('/')) {
      pathname = pathname.slice(1);
    }
    if (pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    const pathArray = pathname.split('/');
    return pathArray;
  }
  const isSlideItemCard = pathnameToArray(pathname).some((el)=> el === 'store')
 

  return (
    <div className={s.container}>
    <Carousel 
  additionalTransfrom={0}
  arrows={false}
  customButtonGroup={<ButtonGroup/>}
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass={s.slider}
  dotListClass={s.dot_list}
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass={s.item}
  keyBoardControl
  minimumTouchDrag={80}
  partialVisible
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={true}
  renderDotsOutside={true}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1280
      },
      items: 4,
      partialVisibilityGutter: 10
    },
    mobile: {
      breakpoint: {
        max: 767,
        min: 0
      },
      items: isSlideItemCard? 1 : 2,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: {
        max: 1279,
        min: 768
      },
      items: 2,
      partialVisibilityGutter: 10
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={true}
  customDot={<CustomDot/>}
  sliderClass=''
  slidesToSlide={1}
  swipeable
  >
  
  {isSlideItemCard && slides?.map((el)=> {return <Card key={el.id} color_map={colors} product={el} />})}

  {!isSlideItemCard && slides?.map(({url, alt})=> {return <div className={s.thumb} key={v4()} ><img className={s.image} src={url} alt={alt} /></div>})}
    </Carousel>
    </div>
  )
};

export default Slider;


