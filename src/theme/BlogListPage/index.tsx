import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogListPage';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {siteConfig: {title: siteTitle}} = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogCard({item}: {item: Props['items'][number]}): ReactNode {
  const {content} = item;
  const {metadata} = content;
  const {title, permalink, date, readingTime, tags, description} = metadata;

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formattedDate = dateTimeFormat.format(new Date(date));

  return (
    <article className={styles.card}>
      <Link to={permalink} className={styles.cardLink}>
        <div className={styles.cardBody}>
          <h2 className={styles.cardTitle}>{title}</h2>
          {description && <p className={styles.cardDescription}>{description}</p>}
          <div className={styles.cardMeta}>
            <time dateTime={date} className={styles.cardDate}>{formattedDate}</time>
            {typeof readingTime !== 'undefined' && (
              <span className={styles.cardReadTime}>
                {Math.ceil(readingTime)} min read
              </span>
            )}
          </div>
          {tags.length > 0 && (
            <div className={styles.cardTags}>
              {tags.map((tag) => (
                <span key={tag.label} className={styles.tag}>
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const {metadata, items, sidebar} = props;
  return (
    <BlogLayout sidebar={sidebar}>
      <div className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <p className={styles.blogSubtitle}>
          Thoughts on Go, Ruby, cloud infrastructure, and software engineering.
        </p>
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <BlogCard key={item.content.metadata.permalink} item={item} />
        ))}
      </div>
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
