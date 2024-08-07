import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Golang Docs',
    Img: require('@site/static/img/docs.png').default,
    description: (
      <>
        Comprehensive documentation on Golang programming, covering various topics and best practices.
      </>
    ),
    link: '/docs/golang/intro',
  },
  {
    title: 'Blogs',
    Img: require('@site/static/img/blog.jpg').default,
    description: (
      <>
        Insightful blogs on web development, DevOps, and more. Stay updated with the latest trends and technologies.
      </>
    ),
    link: '/blog',
  },
  {
    title: 'Schedule Meeting',
    Img: require('@site/static/img/meeting.jpg').default,
    description: (
      <>
        Book a 1-1 meeting with me to discuss your projects, get mentorship, or ask for advice.
      </>
    ),
    link: 'https://calendly.com/shekhar-patil',
  },
];

function Feature({ title, Img, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
