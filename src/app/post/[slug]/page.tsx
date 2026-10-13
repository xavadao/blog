import { pageMetadata } from '@/lib/seo';
import { getPostBySlug } from '@/site/data/posts';
import { posts } from '@/site/data/posts';
import { PostRoute } from '@/site/app-shell';

export default function Page() {
	return <PostRoute />;
}

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getPostBySlug(slug);
  if (!item) return pageMetadata('Page not found', 'The requested sample page does not exist.', '/post/' + slug, false);
  return pageMetadata(item.title, `Sample ${item.category} story from Lumière: ${item.excerpt}`, '/post/' + slug, true, item.image);
}
