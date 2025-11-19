import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ChallengesSection from './components/ChallengesSection';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

/**
 * FitTrack - Fitness Challenge Platform
 *
 * A comprehensive responsive web application demonstrating:
 *
 * 🎯 FLEXBOX USAGE:
 * - Navigation bar (justify-between, items-center)
 * - Button groups with gap spacing
 * - Stats displays in hero and dashboard
 * - Social media icons in footer
 * - Filter buttons with flex-wrap
 *
 * 🎯 CSS GRID USAGE:
 * - Hero section (1 col → 2 cols responsive)
 * - Feature cards (2x2 grid)
 * - Challenge cards (1 → 2 → 3 → 4 cols)
 * - Dashboard stats (1 → 2 → 4 cols)
 * - Footer sections (1 → 2 → 4 cols)
 *
 * 🎯 MEDIA QUERIES:
 * - hidden md:flex - Show/hide navigation at breakpoints
 * - sm:, md:, lg:, xl: - Responsive column changes
 * - Mobile menu toggle functionality
 * - Responsive text sizes and spacing
 *
 * 🎯 CONTAINER QUERIES:
 * - Challenge cards adapt to parent width
 * - Cards show/hide details based on container
 * - Truly modular and reusable components
 *
 * 🎯 LEARNING PATH:
 * Week 1: Study code structure and responsive patterns
 * Week 2: Modify styles and add new features
 * Week 3: Build additional pages and functionality
 * Week 4: Test and optimize for all screen sizes
 */

function App() {
	return (
		<div className="min-h-screen bg-white">
			{/* Navigation - FLEXBOX with responsive menu */}
			<Navigation />

			{/* Main Content */}
			<main>
				{/* Hero Section - GRID: 1 col → 2 cols */}
				<Hero />

				{/* Challenges Section - CONTAINER QUERIES */}
				<ChallengesSection />

				{/* Dashboard - GRID: Multiple responsive grids */}
				<Dashboard />

				{/* Leaderboard - GRID + FLEXBOX */}
				<Leaderboard />
			</main>

			{/* Footer - GRID: 1 → 2 → 4 cols */}
			<Footer />
		</div>
	);
}

export default App;
