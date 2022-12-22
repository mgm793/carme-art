import React from 'react';
import styles from './Header.module.css'
import { Great_Vibes } from '@next/font/google'
import classNames from 'classnames';
import { useLang } from '../../hooks/useLang';
import {TRANSLATES} from '../../translates'

const greatVibes = Great_Vibes({
  weight: "400",
});
export const Header = () => {
  const {actualLang} = useLang();
  return (
  <header className={classNames(styles.header, greatVibes.className)}>
    <h1 className={styles.title}>Carme Mullon</h1>
    <a href='mailto:carmemullon@gmail.com' target="_blank" className={styles.contact}>
      <p>{TRANSLATES.CONTACT[actualLang]}</p>
    </a>
  </header>);
};