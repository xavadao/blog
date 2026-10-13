import type { MetadataRoute } from 'next';
import { site } from '@/lib/seo';
import { posts, CATEGORY_META } from '@/site/data/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/posts", ...posts.map(({ slug }) => `/post/${slug}`), ...Object.keys(CATEGORY_META).map((slug) => `/category/${slug}`),];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
