'use client';

import type { ReactNode } from 'react';
/**
 * App Component
 *
 * Main application component with React Router and React Query.
 *
 * Routing: React Router v7 library mode — createBrowserRouter + RouterProvider.
 * - Import from 'react-router' only. Never from 'react-router-dom'.
 * - Use createBrowserRouter (data router). Do NOT use <BrowserRouter> or <HashRouter>.
 * - Add routes by adding entries to the `router` array below.
 */

import { Outlet, OutletProvider } from '@/lib/router-compat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			refetchOnWindowFocus: false,
		},
	},
});

function HomePage() {
	return (
		<div className="flex items-center justify-center p-4 min-h-screen">
			<div className="text-center">
				<h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
					Nullshot Beta
				</h1>
			</div>
		</div>
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
export { HomePage };
