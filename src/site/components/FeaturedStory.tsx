'use client';

/**
 * FeaturedStory — Asymmetric 2-col editorial layout.
 * Large image left (with overlap frame) · text block right with pull-quote.
 * Scroll-triggered fade-up animation.
 */
import { Link } from '@/lib/router-compat';
import { useFadeUp } from '../hooks/useFadeUp';
import { getFeaturedPost } from '../data/posts';

export function FeaturedStory() {
	const sectionRef = useFadeUp();
	const post = getFeaturedPost();

	return (
		<section
			id="featured"
			ref={sectionRef}
			style={{
				backgroundColor: 'var(--color-card)',
				paddingTop: 'var(--section-gap)',
				paddingBottom: 'var(--section-gap)',
				position: 'relative',
				overflow: 'visible',
			}}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-12">

				{/* Section eyebrow */}
				<div className="fade-up flex items-center gap-4 mb-14">
					<hr className="rule-thin flex-1 max-w-12" />
					<span
						className="font-sans"
						style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
					>
						Featured Story
					</span>
					<span style={{ color: 'var(--color-rose-deep)', fontSize: '0.55rem' }}>✦</span>
				</div>

				<div className="relative" style={{ overflow: 'visible' }}>

					{/* ── GRID: text LEFT · image RIGHT ─────────────────────── */}
					<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

						{/* LEFT: editorial text block — cols 1–5 */}
						<div className="fade-up min-w-0 lg:col-span-5 flex flex-col justify-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>

							{/* Date */}
							<p
								className="font-sans mb-5"
								style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
							>
								{post.date}
							</p>

							{/* Title */}
							<h2
								data-featured-title className="font-serif mb-6"
								style={{
									fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
									lineHeight: 1.15,
									letterSpacing: '-0.015em',
									color: 'var(--color-foreground)',
								}}
							>
								{post.title}
							</h2>

							<blockquote data-featured-quote className="font-serif italic mb-8" style={{ marginInline: 0, fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: 1.3, color: 'var(--color-foreground)', maxWidth: '22ch' }}>
                                for the adventurous,<br />the heartfelt<br />and sun kissed
                            </blockquote>

							{/* Excerpt */}
							<p
								data-featured-excerpt className="font-sans mb-8"
								style={{
									fontSize: '0.95rem',
									lineHeight: 1.8,
									color: 'var(--color-muted-foreground)',
									maxWidth: '44ch',
								}}
							>
								{post.excerpt}
							</p>

							{/* CTA */}
							<Link
								to={`/post/${post.slug}`}
								className="link-underline font-sans inline-flex items-center gap-2 self-start"
								style={{
									fontSize: '0.75rem',
									letterSpacing: '0.1em',
									textTransform: 'uppercase',
									fontWeight: 600,
									color: 'var(--color-foreground)',
								}}
							>
								Read the full story
								<span style={{ fontSize: '0.9rem' }}>→</span>
							</Link>
						</div>

						{/* RIGHT: image stack — cols 7–12 */}
						<div
							className="fade-up min-w-0 lg:col-span-6 lg:col-start-7 relative"
							style={{ zIndex: 1, paddingBottom: '2rem' }}
						>
							{/* Offset decorative border behind image */}
							<div
								className="absolute pointer-events-none"
								style={{
									top: '24px',
									left: '32px',
									right: '-16px',
									bottom: '-8px',
									border: '1px solid var(--color-rose)',
									zIndex: 0,
								}}
							/>

							{/* Primary tall image */}
							<div
								className="img-zoom relative"
								style={{
									zIndex: 1,
									aspectRatio: '4/5',
									boxShadow: '0 24px 64px rgba(44,44,44,0.1)',
								}}
							>
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Floating category tag — overlaps bottom-left of image */}
							<div
								className="absolute"
								style={{
									bottom: '0',
									left: '16px',
									zIndex: 2,
									backgroundColor: 'var(--color-cream)',
									padding: '0.75rem 1.25rem',
									boxShadow: '0 8px 32px rgba(44,44,44,0.1)',
								}}
							>
								<span className="tag" style={{ border: 'none', padding: 0 }}>
									{post.category}
								</span>
								<p
									className="font-sans mt-1"
									style={{ fontSize: '0.6rem', color: 'var(--color-warm-mid)', letterSpacing: '0.08em' }}
								>
									{post.readTime}
								</p>
							</div>
						</div>
					</div>


				</div>
			</div>
		</section>
	);
}
