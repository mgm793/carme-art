import React from 'react';
import { Photo } from './Photo/Photo';
import styles from './PhotoCollection.module.css';

export const PhotoCollection = ({ collection }) => {
  return ( 
    <section className={styles.photoCollection}>
    {
      collection.map((photo) => (
        <Photo key={photo.title} {...photo} />
      ))
    }
    </section>
  )
};