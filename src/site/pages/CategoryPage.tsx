'use client';

/**
 * CategoryPage — Filtered post list for a single category pillar.
 * Full-width category header · post grid · back link.
 */
import { useParams, Link } from '@/lib/router-compat';
import { useFadeUp } from '../hooks/useFadeUp';
import { getPostsByCategory, posts as allPosts, CATEGORY_META, type Category } from '../data/posts';
import { PostCard } from '../components/PostCard';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

const CATEGORY_IMAGES: Record<Category, string> = {
	wellness: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1800&q=80',
	travel: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1800&q=80',
	growth: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1800&q=80',
};

export function CategoryPage({ showAll = false }: { showAll?: boolean }) {
	const { slug } = useParams<{ slug: string }>();
	const category = (slug ?? 'wellness') as Category;
	const meta = showAll ? { label: 'Journal', description: 'Stories for a life well lived.' } : CATEGORY_META[category] ?? CATEGORY_META.wellness;
	const posts = showAll ? allPosts : getPostsByCategory(category);
	const sectionRef = useFadeUp();

	return (
		<>
			{/* ── Category hero header ── */}
			<section
				className="relative overflow-hidden"
				style={{ paddingTop: '10rem', paddingBottom: '6rem', backgroundColor: 'var(--color-cream)' }}
			>
				{/* Faint background image */}
				<div className="absolute inset-0 pointer-events-none">
					<img
						src={CATEGORY_IMAGES[category]}
						alt=""
						aria-hidden="true"
						className="w-full h-full object-cover"
						style={{ opacity: 0.12 }}
					/>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
					{/* Breadcrumb */}
					<div className="flex items-center gap-3 mb-10">
						<Link
							to="/"
							className="link-underline font-sans"
							style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
						>
							Home
						</Link>
						<span style={{ color: 'var(--color-taupe)', fontSize: '0.6rem' }}>→</span>
						<span
							className="font-sans"
							style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-foreground)' }}
						>
							{meta.label}
						</span>
					</div>

					{/* Eyebrow */}
					<p
						className="font-sans mb-4"
						style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
					>
						✦ {meta.label}
					</p>

					{/* Title */}
					<h1
						className="font-serif mb-5"
						style={{
							fontSize: 'clamp(2.5rem, 6vw, 5rem)',
							lineHeight: 1.05,
							letterSpacing: '-0.02em',
							color: 'var(--color-foreground)',
							maxWidth: '16ch',
						}}
					>
						{meta.description}
					</h1>

					{/* Post count */}
					<p
						className="font-sans"
						style={{ fontSize: '0.8rem', color: 'var(--color-warm-mid)' }}
					>
						{posts.length} {posts.length === 1 ? 'story' : 'stories'}
					</p>
				</div>
			</section>

			{/* ── Post grid ── */}
			<section
				ref={sectionRef}
				style={{ backgroundColor: 'var(--color-background)', paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-12">
					{posts.length === 0 ? (
						<div className="text-center py-24">
							<p className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-warm-mid)' }}>
								No stories yet — check back soon.
							</p>
						</div>
					) : (
						<div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
							{posts.map((post) => (
								<div key={post.slug} className="fade-up">
									<PostCard post={post} />
								</div>
							))}
						</div>
					)}
				</div>
			</section>

			<Newsletter />
			<Footer />
		</>
	);
}
