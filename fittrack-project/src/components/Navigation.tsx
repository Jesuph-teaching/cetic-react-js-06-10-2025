import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] =
		useState(false);

	return (
		<nav className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* FLEXBOX: justify-between, items-center */}
				<div className="flex justify-between items-center h-16">
					{/* Logo - FLEXBOX: items-center, gap */}
					<div className="flex items-center gap-2">
						<Dumbbell className="h-8 w-8" />
						<span className="text-2xl font-bold">
							FitTrack
						</span>
					</div>

					{/* Desktop Navigation - FLEXBOX: hidden md:flex, gap-8 */}
					<ul className="hidden md:flex items-center gap-8">
						<li>
							<a
								href="#home"
								className="hover:text-orange-200 transition-colors font-medium"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#challenges"
								className="hover:text-orange-200 transition-colors font-medium"
							>
								Challenges
							</a>
						</li>
						<li>
							<a
								href="#dashboard"
								className="hover:text-orange-200 transition-colors font-medium"
							>
								Dashboard
							</a>
						</li>
						<li>
							<a
								href="#leaderboard"
								className="hover:text-orange-200 transition-colors font-medium"
							>
								Leaderboard
							</a>
						</li>
					</ul>

					{/* Desktop CTA Buttons - FLEXBOX: hidden md:flex, gap-4 */}
					<div className="hidden md:flex items-center gap-4">
						<button className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium">
							Sign In
						</button>
						<button className="px-6 py-2 bg-white text-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
							Start Free
						</button>
					</div>

					{/* Mobile Menu Button - MEDIA QUERY: md:hidden */}
					<button
						className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
						onClick={() =>
							setMobileMenuOpen(
								!mobileMenuOpen
							)
						}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu - MEDIA QUERY: Conditional rendering */}
				{mobileMenuOpen && (
					<div className="md:hidden py-4 border-t border-white/20">
						<ul className="flex flex-col gap-4">
							<li>
								<a
									href="#home"
									className="block py-2 hover:text-orange-200 transition-colors font-medium"
									onClick={() =>
										setMobileMenuOpen(
											false
										)
									}
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#challenges"
									className="block py-2 hover:text-orange-200 transition-colors font-medium"
									onClick={() =>
										setMobileMenuOpen(
											false
										)
									}
								>
									Challenges
								</a>
							</li>
							<li>
								<a
									href="#dashboard"
									className="block py-2 hover:text-orange-200 transition-colors font-medium"
									onClick={() =>
										setMobileMenuOpen(
											false
										)
									}
								>
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="#leaderboard"
									className="block py-2 hover:text-orange-200 transition-colors font-medium"
									onClick={() =>
										setMobileMenuOpen(
											false
										)
									}
								>
									Leaderboard
								</a>
							</li>
							<li className="pt-4 flex flex-col gap-3 border-t border-white/20">
								<button className="w-full px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium">
									Sign In
								</button>
								<button className="w-full px-6 py-2 bg-white text-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
									Start Free
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}
