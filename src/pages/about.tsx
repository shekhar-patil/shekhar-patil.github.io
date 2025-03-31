import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

export default function About(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title="About Me" description="About Shekhar Patil - Full Stack Developer">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.profileImage}>
              <img src="/img/profile.png" alt="Shekhar Patil" />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.headerContent}>
              <h1>Hey, I'm Shekhar! 👋</h1>
              <p className={styles.tagline}>Full Stack Developer who loves building cool stuff</p>
              <div className={styles.socialLinks}>
                <a href="https://github.com/shekhar-patil" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/shekhar-patil-834462135/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://x.com/Shekharpatil95" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://www.youtube.com/@shekharpatil02" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>About Me</h2>
              <p>
                Based in Pune, India, I'm a Software Engineer with a Computer Engineering background. My professional journey has been shaped by working with modern technologies like Ruby, Rails, Golang, Docker, Kubernetes, and Google Cloud Platform. I'm passionate about open-source development and have made contributions to notable projects including Rails, Rubocop, and Swagger UI Engine. I'm also proud to be a maintainer of the pdf_scanner Ruby gem.
              </p>
              <p>
                As a developer, I thrive on transforming innovative ideas into reality through clean, efficient code. Beyond coding, I'm constantly exploring emerging technologies and sharing my knowledge through technical blog posts and educational YouTube content. I believe in giving back to the developer community through open-source contributions and mentoring aspiring developers.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Tech Stack I Love Working With</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h3>Backend</h3>
                  <ul>
                    <li>Golang</li>
                    <li>Ruby</li>
                    <li>Rails</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Frontend</h3>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Databases</h3>
                  <ul>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h3>DevOps & Cloud</h3>
                  <ul>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>GCP</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>What I Do For Fun</h2>
              <ul className={styles.experienceList}>
                <li>Contributing to open-source projects</li>
                <li>Creating educational content for developers</li>
                <li>Solving coding challenges</li>
                <li>Exploring new technologies</li>
                <li>Mentoring aspiring developers</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
} 