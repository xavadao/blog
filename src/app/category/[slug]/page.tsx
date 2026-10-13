import { pageMetadata } from '@/lib/seo';
import type { Category } from '@/site/data/posts';
import { CATEGORY_META } from '@/site/data/posts';
import { CategoryRoute } from '@/site/app-shell';

export default function Page() {
	return <CategoryRoute />;
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = CATEGORY_META[slug as Category];
  if (!category) return pageMetadata('Category not found', 'The requested sample category does not exist.', '/category/' + slug, false);
  return pageMetadata(category.label + ' Stories', `Explore sample ${category.label.toLowerCase()} stories in the Lumière lifestyle journal. ${category.description}`, '/category/' + slug);
}
