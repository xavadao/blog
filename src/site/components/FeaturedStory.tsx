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
				/*
				 * position:relative here so the quote — which lives OUTSIDE
				 * the inner grid — can be absolutely placed relative to the
				 * full section width, not just the grid container.
				 */
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

				{/*
				 * ── LAYOUT WRAPPER ──────────────────────────────────────────────
				 * position:relative so percentage-based left/top on the quote
				 * are relative to this container (not the viewport).
				 * overflow:visible lets the quote bleed outside its bounds.
				 */}
				<div className="relative" style={{ overflow: 'visible' }}>

					{/* ── GRID: text LEFT · image RIGHT ─────────────────────── */}
					<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

						{/* LEFT: editorial text block — cols 1–5 */}
						<div className="fade-up lg:col-span-5 flex flex-col justify-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>

							{/* Date */}
							<p
								className="font-sans mb-5"
								style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
							>
								{post.date}
							</p>

							{/* Title */}
							<h2
								className="font-serif mb-6"
								style={{
									fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
									lineHeight: 1.15,
									letterSpacing: '-0.015em',
									color: 'var(--color-foreground)',
								}}
							>
								{post.title}
							</h2>

							{/* Spacer — breathing room so the quote doesn't collide with excerpt on mid viewports */}
							<div className="hidden lg:block" style={{ height: 'clamp(4rem, 8vw, 7rem)' }} />

							{/* Excerpt */}
							<p
								className="font-sans mb-8"
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
							className="fade-up lg:col-span-6 lg:col-start-7 relative"
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

					{/*
					 * ── EDITORIAL QUOTE — INDEPENDENT LAYER ────────────────────
					 *
					 * This is NOT a grid child. It sits as a sibling to the grid,
					 * absolutely positioned relative to the .relative wrapper above.
					 *
					 * Placement:
					 *   left: 28%  → starts inside the text column
					 *   top: 50% + translateY(-50%) → vertically centred on the composition
					 *   max-width: 420px → bleeds naturally into the image
					 *   z-index: 3 → above image (z:1) and decorative border (z:0)
					 *
					 * Typography:
					 *   Playfair Display italic · 42–64px · #1A1A1A · weight 400
					 *   Lines broken manually for editorial rhythm
					 */}
					<blockquote
						className="hidden lg:block absolute pointer-events-none"
						style={{
							left: '28%',
							top: '50%',
							transform: 'translateY(-50%)',
							maxWidth: '420px',
							zIndex: 3,
						}}
					>
						<p
							style={{
								fontFamily: "'Playfair Display', Georgia, serif",
								fontStyle: 'italic',
								fontWeight: 400,
								fontSize: 'clamp(2.625rem, 4.5vw, 4rem)',
								lineHeight: 1.2,
								color: '#1A1A1A',
								letterSpacing: '-0.02em',
								textAlign: 'left',
							}}
						>
							for the adventurous,<br />
							the heartfelt<br />
							and sun kissed
						</p>
					</blockquote>

					{/* Mobile fallback — inline, between title and excerpt */}
					<blockquote
						className="lg:hidden mt-2 mb-8"
						style={{
							paddingLeft: '1rem',
							borderLeft: '2px solid var(--color-rose)',
						}}
					>
						<p
							style={{
								fontFamily: "'Playfair Display', Georgia, serif",
								fontStyle: 'italic',
								fontWeight: 400,
								fontSize: 'clamp(1.5rem, 6vw, 2rem)',
								lineHeight: 1.25,
								color: '#1A1A1A',
							}}
						>
							for the adventurous,<br />
							the heartfelt<br />
							and sun kissed
						</p>
					</blockquote>

				</div>
			</div>
		</section>
	);
}
