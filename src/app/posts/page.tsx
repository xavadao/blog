import { pageMetadata } from '@/lib/seo';
import { PostsRoute } from '@/site/app-shell';

export default function Page() {
  return <PostsRoute />;
}

export const metadata = pageMetadata("All Stories", "Browse all nine sample Lumi\u00e8re stories across wellness, travel and personal growth.", "/posts", true);
