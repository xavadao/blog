'use client';

/**
 * PostPage — Single article page.
 * Full-bleed hero image · clean long-form reading layout · related posts.
 */
import { useParams, Link } from '@/lib/router-compat';
import { useFadeUp } from '../hooks/useFadeUp';
import { getPostBySlug, getLatestPosts, CATEGORY_META, type Category } from '../data/posts';
import { PostCard } from '../components/PostCard';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

export function PostPage() {
	const { slug } = useParams<{ slug: string }>();
	const post = getPostBySlug(slug ?? '');
	const sectionRef = useFadeUp();

	if (!post) {
		return (
			<>
				<div
					style={{
						minHeight: '80vh',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'var(--color-background)',
						paddingTop: '6rem',
						gap: '1.5rem',
					}}
				>
					<p className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--color-warm-mid)' }}>
						Story not found.
					</p>
					<Link
						to="/"
						className="link-underline font-sans"
						style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
					>
						← Back to home
					</Link>
				</div>
				<Footer />
			</>
		);
	}

	const meta = CATEGORY_META[post.category as Category];
	const related = getLatestPosts(4).filter((p) => p.slug !== post.slug).slice(0, 3);

	// Render simple markdown-like body (bold, italic, paragraphs)
	function renderBody(text: string) {
		return text.split('\n\n').map((para, i) => {
			if (!para.trim()) return null;
			// Bold: **text**
			const parts = para.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, j) => {
				if (part.startsWith('**') && part.endsWith('**')) {
					return <strong key={j}>{part.slice(2, -2)}</strong>;
				}
				if (part.startsWith('*') && part.endsWith('*')) {
					return <em key={j} className="font-accent">{part.slice(1, -1)}</em>;
				}
				return part;
			});
			return (
				<p
					key={i}
					className="font-sans"
					style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--color-muted-foreground)', marginBottom: '1.5rem' }}
				>
					{parts}
				</p>
			);
		});
	}

	return (
		<>
			{/* ── Hero image — full bleed ── */}
			<div
				className="relative overflow-hidden"
				style={{ height: 'clamp(400px, 60vh, 700px)', marginTop: 0 }}
			>
				<img
					src={post.image}
					alt={post.title}
					className="w-full h-full object-cover"
					style={{ paddingTop: '4rem' }}
				/>
				{/* Gradient overlay */}
				<div
					className="absolute inset-0"
					style={{ background: 'linear-gradient(to bottom, rgba(250,248,245,0) 40%, rgba(250,248,245,1) 100%)' }}
				/>
			</div>

			{/* ── Article content ── */}
			<article
				ref={sectionRef}
				style={{ backgroundColor: 'var(--color-background)', paddingBottom: 'var(--section-gap)' }}
			>
				<div className="max-w-3xl mx-auto px-6 lg:px-8" style={{ marginTop: '-4rem', position: 'relative', zIndex: 1 }}>

					{/* Meta */}
					<div className="fade-up flex items-center gap-4 mb-6">
						<Link
							to={`/category/${post.category}`}
							className="tag"
						>
							{meta.label}
						</Link>
						<span
							className="font-sans"
							style={{ fontSize: '0.65rem', color: 'var(--color-warm-mid)', letterSpacing: '0.08em' }}
						>
							{post.date}
						</span>
						<span
							className="font-sans"
							style={{ fontSize: '0.65rem', color: 'var(--color-warm-mid)', letterSpacing: '0.08em' }}
						>
							{post.readTime}
						</span>
					</div>

					{/* Title */}
					<h1
						className="fade-up font-serif mb-8"
						style={{
							fontSize: 'clamp(2rem, 5vw, 3.5rem)',
							lineHeight: 1.1,
							letterSpacing: '-0.02em',
							color: 'var(--color-foreground)',
						}}
					>
						{post.title}
					</h1>

					{/* Excerpt / lede */}
					<p
						className="fade-up font-serif mb-10"
						style={{
							fontSize: '1.2rem',
							lineHeight: 1.65,
							color: 'var(--color-warm-mid)',
							fontStyle: 'italic',
							borderLeft: '2px solid var(--color-rose)',
							paddingLeft: '1.25rem',
						}}
					>
						{post.excerpt}
					</p>

					{/* Divider */}
					<hr className="fade-up rule-thin mb-10" />

					{/* Body */}
					<div className="fade-up">
						{post.body ? (
							renderBody(post.body)
						) : (
							<p
								className="font-sans"
								style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--color-muted-foreground)' }}
							>
								{post.excerpt}
							</p>
						)}
					</div>

					{/* Author byline */}
					<div
						className="fade-up flex items-center gap-4 mt-14 pt-10"
						style={{ borderTop: '1px solid var(--color-border)' }}
					>
						<div
							className="img-zoom rounded-full overflow-hidden flex-shrink-0"
							style={{ width: '48px', height: '48px' }}
						>
							<img
								src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80"
								alt="Sophia Laurent"
								className="w-full h-full object-cover"
							/>
						</div>
						<div>
							<p
								className="font-serif"
								style={{ fontSize: '0.95rem', color: 'var(--color-foreground)', lineHeight: 1.3 }}
							>
								Sophia Laurent
							</p>
							<p
								className="font-sans"
								style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--color-warm-mid)' }}
							>
								Writer · Slow-living advocate
							</p>
						</div>
					</div>
				</div>
			</article>

			{/* ── Related posts ── */}
			{related.length > 0 && (
				<section
					style={{ backgroundColor: 'var(--color-card)', paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
				>
					<div className="max-w-7xl mx-auto px-6 lg:px-12">
						<div className="flex items-center gap-4 mb-12">
							<hr className="rule-thin w-8" />
							<p
								className="font-sans"
								style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
							>
								Continue reading
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
							{related.map((p) => (
								<PostCard key={p.slug} post={p} />
							))}
						</div>
					</div>
				</section>
			)}

			<Newsletter />
			<Footer />
		</>
	);
}
