'use client';

/**
 * AboutStrip — Horizontal brand band.
 * Portrait photo left (with overlap frame) · bio text right · decorative elements.
 * Anchored as #about for nav link.
 */
import { useFadeUp } from '../hooks/useFadeUp';

export function AboutStrip() {
	const sectionRef = useFadeUp();

	return (
		<section
			id="about"
			ref={sectionRef}
			style={{ backgroundColor: 'var(--color-rose)', paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="grid lg:grid-cols-12 gap-12 items-center">

					{/* Left: portrait with overlap frame */}
					<div className="fade-up lg:col-span-4 relative" style={{ paddingBottom: '1.5rem' }}>
						{/* Offset decorative border */}
						<div
							className="absolute pointer-events-none"
							style={{
								top: '20px',
								left: '-12px',
								right: '24px',
								bottom: '-12px',
								border: '1px solid rgba(44,44,44,0.15)',
								zIndex: 0,
							}}
						/>
						<div
							className="img-zoom relative"
							style={{
								zIndex: 1,
								aspectRatio: '3/4',
								boxShadow: '0 20px 56px rgba(44,44,44,0.12)',
							}}
						>
							<img
								src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80"
								alt="Sophia Laurent"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					{/* Right: bio text */}
					<div className="fade-up lg:col-span-7 lg:col-start-6">
						{/* Eyebrow */}
						<div className="flex items-center gap-3 mb-8">
							<hr className="rule-thin w-8" style={{ borderColor: 'rgba(44,44,44,0.2)' }} />
							<span
								className="font-sans"
								style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
							>
								About Sophia
							</span>
						</div>

						{/* Headline */}
						<h2
							className="font-serif mb-6"
							style={{
								fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
								lineHeight: 1.15,
								letterSpacing: '-0.015em',
								color: 'var(--color-foreground)',
							}}
						>
							A writer, wanderer,{' '}
							<span className="font-accent">and slow-living advocate.</span>
						</h2>

						{/* Bio */}
						<p
							className="font-sans mb-6"
							style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--color-warm-mid)', maxWidth: '52ch' }}
						>
							I believe the most radical thing you can do is live with intention. Lumière is where I share what I'm learning about wellness, the places that have changed me, and the quiet work of becoming more fully yourself.
						</p>
						<p
							className="font-sans mb-10"
							style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--color-warm-mid)', maxWidth: '52ch' }}
						>
							Based between Paris and the Provençal countryside. Always with a cup of tea nearby.
						</p>

						{/* Signature flourish */}
						<div className="flex items-center gap-6">
							<p
								className="font-accent"
								style={{ fontSize: '1.6rem', color: 'var(--color-foreground)', lineHeight: 1 }}
							>
								Sophia Laurent
							</p>
							<div
								style={{
									width: '40px',
									height: '1px',
									backgroundColor: 'rgba(44,44,44,0.3)',
								}}
							/>
							<div className="flex gap-3">
								{/* Instagram */}
								<a
									href="#"
									aria-label="Instagram"
									style={{ color: 'var(--color-warm-mid)', opacity: 1, transition: 'opacity 350ms cubic-bezier(0.4,0,0.2,1)' }}
									onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
									onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
								>
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
										<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
										<circle cx="12" cy="12" r="4" />
										<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
									</svg>
								</a>
								{/* Pinterest */}
								<a
									href="#"
									aria-label="Pinterest"
									style={{ color: 'var(--color-warm-mid)', opacity: 1, transition: 'opacity 350ms cubic-bezier(0.4,0,0.2,1)' }}
									onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
									onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
								>
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
										<path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.82-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.84.26 1.73.4 2.65.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
