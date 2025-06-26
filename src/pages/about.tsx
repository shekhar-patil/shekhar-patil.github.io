import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Shekhar Patil"
      description="Know more about Shekhar Patil - Senior Software Engineer and Open Source Contributor"
    >
      <main className={styles.main}>
        <div className={styles.container}>

          {/* ✅ TEXT FIRST */}
          <div className={styles.textColumn}>
            <h1>Hey, I’m Shekhar Patil</h1>
            <p className={styles.subtitle}>
              Full-stack engineer, backend specialist, and open-source contributor.
            </p>

            <h2>About Me</h2>

            <p>
              I’m a Senior Software Engineer at <strong>Neurealm</strong>, based in Pune, with over 7 years of experience building scalable backend systems, crafting developer tools, and deploying modern infrastructure. My work revolves around creating clean, maintainable software that solves complex problems efficiently.
            </p>

            <p>
              My core expertise lies in <strong>Golang, Docker, Kubernetes, and Ruby</strong>. These technologies empower me to develop robust backend services, manage containerized applications, and contribute to developer productivity. Over the years, I have developed a deep passion for backend engineering and infrastructure automation.
            </p>

            <p>
              I have contributed to popular open-source projects like <strong>Ruby on Rails</strong>, <strong>Rubocop</strong>, and <strong>swagger-ui-engine</strong>. Contributing to the open-source community helps me stay at the forefront of technology while advocating for clean code, performance optimization, and system reliability.
            </p>

            <p>
              Outside of my professional work, I create educational content on <a href="https://www.shekharpatil.tech" target="_blank" rel="noreferrer" style={{ color: '#3b82f6' }}>shekharpatil.tech</a>, where I share tutorials, insights, and practical guides for developers. I also actively contribute to open source on <a href="https://github.com/shekhar-patil" target="_blank" rel="noreferrer" style={{ color: '#3b82f6' }}>GitHub</a> and share technical thoughts on <a href="https://www.linkedin.com/in/shekhar-patil-834462135/" target="_blank" rel="noreferrer" style={{ color: '#3b82f6' }}>LinkedIn</a>.
            </p>

            <p>
              My goal is to empower engineers by breaking down complex backend concepts into practical, easy-to-understand ideas that help build meaningful, scalable, and impactful software.
            </p>

            <h2>Connect with Me</h2>
            <div className={styles.socialLinks}>
              <a href="https://github.com/shekhar-patil" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/shekhar-patil-834462135/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/Shekharpatil95" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.youtube.com/@shekharpatil02" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>

          {/* ✅ IMAGE ON RIGHT (ON DESKTOP) */}
          <div className={styles.photoColumn}>
            <img src="/img/profile.png" alt="Shekhar Patil" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
