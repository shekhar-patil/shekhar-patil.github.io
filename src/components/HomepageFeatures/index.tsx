import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import pngImage from '@site/static/img/dashboard.png';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  const globalData = useGlobalData();
  const blogPosts = globalData['docusaurus-plugin-content-blog']?.default?.items || [];
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.welcomeSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.textContainer}>
              <h1 className={styles.welcomeText}>
                Welcome to <span className={styles.shekharText}>Shekhar's</span> Channel
              </h1>
              <p className={styles.descriptionText}>
                Senior Software Engineer based in Pune with 7+ years of experience in Golang, Docker, Kubernetes, and Ruby.
                Contributor to open-source projects like Rails, Rubocop & swagger-ui-engine. I share technical tutorials, blogs, and dev tools.
              </p>
              <div className={styles.linkRow}>
                <a href="https://github.com/shekhar-patil" target="_blank" rel="noreferrer" className={styles.socialButton}>GitHub</a>
                <a href="https://www.linkedin.com/in/shekhar-patil-834462135/" target="_blank" rel="noreferrer" className={styles.socialButton}>LinkedIn</a>
                <a href="/blog" className={styles.socialButton}>My Blog</a>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img src={pngImage} className={styles.pngImage} alt="Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className={styles.quickLinksSection}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>Explore My Content</h2>
          <div className={styles.quickLinksGrid}>
            <a href="/docs/golang/intro" className={styles.quickLinkCard}>
              <div className={styles.cardIcon}>🚀</div>
              <h3>Golang Tutorials</h3>
              <p>Learn Go programming from basics to advanced concepts.</p>
            </a>
            <a href="/docs/data-structures-and-algorithms/dsa-roadmap" className={styles.quickLinkCard}>
              <div className={styles.cardIcon}>💻</div>
              <h3>Data Structures & Algorithms</h3>
              <p>Comprehensive guide to DSA concepts and problem-solving.</p>
            </a>
            <a href="/blog" className={styles.quickLinkCard}>
              <div className={styles.cardIcon}>📝</div>
              <h3>Blog Posts</h3>
              <p>Insights, tutorials, and tech articles.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      {latestPosts.length > 0 && (
        <section className={styles.blogSection}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.sectionTitle}>Latest Blog Posts</h2>
            <div className={styles.blogGrid}>
              {latestPosts.map((post, idx) => (
                <Link to={post.permalink} key={idx} className={styles.blogCard}>
                  <h3>{post.title}</h3>
                  <p>{post.description || post.contentTitle || 'Read more →'}</p>
                  <span className={styles.blogDate}>
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
