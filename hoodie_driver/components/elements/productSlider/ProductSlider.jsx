'use client'
import "react-image-gallery/styles/scss/image-gallery.scss";
import s from "./product_slider.module.scss";
import ReactImageGallery from "react-image-gallery";
import useWindowSize from "@/hooks/useWindowSize";



const ProductSlider = ({image, title, images_set})=> {
  const {width}= useWindowSize();

    const renderedImages = [image, ...images_set]?.map( img => {return  {
        original: img,
        thumbnail: img,
        thumbnailClass: s.thumbnail,
        originalClass: s.original,
        originalAlt: title,
       }
        
      },);

     
      const deviseWidth = {
        tablet: 768
      };
      
      const thumbNailPosition = width < deviseWidth.tablet? "bottom" : "left";
    return (
        <div className={s.thumb}>
           <ReactImageGallery 
           items={renderedImages}
           lazyLoad={true}
           showFullscreenButton={false}
           showPlayButton={false}
           thumbnailPosition={thumbNailPosition}
           additionalClass={s.gallery}
           
          />
        </div>
    )
};

export default ProductSlider;