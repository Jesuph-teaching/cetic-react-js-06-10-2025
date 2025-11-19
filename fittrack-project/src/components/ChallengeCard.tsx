import {
	Calendar,
	Clock,
	Target,
	Users,
} from 'lucide-react';

interface ChallengeCardProps {
	title: string;
	description: string;
	duration: string;
	difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
	participants: number;
	category: string;
	color: string;
}

export default function ChallengeCard({
	title,
	description,
	duration,
	difficulty,
	participants,
	category,
	color,
}: ChallengeCardProps) {
	const difficultyColors = {
		Beginner: 'bg-green-100 text-green-700',
		Intermediate: 'bg-yellow-100 text-yellow-700',
		Advanced: 'bg-red-100 text-red-700',
	};

	return (
		// CONTAINER QUERY: Card adapts to parent container width
		<article className="@container bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
			{/* Header with colored accent */}
			<div className={`h-2 ${color}`}></div>

			<div className="p-6">
				{/* FLEXBOX: Category badge and difficulty */}
				<div className="flex justify-between items-start mb-4">
					<span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
						{category}
					</span>
					<span
						className={`text-xs font-semibold px-3 py-1 rounded-full ${difficultyColors[difficulty]}`}
					>
						{difficulty}
					</span>
				</div>

				{/* Title */}
				<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
					{title}
				</h3>

				{/* Description - CONTAINER QUERY: Show/hide based on container size */}
				<p className="text-gray-600 mb-4 line-clamp-2 @lg:line-clamp-3">
					{description}
				</p>

				{/* Stats - GRID: Changes layout based on container width */}
				<div className="grid grid-cols-2 @md:grid-cols-3 gap-3 mb-4">
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<Clock className="h-4 w-4 text-orange-500" />
						<span className="hidden @sm:inline">
							{duration}
						</span>
						<span className="@sm:hidden">
							{duration.split(' ')[0]}
						</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<Users className="h-4 w-4 text-orange-500" />
						<span>{participants}</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-gray-600 col-span-2 @md:col-span-1">
						<Target className="h-4 w-4 text-orange-500" />
						<span className="hidden @sm:inline">
							Daily Goals
						</span>
						<span className="@sm:hidden">
							Goals
						</span>
					</div>
				</div>

				{/* CTA Button - CONTAINER QUERY: Full width on small containers */}
				<button className="w-full @md:w-auto px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
					Join Challenge
				</button>

				{/* Additional info - CONTAINER QUERY: Hidden on small containers */}
				<div className="hidden @lg:flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
					<Calendar className="h-4 w-4 text-gray-400" />
					<span className="text-xs text-gray-500">
						Starts next Monday
					</span>
				</div>
			</div>
		</article>
	);
}
