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
                <a href="https://linkedin.com/in/shekhar-patil" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://x.com/Shekharpatil95" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://www.youtube.com/@shekharpatil5044" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>About Me</h2>
              <p>
                I'm a passionate developer who loves turning ideas into reality through code. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through my blog and YouTube channel.
              </p>
            </section>

            <section className={styles.section}>
              <h2>My Journey</h2>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2023</div>
                  <div className={styles.timelineContent}>
                    <h3>Started Content Creation</h3>
                    <p>Launched my YouTube channel and blog to share programming knowledge</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2022</div>
                  <div className={styles.timelineContent}>
                    <h3>Cloud & DevOps</h3>
                    <p>Dived deep into GCP and Kubernetes for scalable applications</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2021</div>
                  <div className={styles.timelineContent}>
                    <h3>Full Stack Development</h3>
                    <p>Worked on building microservices with Go and Ruby on Rails</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2020</div>
                  <div className={styles.timelineContent}>
                    <h3>Frontend Focus</h3>
                    <p>Mastered React and Next.js for modern web applications</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2019</div>
                  <div className={styles.timelineContent}>
                    <h3>Backend Development</h3>
                    <p>Started my journey with Python and database systems</p>
                  </div>
                </div>
              </div>
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