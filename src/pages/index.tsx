
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Blogs, Tutorials, Guidance`}
      description="Blogs, Tutorials, Guidance by Shekhar Patil">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
