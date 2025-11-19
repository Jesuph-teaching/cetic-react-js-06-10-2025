import {
	Activity,
	Flame,
	Target,
	TrendingUp,
	Calendar,
	Clock,
	Award,
	BarChart3,
} from 'lucide-react';

export default function Dashboard() {
	return (
		<section
			id="dashboard"
			className="py-16 bg-gray-50"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
						Your Dashboard
					</h2>
					<p className="text-lg text-gray-600">
						Track your progress and stay
						motivated
					</p>
				</div>

				{/* GRID: Stats Cards - 1 col → 2 cols → 4 cols */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{/* Stat Card 1 */}
					<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
						<div className="flex items-center justify-between mb-4">
							<div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
								<Flame className="h-6 w-6 text-orange-500" />
							</div>
							<span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded">
								+12%
							</span>
						</div>
						<div className="text-3xl font-bold text-gray-900 mb-1">
							2,847
						</div>
						<div className="text-sm text-gray-600">
							Calories Burned
						</div>
					</div>

					{/* Stat Card 2 */}
					<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
						<div className="flex items-center justify-between mb-4">
							<div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
								<Activity className="h-6 w-6 text-blue-500" />
							</div>
							<span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded">
								+8%
							</span>
						</div>
						<div className="text-3xl font-bold text-gray-900 mb-1">
							24
						</div>
						<div className="text-sm text-gray-600">
							Active Days
						</div>
					</div>

					{/* Stat Card 3 */}
					<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
						<div className="flex items-center justify-between mb-4">
							<div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
								<Target className="h-6 w-6 text-purple-500" />
							</div>
							<span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded">
								+15%
							</span>
						</div>
						<div className="text-3xl font-bold text-gray-900 mb-1">
							18/20
						</div>
						<div className="text-sm text-gray-600">
							Goals Achieved
						</div>
					</div>

					{/* Stat Card 4 */}
					<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
						<div className="flex items-center justify-between mb-4">
							<div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
								<TrendingUp className="h-6 w-6 text-green-500" />
							</div>
							<span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded">
								+23%
							</span>
						</div>
						<div className="text-3xl font-bold text-gray-900 mb-1">
							Level 12
						</div>
						<div className="text-sm text-gray-600">
							Current Level
						</div>
					</div>
				</div>

				{/* GRID: 1 col → 2 cols for larger sections */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
					{/* Recent Activity */}
					<div className="bg-white rounded-xl shadow-md p-6">
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-xl font-bold text-gray-900">
								Recent Activity
							</h3>
							<button className="text-sm text-orange-500 font-medium hover:text-orange-600">
								View All
							</button>
						</div>

						<div className="space-y-4">
							{[
								{
									icon: Calendar,
									title: 'Completed Yoga Session',
									time: '2 hours ago',
									color: 'bg-green-100 text-green-500',
								},
								{
									icon: Clock,
									title: '5K Morning Run',
									time: 'Yesterday',
									color: 'bg-blue-100 text-blue-500',
								},
								{
									icon: Award,
									title: 'Earned "Iron Will" Badge',
									time: '2 days ago',
									color: 'bg-yellow-100 text-yellow-500',
								},
							].map((activity, index) => (
								<div
									key={index}
									className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
								>
									<div
										className={`h-10 w-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}
									>
										<activity.icon className="h-5 w-5" />
									</div>
									<div className="flex-1">
										<div className="font-medium text-gray-900">
											{activity.title}
										</div>
										<div className="text-sm text-gray-500">
											{activity.time}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Current Challenges */}
					<div className="bg-white rounded-xl shadow-md p-6">
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-xl font-bold text-gray-900">
								Current Challenges
							</h3>
							<button className="text-sm text-orange-500 font-medium hover:text-orange-600">
								View All
							</button>
						</div>

						<div className="space-y-4">
							{[
								{
									title: '30-Day Plank Challenge',
									progress: 75,
									days: '23/30 days',
								},
								{
									title: 'HIIT Fat Burn',
									progress: 40,
									days: '16/40 workouts',
								},
								{
									title: 'Yoga Flexibility',
									progress: 90,
									days: '19/21 days',
								},
							].map((challenge, index) => (
								<div
									key={index}
									className="space-y-2"
								>
									<div className="flex items-center justify-between">
										<div className="font-medium text-gray-900">
											{
												challenge.title
											}
										</div>
										<div className="text-sm text-gray-500">
											{challenge.days}
										</div>
									</div>
									<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
										<div
											className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all"
											style={{
												width: `${challenge.progress}%`,
											}}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Weekly Progress Chart */}
				<div className="bg-white rounded-xl shadow-md p-6">
					<div className="flex items-center justify-between mb-6">
						<h3 className="text-xl font-bold text-gray-900">
							Weekly Progress
						</h3>
						<div className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5 text-gray-400" />
							<span className="text-sm text-gray-600">
								Last 7 Days
							</span>
						</div>
					</div>

					{/* Simple Bar Chart - FLEXBOX */}
					<div className="flex items-end justify-between gap-2 h-48">
						{[
							{ day: 'Mon', value: 65 },
							{ day: 'Tue', value: 80 },
							{ day: 'Wed', value: 45 },
							{ day: 'Thu', value: 90 },
							{ day: 'Fri', value: 75 },
							{ day: 'Sat', value: 95 },
							{ day: 'Sun', value: 70 },
						].map((bar, index) => (
							<div
								key={index}
								className="flex-1 flex flex-col items-center gap-2"
							>
								<div className="w-full bg-gray-100 rounded-t-lg relative group hover:bg-gray-200 transition-colors">
									<div
										className="w-full bg-gradient-to-t from-orange-500 to-red-500 rounded-t-lg transition-all"
										style={{
											height: `${
												bar.value *
												1.6
											}px`,
										}}
									></div>
									<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
										{bar.value}%
									</div>
								</div>
								<div className="text-xs text-gray-600 font-medium">
									{bar.day}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
