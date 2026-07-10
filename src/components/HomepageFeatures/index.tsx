import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

type BlogPost = {title: string; date: string; permalink: string};

const features = [
  {
    icon: '⚙️',
    title: 'Golang Tutorials',
    description: 'From goroutines to production patterns — deep dives into Go.',
    href: '/docs/golang/intro',
  },
  {
    icon: '🧠',
    title: 'Data Structures & Algorithms',
    description: 'Practical DSA with real interview problems and explanations.',
    href: '/docs/data-structures-and-algorithms/dsa-roadmap',
  },
  {
    icon: '✍️',
    title: 'Blog',
    description: 'Thoughts on backend engineering, cloud, and open source.',
    href: '/blog',
  },
];

export default function HomepageFeatures() {
  const {posts} = usePluginData('recent-blog-posts-plugin') as {posts: BlogPost[]};
  const recentPosts = (posts ?? []).slice(0, 4);

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>Hey, I'm</p>
            <h1 className={styles.heroName}>Shekhar Patil</h1>
            <p className={styles.heroBio}>
              Senior Software Engineer with 7+ years of experience in Go, Ruby on Rails,
              Docker, and Kubernetes. Open-source contributor to Rails, Rubocop, and
              swagger-ui-engine. I write about backend engineering, distributed systems,
              and cloud infrastructure.
            </p>
            <div className={styles.heroActions}>
              <Link to="/blog" className={styles.btnPrimary}>Read the Blog</Link>
              <a href="https://github.com/shekhar-patil" target="_blank" rel="noreferrer" className={styles.btnGhost}>GitHub</a>
              <a href="https://www.linkedin.com/in/shekhar-patil-834462135/" target="_blank" rel="noreferrer" className={styles.btnGhost}>LinkedIn</a>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <img src="/img/profile.png" alt="Shekhar Patil" className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* ── Featured areas ── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Explore</h2>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <Link key={f.href} to={f.href} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
                <span className={styles.featureArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent posts ── */}
      {recentPosts.length > 0 && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Recent Posts</h2>
              <Link to="/blog" className={styles.seeAll}>All posts →</Link>
            </div>
            <div className={styles.postGrid}>
              {recentPosts.map((post) => (
                <Link key={post.permalink} to={post.permalink} className={styles.postCard}>
                  <p className={styles.postDate}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <span className={styles.postRead}>Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
