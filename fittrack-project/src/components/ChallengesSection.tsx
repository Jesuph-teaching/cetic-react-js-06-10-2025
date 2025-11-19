import ChallengeCard from './ChallengeCard';
import { Filter } from 'lucide-react';

const challenges = [
	{
		id: 1,
		title: '30-Day Plank Challenge',
		description:
			'Build core strength with progressive plank exercises. Start with 20 seconds and work your way up to 5 minutes!',
		duration: '30 Days',
		difficulty: 'Beginner' as const,
		participants: 2847,
		category: 'Core',
		color: 'bg-blue-500',
	},
	{
		id: 2,
		title: 'Marathon Training',
		description:
			'Complete preparation program for your first marathon. Includes weekly mileage goals and recovery plans.',
		duration: '16 Weeks',
		difficulty: 'Advanced' as const,
		participants: 892,
		category: 'Running',
		color: 'bg-purple-500',
	},
	{
		id: 3,
		title: 'Yoga Flexibility',
		description:
			'Improve flexibility and balance with daily yoga sessions. Perfect for beginners and intermediates.',
		duration: '21 Days',
		difficulty: 'Beginner' as const,
		participants: 3421,
		category: 'Yoga',
		color: 'bg-green-500',
	},
	{
		id: 4,
		title: 'HIIT Fat Burn',
		description:
			'High-intensity interval training to maximize fat burn. Short, intense workouts for busy schedules.',
		duration: '8 Weeks',
		difficulty: 'Intermediate' as const,
		participants: 1956,
		category: 'HIIT',
		color: 'bg-red-500',
	},
	{
		id: 5,
		title: 'Push-Up Challenge',
		description:
			'Build upper body strength with progressive push-up variations. From knee push-ups to one-arm push-ups.',
		duration: '30 Days',
		difficulty: 'Intermediate' as const,
		participants: 2134,
		category: 'Strength',
		color: 'bg-orange-500',
	},
	{
		id: 6,
		title: 'Cycling Distance',
		description:
			'Increase your cycling endurance and speed. Track your rides and compete with others.',
		duration: '12 Weeks',
		difficulty: 'Intermediate' as const,
		participants: 1523,
		category: 'Cycling',
		color: 'bg-cyan-500',
	},
	{
		id: 7,
		title: 'Swimming Sprint',
		description:
			'Improve your swimming technique and speed with structured workouts and drills.',
		duration: '6 Weeks',
		difficulty: 'Advanced' as const,
		participants: 678,
		category: 'Swimming',
		color: 'bg-teal-500',
	},
	{
		id: 8,
		title: 'Meditation Mindfulness',
		description:
			'Develop a consistent meditation practice. Start with 5 minutes and build to 30 minutes daily.',
		duration: '30 Days',
		difficulty: 'Beginner' as const,
		participants: 4102,
		category: 'Mindfulness',
		color: 'bg-indigo-500',
	},
];

const filters = [
	'All',
	'Beginner',
	'Intermediate',
	'Advanced',
];

export default function ChallengesSection() {
	return (
		<section id="challenges" className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Popular Challenges
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Choose from our curated selection of
						fitness challenges designed to help
						you reach your goals
					</p>
				</div>

				{/* Filter Buttons - FLEXBOX: flex-wrap for responsive layout */}
				<div className="flex flex-wrap justify-center gap-3 mb-8">
					<button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
						<Filter className="h-4 w-4" />
						Filter
					</button>
					{filters.map((filter) => (
						<button
							key={filter}
							className="px-6 py-2 bg-white border-2 border-gray-200 rounded-lg font-medium hover:border-orange-500 hover:text-orange-500 transition-colors"
						>
							{filter}
						</button>
					))}
				</div>

				{/* GRID + CONTAINER QUERIES: Responsive card grid */}
				{/* Cards respond to their parent container, not viewport */}
				<div className="@container">
					<div className="grid grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-3 @4xl:grid-cols-4 gap-6">
						{challenges.map((challenge) => (
							<ChallengeCard
								key={challenge.id}
								{...challenge}
							/>
						))}
					</div>
				</div>

				{/* Load More Button */}
				<div className="text-center mt-12">
					<button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl">
						Load More Challenges
					</button>
				</div>
			</div>
		</section>
	);
}
