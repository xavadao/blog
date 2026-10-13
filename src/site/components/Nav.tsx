'use client';

/**
 * Nav — Minimal sticky editorial navigation.
 * Wordmark left · nav links center · social icons right.
 * Becomes slightly opaque on scroll.
 */
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from '@/lib/router-compat';

const NAV_LINKS = [
	{ label: 'Wellness', href: '/category/wellness' },
	{ label: 'Travel', href: '/category/travel' },
	{ label: 'Growth', href: '/category/growth' },
	{ label: 'About', href: '/#about' },
];

export function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	// Handles the About link: navigate to home first if needed, then scroll to #about
	const handleAboutClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setMenuOpen(false);
		if (location.pathname === '/') {
			document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
		} else {
			navigate('/');
			// After navigation, wait for the DOM to settle then scroll
			setTimeout(() => {
				document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
			}, 120);
		}
	};

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	return (
		<header
			className="fixed top-0 left-0 right-0 z-50 transition-all"
			style={{
				backgroundColor: scrolled ? 'rgba(250,248,245,0.92)' : 'transparent',
				backdropFilter: scrolled ? 'blur(12px)' : 'none',
				borderBottom: scrolled ? '1px solid hsl(30 15% 88%)' : '1px solid transparent',
				transition: 'background-color 500ms cubic-bezier(0.4,0,0.2,1), border-color 500ms cubic-bezier(0.4,0,0.2,1)',
			}}
		>
			<nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
				{/* Wordmark */}
				<Link
					to="/"
					className="font-serif text-xl tracking-tight"
					style={{ color: 'var(--color-foreground)', letterSpacing: '-0.02em' }}
				>
					Lumière
				</Link>

				{/* Desktop nav links — centered */}
				<ul className="hidden md:flex items-center gap-8">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							{link.label === 'About' ? (
								<a
									href="/#about"
									onClick={handleAboutClick}
									className="link-underline font-sans text-sm tracking-wide"
									style={{
										color: 'var(--color-warm-mid)',
										fontWeight: 500,
										letterSpacing: '0.04em',
										cursor: 'pointer',
									}}
								>
									{link.label}
								</a>
							) : (
								<Link
									to={link.href}
									className="link-underline font-sans text-sm tracking-wide"
									style={{
										color: 'var(--color-warm-mid)',
										fontWeight: 500,
										letterSpacing: '0.04em',
									}}
								>
									{link.label}
								</Link>
							)}
						</li>
					))}
				</ul>

				{/* Social icons + mobile toggle */}
				<div className="flex items-center gap-4">
					{/* Instagram */}
					<a
						href="#"
						aria-label="Instagram"
						className="hidden md:flex"
						style={{ color: 'var(--color-warm-mid)', opacity: 1, transition: 'opacity 350ms cubic-bezier(0.4,0,0.2,1)' }}
						onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
						onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
							<circle cx="12" cy="12" r="4" />
							<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
						</svg>
					</a>
					{/* Pinterest */}
					<a
						href="#"
						aria-label="Pinterest"
						className="hidden md:flex"
						style={{ color: 'var(--color-warm-mid)', opacity: 1, transition: 'opacity 350ms cubic-bezier(0.4,0,0.2,1)' }}
						onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
						onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
							<path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.17 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.82-.23.94-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.06-5.44 5.94-5.44 3.12 0 5.55 2.22 5.55 5.19 0 3.1-1.95 5.59-4.66 5.59-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.78-.75 1.76-1.12 2.35.84.26 1.73.4 2.65.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
						</svg>
					</a>

					{/* Mobile hamburger */}
					<button
						className="md:hidden flex flex-col gap-1.5 p-1"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						<span
							className="block w-5 h-px transition-all duration-300"
							style={{
								backgroundColor: 'var(--color-foreground)',
								transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
							}}
						/>
						<span
							className="block w-5 h-px transition-all duration-300"
							style={{
								backgroundColor: 'var(--color-foreground)',
								opacity: menuOpen ? 0 : 1,
							}}
						/>
						<span
							className="block w-5 h-px transition-all duration-300"
							style={{
								backgroundColor: 'var(--color-foreground)',
								transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
							}}
						/>
					</button>
				</div>
			</nav>

			{/* Mobile menu */}
			<div
				className="md:hidden overflow-hidden transition-all duration-500"
				style={{
					maxHeight: menuOpen ? '300px' : '0',
					backgroundColor: 'rgba(250,248,245,0.97)',
					backdropFilter: 'blur(12px)',
				}}
			>
				<ul className="px-6 pb-6 pt-2 flex flex-col gap-4">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							{link.label === 'About' ? (
								<a
									href="/#about"
									onClick={handleAboutClick}
									className="font-sans text-base"
									style={{ color: 'var(--color-warm-mid)', fontWeight: 500, cursor: 'pointer' }}
								>
									{link.label}
								</a>
							) : (
								<Link
									to={link.href}
									className="font-sans text-base"
									style={{ color: 'var(--color-warm-mid)', fontWeight: 500 }}
								>
									{link.label}
								</Link>
							)}
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
