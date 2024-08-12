import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'; 
import pngImage from '@site/static/img/dashboard.png';

export default function HomepageFeatures() {
  return (
    <section className={clsx('container', styles.welcomeSection)}>
      <div className={clsx(styles.textContainer)}>
        <h1 className={styles.welcomeText}>
          Welcome to <span className={styles.shekharText}>Shekhar's</span> Channel
        </h1>
        <p className={styles.descriptionText}>
          Enthusiastic full-stack developer with extensive programming experience.
        </p>
      </div>
      <div className={clsx(styles.imageContainer)}>
        <img src={pngImage} className={styles.pngImage} alt="Dashboard" />
      </div>
    </section>
  );
}
