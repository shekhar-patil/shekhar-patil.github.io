import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/BlogPostItem/Content';

export default function BlogPostItemContent({children, className}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();

  if (!isBlogPostPage) {
    return null;
  }

  return (
    <div
      id={blogPostContainerID}
      className={clsx('markdown', className)}>
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
