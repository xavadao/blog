import { posts } from '@/site/data/posts';
import { PostRoute } from '@/site/app-shell';

export default function Page() {
	return <PostRoute />;
}

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;
