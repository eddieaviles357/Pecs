import {
  categories_container,
  background,
  backgroundAnimated,
  category_title
} from './Categories.module.scss';

import Image from 'next/image';
import {useState, useEffect} from 'react';

function Categories( {title, img, setExtend, extend, coord: { x, y }} ) {
  const handleClick = e => {
    setExtend(!extend);
  }
  return(
    <>
    <div 
      onClick={handleClick}
      id={title}
      className={categories_container}>
      <Image src={img} layout='fill'/>
    </div>
    <span className={category_title}>{title}</span>
      <style jsx>
        {`
          div {
            top: ${y}px!important;
            left: ${x}px!important;
          }
          span {
            top: ${y}px!important;
            left: ${x}px!important;
          }
          `
        }
      </style>
    </>
  )
}

export default Categories;