'use client';

/**
 * CategoryGrid — Three pillar cards: Wellness · Travel · Growth.
 * Large image cards with hover overlay and category label.
 * Asymmetric sizing — center card is taller.
 */
import { Link } from '@/lib/router-compat';
import { useFadeUp } from '../hooks/useFadeUp';

const CATEGORIES = [
	{
		slug: 'wellness',
		label: 'Wellness',
		sub: 'Rituals, rest & slow living',
		image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80',
		accent: 'var(--color-rose)',
	},
	{
		slug: 'travel',
		label: 'Travel',
		sub: 'Slow journeys & hidden places',
		image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&q=80',
		accent: 'var(--color-sage)',
	},
	{
		slug: 'growth',
		label: 'Personal Growth',
		sub: 'Becoming who you already are',
		image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80',
		accent: 'var(--color-taupe)',
	},
];

export function CategoryGrid() {
	const sectionRef = useFadeUp();

	return (
		<section
			ref={sectionRef}
			style={{ backgroundColor: 'var(--color-background)', paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-12">

				{/* Section header */}
				<div className="fade-up flex items-end justify-between mb-14">
					<div>
						<p
							className="font-sans mb-3"
							style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-warm-mid)' }}
						>
							✦ Explore
						</p>
						<h2
							className="font-serif"
							style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.015em' }}
						>
							Three pillars of a life well lived
						</h2>
					</div>
					<hr className="rule-thin hidden lg:block flex-1 max-w-xs ml-12 mb-2" />
				</div>

				{/* Cards — asymmetric heights */}
				<div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-end">
					{CATEGORIES.map((cat, i) => (
						<Link
							key={cat.slug}
							to={`/category/${cat.slug}`}
							className="fade-up img-zoom group block relative overflow-hidden"
							style={{
								aspectRatio: i === 1 ? '3/4' : '4/5',
								boxShadow: '0 16px 48px rgba(44,44,44,0.1)',
							}}
						>
							<img
								src={cat.image}
								alt={cat.label}
								className="w-full h-full object-cover"
							/>

							{/* Gradient overlay */}
							<div
								className="absolute inset-0 transition-all"
								style={{
									background: 'linear-gradient(to top, rgba(44,44,44,0.65) 0%, rgba(44,44,44,0.1) 50%, transparent 100%)',
									transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1)',
								}}
							/>

							{/* Hover tint overlay */}
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100"
								style={{
									backgroundColor: cat.accent,
									mixBlendMode: 'multiply',
									opacity: 0,
									transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1)',
								}}
							/>

							{/* Text */}
							<div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
								<p
									className="font-sans mb-2"
									style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}
								>
									{cat.sub}
								</p>
								<h3
									className="font-serif"
									style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#fff', lineHeight: 1.2 }}
								>
									{cat.label}
								</h3>
								<div
									className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100"
									style={{ transition: 'opacity 400ms cubic-bezier(0.4,0,0.2,1)', transitionDelay: '50ms' }}
								>
									<span
										className="font-sans"
										style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}
									>
										Read more
									</span>
									<span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem' }}>→</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
