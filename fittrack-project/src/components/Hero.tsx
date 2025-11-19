import {
	TrendingUp,
	Users,
	Trophy,
	Zap,
} from 'lucide-react';

export default function Hero() {
	return (
		<section
			id="home"
			className="bg-gradient-to-br from-orange-50 to-red-50 py-12 md:py-20"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* GRID: 1 column mobile → 2 columns desktop */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
					{/* Left Column - Content */}
					<div className="space-y-6">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
							Transform Your{' '}
							<span className="text-orange-500">
								Fitness
							</span>{' '}
							Journey
						</h1>
						<p className="text-lg sm:text-xl text-gray-600">
							Join thousands of users tracking
							challenges, competing with
							friends, and achieving their
							fitness goals. Start your
							transformation today!
						</p>

						{/* FLEXBOX: Button group with gap */}
						<div className="flex flex-wrap gap-4">
							<button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
								Start Challenge
							</button>
							<button className="px-8 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
								Learn More
							</button>
						</div>

						{/* FLEXBOX: Stats row with justify-between */}
						<div className="flex justify-between items-center pt-8 border-t border-gray-200">
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-gray-900">
									50K+
								</div>
								<div className="text-sm text-gray-600">
									Active Users
								</div>
							</div>
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-gray-900">
									120+
								</div>
								<div className="text-sm text-gray-600">
									Challenges
								</div>
							</div>
							<div className="text-center">
								<div className="text-2xl sm:text-3xl font-bold text-gray-900">
									98%
								</div>
								<div className="text-sm text-gray-600">
									Success Rate
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Image/Visual */}
					<div className="relative">
						{/* GRID: Feature cards in 2x2 grid */}
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
								<div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
									<TrendingUp className="h-6 w-6 text-orange-500" />
								</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Track Progress
								</h3>
								<p className="text-sm text-gray-600">
									Monitor your daily
									achievements
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mt-8">
								<div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
									<Users className="h-6 w-6 text-red-500" />
								</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Join Community
								</h3>
								<p className="text-sm text-gray-600">
									Connect with like-minded
									people
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
								<div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
									<Trophy className="h-6 w-6 text-yellow-500" />
								</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Win Rewards
								</h3>
								<p className="text-sm text-gray-600">
									Earn badges and prizes
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow mt-8">
								<div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
									<Zap className="h-6 w-6 text-purple-500" />
								</div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Stay Motivated
								</h3>
								<p className="text-sm text-gray-600">
									Daily tips and reminders
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
