'use client'
import "react-image-gallery/styles/scss/image-gallery.scss";
import s from "./product_slider.module.scss";
import ReactImageGallery from "react-image-gallery";



const ProductSlider = ({image, title, images_set})=> {

    const renderedImages = [image, ...images_set]?.map( img => {return  {
        original: img,
        thumbnail: img,
        thumbnailClass: s.thumbnail,
        originalClass: s.original,
        originalAlt: title,
        originalHeight: 533,
        originalWidth: 400,
        thumbnailHeight:107,
      thumbnailWidth: 80}
        
      },)

      

    return (
        <div className={s.thumb}>
           <ReactImageGallery 
           items={renderedImages}
           lazyLoad={true}
           showFullscreenButton={false}
           showPlayButton={false}
           thumbnailPosition={'left'}
           additionalClass={s.gallery}
          />
        </div>
    )
};

export default ProductSlider;