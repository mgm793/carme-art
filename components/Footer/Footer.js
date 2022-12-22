import React from 'react';
import styles from './Footer.module.css';
import classNames from 'classnames';

import { Montserrat } from '@next/font/google';

const montserrat = Montserrat();

export const Footer = () => {
  return <footer className={classNames(montserrat.className, styles.footer)}>
    <a href='mailto:carmemullon@gmail.com' target="_blank"><p className={styles.email}>carmemullon@gmail.com</p></a>
  </footer>;
};