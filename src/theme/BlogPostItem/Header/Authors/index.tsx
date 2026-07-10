import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogAuthor from '@theme/Blog/Components/Author';
import type {Props} from '@theme/BlogPostItem/Header/Authors';

export default function BlogPostItemHeaderAuthors({className}: Props): ReactNode {
  const {
    metadata: {authors},
    assets,
    isBlogPostPage,
  } = useBlogPost();

  // Hide authors on the blog list/index page
  if (!isBlogPostPage) {
    return null;
  }

  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }

  const imageOnly = authors.every(({name}) => !name);
  const singleAuthor = authors.length === 1;

  return (
    <div
      className={clsx(
        'margin-top--md margin-bottom--sm',
        imageOnly ? undefined : 'row',
        className,
      )}>
      {authors.map((author, idx) => (
        <div
          className={clsx(
            !imageOnly && (singleAuthor ? 'col col--12' : 'col col--6'),
          )}
          key={idx}>
          <BlogAuthor
            author={{
              ...author,
              imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
            }}
          />
        </div>
      ))}
    </div>
  );
}
