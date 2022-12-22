import React, { useState } from 'react';
import { Photo } from './Photo';
import { PhotoZoom } from './PhotoZoom';
import styles from './PhotoCollection.module.css';
import classNames from 'classnames';

import { Montserrat } from '@next/font/google';
import { useZoomImage } from '../../hooks/useZoomImage';

const montserrat = Montserrat();

export const PhotoCollection = ({ collection }) => {
  const {close, zoom, selectedImage} = useZoomImage();
  return ( 
    <div className={ montserrat.className}>
      <section className={classNames(styles.photoCollection)}>
      {
        collection.map((photo) => (
          <Photo key={photo.title} onClick={() => zoom(photo)} {...photo} />
        ))
      }
      </section>
      {selectedImage ? <PhotoZoom onClose={close} {...selectedImage}/> : <></>}
    </div>
  )
};