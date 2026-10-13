/**
 * PostCard — Editorial post card for the latest posts grid.
 * Image top · category tag · title · date.
 * Used in PostGrid (homepage) and CategoryPage.
 */
import { Link } from '@/lib/router-compat';
import type { Post } from '../data/posts';

interface PostCardProps {
	post: Post;
	/** Visual size variant — 'large' for featured grid slot */
	size?: 'default' | 'large';
}

const CATEGORY_COLORS: Record<string, string> = {
	wellness: 'var(--color-rose)',
	travel: 'var(--color-sage)',
	growth: 'var(--color-taupe)',
};

export function PostCard({ post, size = 'default' }: PostCardProps) {
	const isLarge = size === 'large';

	return (
		<Link
			to={`/post/${post.slug}`}
			className="group block"
			style={{ textDecoration: 'none' }}
		>
			{/* Image */}
			<div
				className="img-zoom mb-4"
				style={{
					aspectRatio: isLarge ? '16/10' : '4/3',
					overflow: 'hidden',
					boxShadow: '0 8px 32px rgba(44,44,44,0.08)',
				}}
			>
				<img
					src={post.image}
					alt={post.title}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Meta row */}
			<div className="flex items-center gap-3 mb-3">
				<span
					className="tag"
					style={{
						borderColor: CATEGORY_COLORS[post.category] ?? 'var(--color-border)',
					}}
				>
					{post.category}
				</span>
				<span
					className="font-sans"
					style={{ fontSize: '0.6rem', color: 'var(--color-warm-mid)', letterSpacing: '0.08em' }}
				>
					{post.readTime}
				</span>
			</div>

			{/* Title */}
			<h3
				className="font-serif mb-2 group-hover:opacity-70 transition-opacity"
				style={{
					fontSize: isLarge ? 'clamp(1.2rem, 2vw, 1.6rem)' : '1.05rem',
					lineHeight: 1.3,
					letterSpacing: '-0.01em',
					color: 'var(--color-foreground)',
					transition: 'opacity 350ms cubic-bezier(0.4,0,0.2,1)',
				}}
			>
				{post.title}
			</h3>

			{/* Excerpt — only on large */}
			{isLarge && (
				<p
					className="font-sans mb-3"
					style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-muted-foreground)', maxWidth: '48ch' }}
				>
					{post.excerpt}
				</p>
			)}

			{/* Date */}
			<p
				className="font-sans"
				style={{ fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--color-warm-mid)' }}
			>
				{post.date}
			</p>
		</Link>
	);
}
