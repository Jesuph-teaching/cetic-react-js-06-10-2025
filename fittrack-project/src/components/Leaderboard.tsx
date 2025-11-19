import { Trophy, Medal, Crown } from 'lucide-react';

const leaderboardData = [
	{
		rank: 1,
		name: 'Sarah Johnson',
		points: 15420,
		challenges: 24,
		avatar: '👩',
	},
	{
		rank: 2,
		name: 'Mike Chen',
		points: 14890,
		challenges: 22,
		avatar: '👨',
	},
	{
		rank: 3,
		name: 'Emily Rodriguez',
		points: 13765,
		challenges: 21,
		avatar: '👩',
	},
	{
		rank: 4,
		name: 'David Kim',
		points: 12340,
		challenges: 19,
		avatar: '👨',
	},
	{
		rank: 5,
		name: 'Lisa Anderson',
		points: 11950,
		challenges: 18,
		avatar: '👩',
	},
	{
		rank: 6,
		name: 'James Wilson',
		points: 10875,
		challenges: 17,
		avatar: '👨',
	},
	{
		rank: 7,
		name: 'Maria Garcia',
		points: 10230,
		challenges: 16,
		avatar: '👩',
	},
	{
		rank: 8,
		name: 'Tom Brown',
		points: 9680,
		challenges: 15,
		avatar: '👨',
	},
];

export default function Leaderboard() {
	const getRankIcon = (rank: number) => {
		switch (rank) {
			case 1:
				return (
					<Crown className="h-6 w-6 text-yellow-500" />
				);
			case 2:
				return (
					<Medal className="h-6 w-6 text-gray-400" />
				);
			case 3:
				return (
					<Medal className="h-6 w-6 text-orange-600" />
				);
			default:
				return (
					<span className="text-lg font-bold text-gray-500">
						{rank}
					</span>
				);
		}
	};

	const getRankBg = (rank: number) => {
		switch (rank) {
			case 1:
				return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200';
			case 2:
				return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
			case 3:
				return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200';
			default:
				return 'bg-white border-gray-100';
		}
	};

	return (
		<section
			id="leaderboard"
			className="py-16 bg-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12">
					<div className="flex items-center justify-center gap-3 mb-4">
						<Trophy className="h-10 w-10 text-orange-500" />
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
							Leaderboard
						</h2>
					</div>
					<p className="text-lg text-gray-600">
						See how you rank against other
						fitness enthusiasts
					</p>
				</div>

				{/* Leaderboard Container */}
				<div className="max-w-4xl mx-auto">
					{/* Top 3 Podium - GRID: 3 columns on desktop, stacked on mobile */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
						{/* 2nd Place */}
						<div className="md:order-1 md:mt-8">
							<div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 text-center shadow-lg">
								<div className="text-6xl mb-3">
									{
										leaderboardData[1]
											.avatar
									}
								</div>
								<div className="flex items-center justify-center gap-2 mb-2">
									<Medal className="h-5 w-5 text-gray-400" />
									<span className="font-bold text-gray-700">
										2nd Place
									</span>
								</div>
								<div className="font-semibold text-gray-900">
									{
										leaderboardData[1]
											.name
									}
								</div>
								<div className="text-2xl font-bold text-gray-700 mt-2">
									{leaderboardData[1].points.toLocaleString()}
								</div>
								<div className="text-sm text-gray-600">
									points
								</div>
							</div>
						</div>

						{/* 1st Place */}
						<div className="md:order-2">
							<div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-6 text-center shadow-xl relative">
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<Crown className="h-8 w-8 text-yellow-500" />
								</div>
								<div className="text-6xl mb-3 mt-2">
									{
										leaderboardData[0]
											.avatar
									}
								</div>
								<div className="flex items-center justify-center gap-2 mb-2">
									<Crown className="h-6 w-6 text-yellow-600" />
									<span className="font-bold text-yellow-700">
										1st Place
									</span>
								</div>
								<div className="font-semibold text-gray-900">
									{
										leaderboardData[0]
											.name
									}
								</div>
								<div className="text-3xl font-bold text-yellow-700 mt-2">
									{leaderboardData[0].points.toLocaleString()}
								</div>
								<div className="text-sm text-yellow-700">
									points
								</div>
							</div>
						</div>

						{/* 3rd Place */}
						<div className="md:order-3 md:mt-8">
							<div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center shadow-lg">
								<div className="text-6xl mb-3">
									{
										leaderboardData[2]
											.avatar
									}
								</div>
								<div className="flex items-center justify-center gap-2 mb-2">
									<Medal className="h-5 w-5 text-orange-600" />
									<span className="font-bold text-orange-700">
										3rd Place
									</span>
								</div>
								<div className="font-semibold text-gray-900">
									{
										leaderboardData[2]
											.name
									}
								</div>
								<div className="text-2xl font-bold text-orange-700 mt-2">
									{leaderboardData[2].points.toLocaleString()}
								</div>
								<div className="text-sm text-orange-700">
									points
								</div>
							</div>
						</div>
					</div>

					{/* Rest of Leaderboard */}
					<div className="space-y-3">
						{leaderboardData
							.slice(3)
							.map((user) => (
								<div
									key={user.rank}
									className={`${getRankBg(
										user.rank
									)} rounded-xl p-4 border-2 hover:shadow-md transition-shadow`}
								>
									{/* FLEXBOX: Responsive layout for leaderboard rows */}
									<div className="flex items-center justify-between gap-4">
										{/* Left: Rank and User Info */}
										<div className="flex items-center gap-4 flex-1 min-w-0">
											<div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
												{getRankIcon(
													user.rank
												)}
											</div>
											<div className="text-4xl flex-shrink-0">
												{
													user.avatar
												}
											</div>
											<div className="min-w-0 flex-1">
												<div className="font-semibold text-gray-900 truncate">
													{
														user.name
													}
												</div>
												<div className="text-sm text-gray-600">
													{
														user.challenges
													}{' '}
													challenges
												</div>
											</div>
										</div>

										{/* Right: Points */}
										<div className="text-right flex-shrink-0">
											<div className="text-xl sm:text-2xl font-bold text-gray-900">
												{user.points.toLocaleString()}
											</div>
											<div className="text-xs sm:text-sm text-gray-600">
												points
											</div>
										</div>
									</div>
								</div>
							))}
					</div>

					{/* Your Rank Card */}
					<div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-xl">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<div className="text-4xl">
									🙂
								</div>
								<div>
									<div className="text-sm opacity-90">
										Your Rank
									</div>
									<div className="font-bold text-xl">
										#47
									</div>
								</div>
							</div>
							<div className="text-right">
								<div className="text-3xl font-bold">
									8,450
								</div>
								<div className="text-sm opacity-90">
									points
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
