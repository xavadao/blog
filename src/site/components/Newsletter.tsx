'use client';

/**
 * Newsletter — Centered minimal email capture.
 * Decorative rule above and below. No heavy UI — just the essentials.
 */
import { useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

export function Newsletter() {
	const sectionRef = useFadeUp();
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!email.trim()) return;
		// In production: POST to your email service here
		setSubmitted(true);
	}

	return (
		<section
			ref={sectionRef}
			style={{ backgroundColor: 'var(--color-background)', paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				{/* Top rule */}
				<hr className="rule-thin mb-16" />

				{/* Centered content */}
				<div className="fade-up max-w-xl mx-auto text-center">
					{/* Eyebrow */}
					<p
						className="font-sans mb-5"
						style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
					>
						✦ Letters from Lumière
					</p>

					{/* Headline */}
					<h2
						className="font-serif mb-4"
						style={{
							fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
							lineHeight: 1.15,
							letterSpacing: '-0.015em',
							color: 'var(--color-foreground)',
						}}
					>
						Words worth{' '}
						<span className="font-accent">slowing down for.</span>
					</h2>

					{/* Sub */}
					<p
						className="font-sans mb-10"
						style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--color-muted-foreground)' }}
					>
						A quiet letter, twice a month. Wellness rituals, travel notes, and reflections on living well. No noise — just the good stuff.
					</p>

					{/* Form */}
					{submitted ? (
						<div
							style={{
								padding: '1.25rem 2rem',
								backgroundColor: 'var(--color-rose)',
								display: 'inline-block',
							}}
						>
							<p
								className="font-serif"
								style={{ fontSize: '1rem', color: 'var(--color-foreground)' }}
							>
								Demo signup complete. <span className="font-accent">No email was sent.</span>
							</p>
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
							style={{ border: '1px solid var(--color-border)' }}
						>
							<label htmlFor="newsletter-email" className="sr-only">
								Email address
							</label>
							<input
								id="newsletter-email"
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
								placeholder="your@email.com"
								required
								className="font-sans flex-1 px-5 py-4 bg-transparent outline-none"
								style={{
									fontSize: '0.85rem',
									color: 'var(--color-foreground)',
									letterSpacing: '0.02em',
									borderRight: '1px solid var(--color-border)',
								}}
							/>
							<button
								type="submit"
								className="font-sans px-6 py-4 transition-all"
								style={{
									fontSize: '0.65rem',
									letterSpacing: '0.12em',
									textTransform: 'uppercase',
									fontWeight: 700,
									backgroundColor: 'var(--color-foreground)',
									color: 'var(--color-cream)',
									border: 'none',
									cursor: 'pointer',
									whiteSpace: 'nowrap',
									transition: 'background-color 350ms cubic-bezier(0.4,0,0.2,1)',
								}}
								onMouseEnter={(e) => {
									(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-rose-deep)';
								}}
								onMouseLeave={(e) => {
									(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-foreground)';
								}}
							>
								Subscribe
							</button>
						</form>
					)}

					{/* Privacy note */}
					<p
						className="font-sans mt-4"
						style={{ fontSize: '0.6rem', letterSpacing: '0.06em', color: 'var(--color-warm-mid)', opacity: 0.7 }}
					>
						Demo newsletter form. No subscription is created.
					</p>
				</div>

				{/* Bottom rule */}
				<hr className="rule-thin mt-16" />
			</div>
		</section>
	);
}
