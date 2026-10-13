import { pageMetadata } from '@/lib/seo';
import { HomePage } from '@/site/app-shell';

export default function Page() {
	return <HomePage />;
}

export const metadata = pageMetadata("A Life Well Lived", "Explore the Lumi\u00e8re sample lifestyle journal, featuring wellness rituals, slow travel and personal growth. Newsletter signup is a demo.", "/", true);
