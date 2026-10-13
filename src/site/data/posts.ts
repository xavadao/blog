/**
 * Mock blog data — replace with real API calls when connecting a backend.
 * All images use Unsplash with deterministic IDs for consistent rendering.
 */

export type Category = 'wellness' | 'travel' | 'growth';

export interface Post {
	slug: string;
	title: string;
	excerpt: string;
	category: Category;
	date: string;
	readTime: string;
	image: string;
	featured?: boolean;
	body?: string;
}

export const CATEGORY_META: Record<Category, { label: string; color: string; description: string }> = {
	wellness: {
		label: 'Wellness',
		color: 'rose',
		description: 'Rituals, rest, and the quiet art of taking care.',
	},
	travel: {
		label: 'Travel',
		color: 'sage',
		description: 'Slow travel, hidden places, and the stories in between.',
	},
	growth: {
		label: 'Personal Growth',
		color: 'taupe',
		description: 'Becoming more of who you already are.',
	},
};

export const posts: Post[] = [
	{
		slug: 'morning-rituals-that-changed-everything',
		title: 'Morning Rituals That Changed Everything',
		excerpt:
			'Before the world wakes up, there is a window — quiet, unhurried, entirely yours. Here is how I learned to protect it.',
		category: 'wellness',
		date: 'June 12, 2025',
		readTime: '6 min read',
		image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
		featured: true,
		body: `There is something sacred about the hour before the world demands anything of you. I used to sleep through it — alarm snoozing, phone scrolling, the day already winning before I'd even stood up.

The shift came slowly. A single candle. A cup of tea made with intention rather than urgency. Five minutes of stillness that felt, at first, like wasted time.

Now I guard that hour like it's the most valuable thing I own. Because it is.

**What I do every morning:**

I wake without an alarm when I can. I make tea — always loose leaf, always in the good cup. I sit by the window and watch the light change. I write three pages of whatever is in my head. I move my body gently, not to burn calories but to feel alive in it.

None of this is revolutionary. All of it has changed my life.

The secret isn't the ritual itself — it's the message it sends to yourself. *You matter enough to begin the day with care.*`,
	},
	{
		slug: 'slow-travel-in-the-south-of-france',
		title: 'Slow Travel in the South of France',
		excerpt:
			'What happens when you put away the itinerary and let a place find you instead. Three weeks in Provence with no agenda.',
		category: 'travel',
		date: 'May 28, 2025',
		readTime: '8 min read',
		image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80',
		featured: false,
	},
	{
		slug: 'the-year-i-stopped-performing-productivity',
		title: 'The Year I Stopped Performing Productivity',
		excerpt:
			'I was busy every single day and had nothing to show for it. Then I learned the difference between motion and meaning.',
		category: 'growth',
		date: 'May 14, 2025',
		readTime: '7 min read',
		image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
		featured: false,
	},
	{
		slug: 'the-art-of-doing-nothing',
		title: 'The Art of Doing Nothing',
		excerpt:
			'Rest is not the absence of productivity. It is the foundation of it. On learning to be still without guilt.',
		category: 'wellness',
		date: 'April 30, 2025',
		readTime: '5 min read',
		image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
	},
	{
		slug: 'kyoto-in-cherry-blossom-season',
		title: 'Kyoto in Cherry Blossom Season',
		excerpt:
			'The crowds, the quiet temples, the pink light through paper screens. A city that teaches you to pay attention.',
		category: 'travel',
		date: 'April 10, 2025',
		readTime: '9 min read',
		image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
	},
	{
		slug: 'on-changing-your-mind',
		title: 'On Changing Your Mind',
		excerpt:
			'The most underrated form of intelligence is the willingness to be wrong. How I learned to hold my opinions loosely.',
		category: 'growth',
		date: 'March 22, 2025',
		readTime: '6 min read',
		image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
	},
	{
		slug: 'a-week-in-the-dolomites',
		title: 'A Week in the Dolomites',
		excerpt:
			'Mountains have a way of making your problems feel the right size. On altitude, silence, and coming home changed.',
		category: 'travel',
		date: 'March 5, 2025',
		readTime: '7 min read',
		image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
	},
	{
		slug: 'the-body-keeps-the-score-of-your-schedule',
		title: 'The Body Keeps the Score of Your Schedule',
		excerpt:
			'Chronic tension, shallow breath, a jaw that never unclenches. Your body is trying to tell you something.',
		category: 'wellness',
		date: 'February 18, 2025',
		readTime: '5 min read',
		image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
	},
	{
		slug: 'building-a-life-you-dont-need-a-vacation-from',
		title: 'Building a Life You Don\'t Need a Vacation From',
		excerpt:
			'What if the goal wasn\'t escape? On designing daily life with the same intention you bring to travel.',
		category: 'growth',
		date: 'February 3, 2025',
		readTime: '8 min read',
		image: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=1200&q=80',
	},
];

export function getPostsByCategory(category: Category): Post[] {
	return posts.filter((p) => p.category === category);
}

export function getPostBySlug(slug: string): Post | undefined {
	return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): Post {
	return posts.find((p) => p.featured) ?? posts[0];
}

export function getLatestPosts(count = 6): Post[] {
	return posts.slice(0, count);
}
