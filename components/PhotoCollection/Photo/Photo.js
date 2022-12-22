import Image from 'next/image';
import React from 'react';
import styles from './Photo.module.css';

export const Photo = ({title, price, image}) => {

  return <div className={styles.container}>
    <Image 
      src={image.url} 
      alt={title} 
      loader={({src}) => src} 
      width={300} 
      height={300} 
      placeholder="blur" 
      blurDataURL='/images/placeholder.webp'
    />
   
    <div className={styles.info}>
      <h4>{title}</h4>
      <p className={styles.price}>{price}€</p>
    </div>
  </div>;
};