import React from 'react';
import styles from './Header.module.css'
import { Great_Vibes } from '@next/font/google'
import classNames from 'classnames';

const greatVibes = Great_Vibes({
  weight: "400",
});
export const Header = () => {
  return (
  <header className={classNames( greatVibes.className ,styles.header )}>
    <h1 className={styles.title}>Carme Mullon</h1>
  </header>);
};