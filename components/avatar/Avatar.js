import {Avatar_container} from './Avatar.module.scss';
import Image from 'next/image';
import {useEffect,useState} from 'react';

function Avatar({setXY}) {
  return (
    <div 
    id={'avatar'} className={Avatar_container}>
      <Image
        src='/img/SHIRT_640x587.png'
        width={100}
        height={100}
        layout='intrinsic'
        />
      <h1>Eric A.</h1>
    </div>
  )
}
export default Avatar;