/**
 * useFadeUp — IntersectionObserver hook for scroll-triggered fade-up animations.
 * Adds `.in-view` class to elements with `.fade-up` when they enter the viewport.
 */
import { useEffect, useRef } from 'react';

export function useFadeUp<T extends HTMLElement = HTMLDivElement>() {
	const ref = useRef<T>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
		);

		// Observe the root element and all .fade-up children
		const targets = el.querySelectorAll<HTMLElement>('.fade-up');
		if (el.classList.contains('fade-up')) observer.observe(el);
		targets.forEach((t) => observer.observe(t));

		return () => observer.disconnect();
	}, []);

	return ref;
}

/**
 * useParallax — subtle parallax on scroll for hero images.
 * @param speed 0 = no movement, 1 = full scroll speed. Default 0.4.
 */
export function useParallax(speed = 0.4) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let ticking = false;

		const onScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					if (el) {
						const rect = el.getBoundingClientRect();
						const offset = rect.top * speed;
						el.style.transform = `translateY(${offset}px)`;
					}
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [speed]);

	return ref;
}
