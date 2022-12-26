import Image from 'next/image';
import React from 'react';
import { useZoomSize } from '../../../hooks/useZoomSize';
import styles from './PhotoZoom.module.css';

export const PhotoZoom = ({image, title, price, onClose}) => {
  const {width, height} = useZoomSize(800, 10);
  return (
    <div className={styles.container} onClick={onClose}>
    <div className={styles.imageContainer} onClick={(evt) => evt.stopPropagation()}>
      <Image
        src={image.url} 
        alt={title} 
        loader={({src}) => src} 
        width={width} 
        height={height} 
        placeholder="blur" 
        blurDataURL='/images/placeholder.webp'
      />
      <div className={styles.imageInfo}>
        <h4>{title}</h4>
        <p className={styles.imagePrice}>{price}€</p>
      </div>
    </div>
    </div>
  );
};