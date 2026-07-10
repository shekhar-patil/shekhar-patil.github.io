const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

module.exports = function recentBlogPostsPlugin(context) {
  return {
    name: 'recent-blog-posts-plugin',

    async loadContent() {
      const blogDir = path.join(context.siteDir, 'blog');
      const entries = fs.readdirSync(blogDir);
      const posts = [];

      for (const entry of entries) {
        if (entry === 'authors.yml' || entry === 'tags.yml') continue;

        const fullPath = path.join(blogDir, entry);
        let filePath;

        if (fs.statSync(fullPath).isDirectory()) {
          filePath = path.join(fullPath, 'index.md');
          if (!fs.existsSync(filePath)) {
            filePath = path.join(fullPath, 'index.mdx');
            if (!fs.existsSync(filePath)) continue;
          }
        } else if (entry.endsWith('.md') || entry.endsWith('.mdx')) {
          filePath = fullPath;
        } else {
          continue;
        }

        const raw = fs.readFileSync(filePath, 'utf-8');
        const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) continue;

        let fm;
        try {
          fm = yaml.load(match[1]);
        } catch {
          continue;
        }

        const { title, slug } = fm || {};
        if (!title) continue;

        // Use frontmatter date if present, otherwise extract from filename/dirname
        let date = fm?.date;
        if (!date) {
          const dateMatch = entry.match(/^(\d{4}-\d{1,2}-\d{1,2})/);
          if (!dateMatch) continue;
          date = dateMatch[1];
        }

        let permalink;
        if (slug) {
          permalink = `/blog/${slug}`;
        } else {
          // Strip leading date prefix: 2019-01-04-first-post -> first-post
          const base = path.basename(entry, path.extname(entry));
          const stripped = base.replace(/^\d{4}-\d{2}-\d{2}-/, '');
          permalink = `/blog/${stripped}`;
        }

        posts.push({ title, date: String(date), permalink });
      }

      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      return posts;
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData({ posts: content });
    },
  };
};
