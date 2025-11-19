import {
	Dumbbell,
	Facebook,
	Twitter,
	Instagram,
	Youtube,
	Mail,
} from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* GRID: 1 col → 2 cols → 4 cols responsive footer layout */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					{/* Brand Column */}
					<div className="sm:col-span-2 lg:col-span-1">
						<div className="flex items-center gap-2 mb-4">
							<Dumbbell className="h-8 w-8 text-orange-500" />
							<span className="text-2xl font-bold text-white">
								FitTrack
							</span>
						</div>
						<p className="text-gray-400 mb-4">
							Transform your fitness journey
							with challenges, tracking, and a
							supportive community.
						</p>
						{/* FLEXBOX: Social media icons with gap */}
						<div className="flex items-center gap-4">
							<a
								href="#"
								className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
								aria-label="Twitter"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
								aria-label="YouTube"
							>
								<Youtube className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links Column */}
					<div>
						<h3 className="text-white font-semibold mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									FAQ
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Challenges Column */}
					<div>
						<h3 className="text-white font-semibold mb-4">
							Challenges
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									Browse All
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									Popular
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									For Beginners
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									Advanced
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-orange-500 transition-colors"
								>
									Create Your Own
								</a>
							</li>
						</ul>
					</div>

					{/* Newsletter Column */}
					<div>
						<h3 className="text-white font-semibold mb-4">
							Newsletter
						</h3>
						<p className="text-gray-400 mb-4 text-sm">
							Subscribe to get the latest
							challenges and fitness tips.
						</p>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="Your email"
								className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-500"
							/>
							<button
								className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
								aria-label="Subscribe"
							>
								<Mail className="h-5 w-5" />
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar - FLEXBOX: Responsive layout */}
				<div className="pt-8 border-t border-gray-800">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<p className="text-gray-400 text-sm text-center sm:text-left">
							© 2025 FitTrack. All rights
							reserved.
						</p>
						{/* FLEXBOX: Links with gap */}
						<div className="flex flex-wrap justify-center gap-6 text-sm">
							<a
								href="#"
								className="hover:text-orange-500 transition-colors"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="hover:text-orange-500 transition-colors"
							>
								Terms of Service
							</a>
							<a
								href="#"
								className="hover:text-orange-500 transition-colors"
							>
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
