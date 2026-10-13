'use client';

/**
 * PostGrid — Latest posts in an editorial masonry-style 3-col grid.
 * First post gets a 'large' card spanning 2 cols on desktop.
 * Staggered fade-up on scroll.
 */
import { Link } from '@/lib/router-compat';
import { useFadeUp } from '../hooks/useFadeUp';
import { getLatestPosts } from '../data/posts';
import { PostCard } from './PostCard';

export function PostGrid() {
	const sectionRef = useFadeUp();
	const posts = getLatestPosts(7);
	const [featured, ...rest] = posts;

	return (
		<section
			ref={sectionRef}
			style={{ backgroundColor: 'var(--color-card)', paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-12">

				{/* Section header */}
				<div className="fade-up flex items-end justify-between mb-14">
					<div>
						<p
							className="font-sans mb-3"
							style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
						>
							✦ Latest
						</p>
						<h2
							className="font-serif"
							style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.015em' }}
						>
							From the journal
						</h2>
					</div>
					<Link
						to="/posts"
						className="link-underline hidden lg:inline-flex font-sans items-center gap-2 mb-1"
						style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
					>
						View all posts →
					</Link>
				</div>

				{/* Featured large card — full width on mobile, 2/3 on desktop */}
				<div className="fade-up mb-10">
					<PostCard post={featured} size="large" />
				</div>

				{/* Remaining posts — 3-col grid */}
				<div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
					{rest.map((post) => (
						<div key={post.slug} className="fade-up">
							<PostCard post={post} />
						</div>
					))}
				</div>

				{/* Mobile "view all" */}
				<div className="fade-up mt-12 flex justify-center lg:hidden">
					<Link
						to="/posts"
						className="link-underline font-sans"
						style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
					>
						View all posts →
					</Link>
				</div>
			</div>
		</section>
	);
}
