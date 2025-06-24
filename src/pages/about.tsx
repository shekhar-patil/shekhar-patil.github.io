import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

export default function About(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="About" description="Know more about Shekhar Patil - Software Engineer from India">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <img src="/img/profile.png" alt="Shekhar Patil" className={styles.avatar} />
            <h1>Hey, I'm Shekhar 👋</h1>
            <p className={styles.subtitle}>Software Engineer | Backend Enthusiast | Open Source Contributor</p>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>About Me</h2>
              <p>
                I'm a software engineer based in Pune, India, with over 7 years of experience in building web applications using
                technologies like Golang, Ruby, JavaScript, and Python.
              </p>
              <p>
                Currently, I’m working at <strong>Neurealm</strong>. In the past, I’ve had the opportunity to work with amazing teams at
                Sell.Do, BigBinary, Cardup, and TakeOff.
              </p>
              <p>
                Unfortunately, TakeOff filed for bankruptcy which led to a layoff. But every challenge opens a new door — and that’s when I joined Neurealm.
              </p>
              <p>
                I enjoy contributing to open-source and have contributed to projects like <strong>Rails</strong>, <strong>Rubocop</strong>, and <strong>Swagger UI Engine</strong>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Outside of Work</h2>
              <p>
                When I'm not coding, you'll find me playing table tennis 🏓, badminton 🏸, or solving LeetCode problems just for fun.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Connect with Me</h2>
              <div className={styles.socialLinks}>
                <a href="https://github.com/shekhar-patil" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/shekhar-patil-834462135/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/Shekharpatil95" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.youtube.com/@shekharpatil02" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
