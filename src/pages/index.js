import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        The iStreamPlanet API was designed from the ground up to make it easier than ever to get a channel up and running.
        <br/><br/>
        Our handy guide will help you get started in just a few steps.
        <br/><br/>
        <Link className="button button--primary" to="/docs/guide">Get Started</Link>
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        iStreamPlanet lets you focus on your content and your customers by enabling self-service for channel and user management. Choose how you interface with our system and make changes on your own terms while staying up to date with our tools.
        <br/><br/>
        <Link className="button button--primary" to="/docs/cli">Download CLI</Link>
        &nbsp;
        <Link className="button button--primary" to="/docs/sdks/javascript">Download SDKs</Link>
      </>
    ),
  },
  {
    title: 'Powered by Aventus',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        iStreamPlanet is powered by the Aventus media processing pipeline. It is simple to get started while also offering immense depth for transcoding and publishing options.
        <br/><br/>
        Benefit from our hand-picked defaults or take control and have it your way, it's up to you!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage: `url(${useBaseUrl('img/hero-code.png')})`}}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
