import {
  categories_container,
  background,
  backgroundAnimated
} from './Categories.module.scss';

import Image from 'next/image';
import {useState, useEffect} from 'react';

function Categories({title, img, x, y}) {

  // onClick={e=>console.log(e.target.getBoundingClientRect())}
  return(
    <div 
      onClick={e=>{
        let square = e.target.getBoundingClientRect();
        console.log('---------------------------------------------------')
        console.log('CATEGORY::CENTER::HEIGHT::Y', square.top + ( square.height / 2 ));
        console.log('CATEGORY::CENTER::WIDTH::X', square.left + ( square.width / 2 ));
        console.log('---------------------------------------------------')
      }}
      id={title}
      className={categories_container}>
      {title}
      <Image src={img} layout='fill'/>
      <style jsx>
        {
          `div {
            top: ${y}px!important;
            left: ${x}px!important;
          }`
        }
      </style>
    </div>
  )
}

export default Categories;