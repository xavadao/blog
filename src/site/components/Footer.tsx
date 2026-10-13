'use client';

/**
 * Footer — Minimal editorial footer.
 * Wordmark · nav links · social icons · copyright.
 */
import { Link } from '@/lib/router-compat';

const FOOTER_LINKS = [
	{ label: 'Wellness', href: '/category/wellness' },
	{ label: 'Travel', href: '/category/travel' },
	{ label: 'Growth', href: '/category/growth' },
	{ label: 'About', href: '#about' },
];

export function Footer() {
	return (
		<footer
			style={{
				backgroundColor: 'var(--color-foreground)',
				paddingTop: '4rem',
				paddingBottom: '3rem',
			}}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				{/* Top row: wordmark + nav */}
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
					{/* Wordmark */}
					<Link
						to="/"
						className="font-serif"
						style={{
							fontSize: '1.5rem',
							letterSpacing: '-0.02em',
							color: 'var(--color-cream)',
						}}
					>
						Lumière
					</Link>

					{/* Nav links */}
					<ul className="flex flex-wrap gap-6 md:gap-8">
						{FOOTER_LINKS.map((link) => (
							<li key={link.href}>
								<Link
									to={link.href}
									className="link-underline font-sans"
									style={{
										fontSize: '0.7rem',
										letterSpacing: '0.1em',
										textTransform: 'uppercase',
										color: 'rgba(250,248,245,0.5)',
										fontWeight: 500,
									}}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>

					{/* Social icons */}
					<div className="flex items-center gap-4">
						<a
							href="#"
							aria-label="Instagram"
							style={{ color: 'rgba(250,248,245,0.5)', transition: 'color 350ms cubic-bezier(0.4,0,0.2,1)' }}
							onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rose)')}
							onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,248,245,0.5)')}
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
								<circle cx="12" cy="12" r="4" />
								<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
							</svg>
						</a>
						<a
							href="#"
							aria-label="Pinterest"
							style={{ color: 'rgba(250,248,245,0.5)', transition: 'color 350ms cubic-bezier(0.4,0,0.2,1)' }}
							onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rose)')}
							onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,248,245,0.5)')}
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
								<path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.82-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.84.26 1.73.4 2.65.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
							</svg>
						</a>
					</div>
				</div>

				{/* Divider */}
				<hr style={{ border: 'none', borderTop: '1px solid rgba(250,248,245,0.1)', marginBottom: '2rem' }} />

				{/* Bottom row: copyright + tagline */}
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
					<p
						className="font-sans"
						style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'rgba(250,248,245,0.3)' }}
					>
						© {new Date().getFullYear()} Lumière · All rights reserved
					</p>
					<p
						className="font-accent"
						style={{ fontSize: '0.8rem', color: 'rgba(250,248,245,0.25)', fontStyle: 'italic' }}
					>
						a life well lived
					</p>
				</div>
			</div>
		</footer>
	);
}
