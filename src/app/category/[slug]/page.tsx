import { CATEGORY_META } from '@/site/data/posts';
import { CategoryRoute } from '@/site/app-shell';

export default function Page() {
	return <CategoryRoute />;
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((slug) => ({ slug }));
}

export const dynamicParams = false;
