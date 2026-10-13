'use client';

/*
 * Hero — Full-bleed editorial collage hero.
 * Large primary image + overlapping secondary image + bold serif headline.
 * Quote sits on the RIGHT side of the yoga image as an independent absolute layer.
 */
import { useEffect, useRef } from 'react';
import { Link } from '@/lib/router-compat';

export function Hero() {
	const bgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = bgRef.current;
		if (!el) return;
		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					if (el) {
						const offset = window.scrollY * 0.35;
						el.style.transform = `translateY(${offset}px)`;
					}
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<section
			className="relative"
			style={{ minHeight: '100svh', backgroundColor: 'var(--color-cream)', overflow: 'visible' }}
		>
			{/* Background parallax */}
			<div className="absolute inset-0" style={{ willChange: 'transform', overflow: 'hidden', zIndex: 0 }}>
				<div ref={bgRef} className="absolute inset-0" style={{ top: '-10%', bottom: '-10%' }}>
					<img
						src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80"
						alt=""
						aria-hidden="true"
						className="w-full h-full object-cover"
						style={{ opacity: 0.18 }}
					/>
				</div>
			</div>

			{/* Content wrapper */}
			<div
				className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 lg:pt-36 lg:pb-28"
				style={{ zIndex: 1 }}
			>
				<div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">

					{/* Left: headline block */}
					<div className="lg:col-span-6 lg:col-start-1 flex flex-col justify-center lg:pt-16">
						<div className="flex items-center gap-3 mb-8">
							<span
								className="tag"
								style={{ opacity: 0.6, transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1)', cursor: 'default' }}
								onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
								onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.6'; }}
							>
								A Life Well Lived
							</span>
						</div>

						<h1
							className="font-serif mb-6"
							style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--color-foreground)' }}
						>
							Live with{' '}
							<span className="font-accent" style={{ color: 'var(--color-rose-deep)' }}>intention.</span>
							<br />
							Travel with{' '}
							<span className="font-accent" style={{ color: 'var(--color-sage)' }}>wonder.</span>
							<br />
							Grow without{' '}
							<span className="font-accent">end.</span>
						</h1>

						<p
							className="font-sans mb-10"
							style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--color-warm-mid)', maxWidth: '38ch' }}
						>
							A space for slow living, meaningful travel, and the quiet work of becoming.
							Written by{' '}
							<span style={{ color: 'var(--color-foreground)', fontWeight: 500 }}>Sophia Laurent</span>.
						</p>

						<div className="flex items-center gap-6 flex-wrap">
							<Link
								to="/category/wellness"
								className="font-sans font-medium tracking-wide px-7 py-3"
								style={{
									backgroundColor: 'var(--color-cream)',
									color: 'var(--color-foreground)',
									border: '1px solid var(--color-foreground)',
									letterSpacing: '0.06em',
									textTransform: 'uppercase',
									fontSize: '0.7rem',
									transition: 'background-color 500ms cubic-bezier(0.4,0,0.2,1), color 500ms cubic-bezier(0.4,0,0.2,1)',
								}}
								onMouseEnter={(e) => {
									const el = e.currentTarget as HTMLElement;
									el.style.backgroundColor = 'var(--color-foreground)';
									el.style.color = 'var(--color-cream)';
								}}
								onMouseLeave={(e) => {
									const el = e.currentTarget as HTMLElement;
									el.style.backgroundColor = 'var(--color-cream)';
									el.style.color = 'var(--color-foreground)';
								}}
							>
								Start Reading
							</Link>
							<Link
								to="#featured"
								className="link-underline font-sans text-sm font-medium"
								style={{ color: 'var(--color-warm-mid)', letterSpacing: '0.04em' }}
							>
								Latest Story ↓
							</Link>
						</div>
					</div>

					{/* Right: image stack — quote lives here, anchored to this container */}
					<div
						className="hidden lg:block lg:col-span-5 lg:col-start-8 relative"
						style={{ height: '75vh' }}
					>
						{/* Primary yoga pose image */}
						<div
							className="img-zoom absolute"
							style={{ top: '5%', right: 0, width: '78%', height: '72%', boxShadow: '0 20px 60px rgba(44,44,44,0.12)', zIndex: 1 }}
						>
							<img
								src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80"
								alt="Wellness lifestyle"
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Secondary overlapping image — bottom left */}
						<div
							className="img-zoom absolute"
							style={{ bottom: '4%', left: 0, width: '52%', height: '44%', boxShadow: '0 16px 48px rgba(44,44,44,0.14)', border: '4px solid var(--color-cream)', zIndex: 2 }}
						>
							<img
								src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80"
								alt="Travel"
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Decorative border frame */}
						<div
							className="absolute pointer-events-none"
							style={{ top: '2%', right: '-12px', width: '78%', height: '72%', border: '1px solid var(--color-rose)', zIndex: 0 }}
						/>

						{/* Decorative dot cluster */}
						<div className="absolute pointer-events-none" style={{ bottom: '28%', right: '-20px', zIndex: 0 }}>
							{[...Array(9)].map((_, i) => (
								<span
									key={i}
									className="inline-block rounded-full"
									style={{ width: '3px', height: '3px', backgroundColor: 'var(--color-rose-deep)', margin: '2px', opacity: 0.6 }}
								/>
							))}
						</div>

						{/* ── EDITORIAL QUOTE ──
						    position: absolute relative to the image stack container.
						    right: -48px pushes it just beyond the right edge of the yoga image.
						    top: 28% + translateY(-50%) places it in the upper-mid zone of the image.
						    z-index: 10 floats it above everything. */}
						<blockquote
							className="absolute pointer-events-none"
							style={{
								right: '-48px',
								top: '28%',
								transform: 'translateY(-50%)',
								maxWidth: '320px',
								textAlign: 'right',
								zIndex: 10,
								margin: 0,
								padding: 0,
							}}
						>
							<p
								style={{
									fontFamily: '"Playfair Display", Georgia, serif',
									fontStyle: 'italic',
									fontWeight: 400,
									fontSize: 'clamp(1.8rem, 2.6vw, 2.6rem)',
									lineHeight: 1.2,
									color: '#1A1A1A',
									margin: 0,
									marginBottom: '0.75rem',
									letterSpacing: '-0.01em',
								}}
							>
								"A life curated
								<br />
								with care."
							</p>
							<cite
								style={{
									fontFamily: '"Playfair Display", Georgia, serif',
									fontStyle: 'italic',
									fontWeight: 400,
									fontSize: '0.85rem',
									letterSpacing: '0.05em',
									color: '#1A1A1A',
									opacity: 0.45,
									display: 'block',
								}}
							>
								— Sophia Laurent
							</cite>
						</blockquote>
					</div>
				</div>

				{/* Scroll indicator */}
				<div
					className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
					style={{ color: 'var(--color-warm-mid)' }}
				>
					<span className="font-sans" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
						Scroll
					</span>
					<div
						className="w-px"
						style={{ height: '40px', backgroundColor: 'var(--color-taupe)', animation: 'scrollPulse 2s ease-in-out infinite' }}
					/>
				</div>
			</div>

			<style>{`
				@keyframes scrollPulse {
					0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; }
					50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
				}
			`}</style>
		</section>
	);
}
