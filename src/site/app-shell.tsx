'use client';

import type { ReactNode } from 'react';


import { Outlet, OutletProvider } from '@/lib/router-compat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { FeaturedStory } from './components/FeaturedStory';
import { CategoryGrid } from './components/CategoryGrid';
import { PostGrid } from './components/PostGrid';
import { AboutStrip } from './components/AboutStrip';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { CategoryPage } from './pages/CategoryPage';
import { PostPage } from './pages/PostPage';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			refetchOnWindowFocus: false,
		},
	},
});

/** Shared page shell — Nav wraps every route */
function PageShell({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
			<Nav />
			{children}
		</div>
	);
}

/** Homepage — full editorial layout */
function HomePage() {
	return (
		<PageShell>
			<Hero />
			<FeaturedStory />
			<CategoryGrid />
			<PostGrid />
			<AboutStrip />
			<Newsletter />
			<Footer />
		</PageShell>
	);
}

function CategoryRoute() {
	return (
		<PageShell>
			<CategoryPage />
		</PageShell>
	);
}

function PostsRoute() {
	return <PageShell><CategoryPage showAll /></PageShell>;
}

function PostRoute() {
	return (
		<PageShell>
			<PostPage />
		</PageShell>
	);
}

export default function AppShell({ children }: { children: ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<OutletProvider outlet={children}><Outlet /></OutletProvider>
		</QueryClientProvider>
	);
}

// Route components defined inline in the original app.tsx, for src/app/**/page.tsx.
export { HomePage, CategoryRoute, PostRoute, PostsRoute };
