import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

export default function BlogPostItemHeader(): ReactNode {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {title, permalink, date, readingTime, tags, authors} = metadata;

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formattedDate = dateTimeFormat.format(new Date(date));

  if (!isBlogPostPage) {
    // Minimal header for list view — title only
    return (
      <header>
        <h2 className={styles.listTitle}>
          <Link to={permalink}>{title}</Link>
        </h2>
        <div className={styles.listMeta}>
          <time dateTime={date}>{formattedDate}</time>
          {typeof readingTime !== 'undefined' && (
            <span> · {Math.ceil(readingTime)} min read</span>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      {tags.length > 0 && (
        <div className={styles.tagRow}>
          {tags.map((tag) => (
            <Link key={tag.label} to={tag.permalink} className={styles.tag}>
              {tag.label}
            </Link>
          ))}
        </div>
      )}

      <h1 className={styles.title}>{title}</h1>

      <div className={styles.meta}>
        {authors.length > 0 && (
          <div className={styles.authorBlock}>
            {authors[0].imageURL && (
              <img
                src={authors[0].imageURL}
                alt={authors[0].name}
                className={styles.avatar}
              />
            )}
            {authors[0].name && (
              <span className={styles.authorName}>{authors[0].name}</span>
            )}
          </div>
        )}
        <div className={styles.metaRight}>
          <time dateTime={date} className={styles.date}>{formattedDate}</time>
          {typeof readingTime !== 'undefined' && (
            <span className={styles.readTime}>{Math.ceil(readingTime)} min read</span>
          )}
        </div>
      </div>

      <hr className={styles.divider} />
    </header>
  );
}
