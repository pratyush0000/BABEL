import React from 'react';
import styles from './Ellipses.module.css'; // Import the styles

const Ellipses = () => {
  return (
    <div className={styles.ellipsesContainer}>
      <div className={`${styles.ellipse} ${styles.bottomLeft}`}></div>
      <div className={`${styles.ellipse} ${styles.topRight}`}></div>
    </div>
  );
};

export default Ellipses;