import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import pngImage from '@site/static/img/dashboard.png';

export default function HomepageFeatures() {
  return (
    <div className={styles.container}>
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

      <section className={styles.quickLinksSection}>
        <h2 className={styles.sectionTitle}>Explore My Content</h2>
        <div className={styles.quickLinksGrid}>
          <a href="/docs/golang/intro" className={styles.quickLinkCard}>
            <div className={styles.cardIcon}>🚀</div>
            <h3>Golang Tutorials</h3>
            <p>Learn Go programming from basics to advanced concepts</p>
          </a>
          
          <a href="/docs/data-structures-and-algorithms/dsa-roadmap" className={styles.quickLinkCard}>
            <div className={styles.cardIcon}>💻</div>
            <h3>Data Structures & Algorithms</h3>
            <p>Comprehensive guide to DSA concepts and problem-solving</p>
          </a>
          
          <a href="/blog" className={styles.quickLinkCard}>
            <div className={styles.cardIcon}>📝</div>
            <h3>Blog Posts</h3>
            <p>Insights, tutorials, and tech articles</p>
          </a>
        </div>
      </section>
    </div>
  );
}
