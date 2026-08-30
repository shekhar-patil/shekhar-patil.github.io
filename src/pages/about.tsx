import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './about.module.css';

const skills = [
  'Golang', 'Ruby on Rails', 'Docker', 'Kubernetes',
  'PostgreSQL', 'Redis', 'gRPC', 'REST APIs',
  'GCP', 'CI/CD', 'Linux', 'Open Source',
];

const openSource = [
  { name: 'Ruby on Rails', url: 'https://github.com/rails/rails', desc: 'Web application framework' },
  { name: 'Rubocop', url: 'https://github.com/rubocop/rubocop', desc: 'Ruby static code analyzer' },
  { name: 'swagger-ui-engine', url: 'https://github.com/zuzannast/swagger_ui_engine', desc: 'Swagger UI for Rails' },
];

const social = [
  { label: 'GitHub', href: 'https://github.com/shekhar-patil', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shekhar-patil-834462135/', icon: 'in' },
  { label: 'Twitter / X', href: 'https://x.com/Shekharpatil95', icon: '𝕏' },
  { label: 'YouTube', href: 'https://www.youtube.com/@shekharpatil02', icon: '▶' },
  { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/7292776/shekhar-patil', icon: 'SO' },
];

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Shekhar Patil"
      description="Senior Software Engineer specializing in Golang, Ruby on Rails, Docker and Kubernetes."
    >
      <main className={styles.main}>

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>About me</p>
              <h1 className={styles.name}>Shekhar Patil</h1>
              <p className={styles.role}>Technical Lead at Neurealm · Pune, India</p>
              <p className={styles.bio}>
                Backend specialist with 8+ years building scalable systems in Go and Ruby.
                Open-source contributor, technical writer, and engineer who cares about clean,
                maintainable code that makes an impact.
              </p>
              <div className={styles.heroActions}>
                <Link to="/blog" className={styles.btnPrimary}>Read the Blog</Link>
                <a href="https://calendly.com/shekhar-patil" target="_blank" rel="noreferrer" className={styles.btnGhost}>Schedule a Call</a>
              </div>
            </div>
            <div className={styles.heroPhoto}>
              <img src="/img/profile-background-removed.png" alt="Shekhar Patil" className={styles.photo} />
            </div>
          </div>
        </section>

        <div className={styles.content}>

          {/* ── Story ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>My Story</h2>
            <div className={styles.prose}>
              <p>
                I'm a Technical Lead at <strong>Neurealm</strong>, building distributed backend
                systems and infrastructure tooling. My work revolves around Go, Ruby on Rails, Docker,
                and Kubernetes — technologies I use daily to build reliable, high-throughput services.
              </p>
              <p>
                Over the years I've developed a deep passion for backend engineering and infrastructure
                automation. I believe great software is as much about developer experience as user experience —
                clean APIs, readable code, and thoughtful architecture compound over time.
              </p>
              <p>
                Outside of work, I create educational content, contribute to open source, and share what
                I learn so other engineers can grow faster than I did.
              </p>
            </div>
          </section>

          {/* ── Skills ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <div className={styles.skillGrid}>
              {skills.map((s) => (
                <span key={s} className={styles.skill}>{s}</span>
              ))}
            </div>
          </section>

          {/* ── Open Source ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Open Source Contributions</h2>
            <div className={styles.ossGrid}>
              {openSource.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className={styles.ossCard}>
                  <span className={styles.ossName}>{p.name}</span>
                  <span className={styles.ossDesc}>{p.desc}</span>
                  <span className={styles.ossArrow}>↗</span>
                </a>
              ))}
            </div>
          </section>

          {/* ── Connect ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Connect</h2>
            <div className={styles.socialGrid}>
              {social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialCard}>
                  <span className={styles.socialIcon}>{s.icon}</span>
                  <span className={styles.socialLabel}>{s.label}</span>
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
