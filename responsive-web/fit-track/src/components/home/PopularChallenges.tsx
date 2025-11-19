import { ClockIcon, FunnelIcon, UsersIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;
type ChallengeLevelT = (typeof filters)[number];
const challenges: {
	level: Exclude<ChallengeLevelT, 'All'>; //  Beginner, Intermediate, Advanced (no All )
	tag: string; // core, HIIT , Yoga ...etc
	title: string;
	description: string;
	members: number; // people joined the challenge
	time: number; // in minutes
}[] = [
	{
		level: 'Beginner',
		tag: 'Yoga',
		title: 'Morning Yoga Flow',
		description: 'Start your day with gentle stretches and mindful breathing.',
		members: 1200,
		time: 30,
	},
	{
		level: 'Intermediate',
		tag: 'HIIT',
		title: 'Fat Burn HIIT',
		description: 'High intensity interval training for maximum calorie burn.',
		members: 950,
		time: 25,
	},
	{
		level: 'Advanced',
		tag: 'Core',
		title: 'Ultimate Core Challenge',
		description: 'Push your core strength to the next level with advanced moves.',
		members: 800,
		time: 40,
	},
	{
		level: 'Beginner',
		tag: 'Cardio',
		title: 'Easy Cardio Starter',
		description: 'Low-impact cardio to get your heart pumping.',
		members: 1100,
		time: 20,
	},
	{
		level: 'Intermediate',
		tag: 'Strength',
		title: 'Full Body Strength',
		description: 'Build muscle and endurance with compound exercises.',
		members: 700,
		time: 35,
	},
	{
		level: 'Advanced',
		tag: 'HIIT',
		title: 'Extreme HIIT Blast',
		description: 'Intense intervals for experienced athletes.',
		members: 500,
		time: 45,
	},
	{
		level: 'Beginner',
		tag: 'Pilates',
		title: 'Pilates Basics',
		description: 'Learn the fundamentals of Pilates for core stability.',
		members: 900,
		time: 25,
	},
	{
		level: 'Intermediate',
		tag: 'Mobility',
		title: 'Mobility Boost',
		description: 'Improve your flexibility and joint health.',
		members: 650,
		time: 30,
	},
	{
		level: 'Advanced',
		tag: 'Cardio',
		title: 'Cardio Endurance Pro',
		description: 'Challenge your stamina with advanced cardio routines.',
		members: 400,
		time: 50,
	},
	{
		level: 'Beginner',
		tag: 'Strength',
		title: 'Strength Starter',
		description: 'Introductory strength exercises for all ages.',
		members: 1000,
		time: 20,
	},
	{
		level: 'Intermediate',
		tag: 'Yoga',
		title: 'Power Yoga',
		description: 'Dynamic yoga flows for strength and flexibility.',
		members: 800,
		time: 35,
	},
	{
		level: 'Advanced',
		tag: 'Mobility',
		title: 'Advanced Mobility Mastery',
		description: 'Deep stretches and mobility drills for athletes.',
		members: 350,
		time: 40,
	},
	{
		level: 'Beginner',
		tag: 'HIIT',
		title: 'HIIT Lite',
		description: 'Gentle HIIT for beginners to get started safely.',
		members: 950,
		time: 15,
	},
	{
		level: 'Intermediate',
		tag: 'Core',
		title: 'Core Builder',
		description: 'Strengthen your abs and lower back with focused moves.',
		members: 720,
		time: 30,
	},
	{
		level: 'Advanced',
		tag: 'Strength',
		title: 'Strength Elite',
		description: 'Heavy lifting and advanced strength training.',
		members: 300,
		time: 55,
	},
	{
		level: 'Beginner',
		tag: 'Mobility',
		title: 'Gentle Mobility',
		description: 'Easy stretches for improved movement and comfort.',
		members: 850,
		time: 18,
	},
];
const colors = [
	'bg-orange-500',
	'bg-red-500',
	'bg-yellow-500',
	'bg-purple-500',
	'bg-green-500',
	'bg-blue-500',
	'bg-pink-500',
	'bg-teal-500',
	'bg-indigo-500',
	'bg-cyan-500',
	'bg-lime-500',
	'bg-rose-500',
	'bg-violet-500',
	'bg-fuchsia-500',
	'bg-amber-500',
	'bg-sky-500',
];
const iconClassName = 'size-4 text-orange-500';
const levelColor: Record<Exclude<ChallengeLevelT, 'All'>, string> = {
	Advanced: 'bg-red-100 text-red-600',
	Intermediate: 'bg-yellow-100 text-yellow-600',
	Beginner: 'bg-green-100 text-green-600',
};
export default function PopularChallenges() {
	const [filter, setFilter] = useState<ChallengeLevelT>('All');
	const filteredChallenges =
		filter === 'All' ? challenges : challenges.filter((c) => c.level === filter);
	const [loaded, setLoaded] = useState(8);
	const limitedChallenges = filteredChallenges.filter((_c, i) => i < loaded);
	return (
		<div className="container mx-auto px-4 py-24 gap-4 flex flex-col">
			<h2 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold">
				Popular Challenges
			</h2>
			<p className="text-center text-neutral-600 max-w-2xl mx-auto xl:text-lg">
				Choose from our curated selection of fitness challenges designed to help you reach
				your goals
			</p>
			<div className="flex gap-3 mt-8 items-center justify-center flex-wrap">
				<div className="flex items-center gap-2">
					<FunnelIcon className="size-4" /> Filter :
				</div>
				{filters.map((f) => (
					<button
						key={f}
						className={cn('btn btn-filtered', { active: f === filter })}
						onClick={() => {
							setFilter(f);
							setLoaded(8);
						}}
					>
						{f}
					</button>
				))}
			</div>
			<div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
				{limitedChallenges.map((c, index) => (
					<div
						className="card group hover:-translate-y-2 transition-all! relative gap-4 flex flex-col px-6 py-8"
						key={c.title}
					>
						<div
							className={cn(
								'absolute top-0 left-0 right-0 h-2 ',
								colors[index % colors.length]
							)}
						/>
						<div className="flex justify-between">
							<div className="tag bg-neutral-100 text-neutral-700">{c.tag}</div>
							<div className={cn('tag', levelColor[c.level])}>{c.level}</div>
						</div>
						<h4 className="text-xl transition-colors duration-300 group-hover:text-orange-500 font-bold">
							{c.title}
						</h4>
						<p>{c.description}</p>
						<div className="grid grid-cols-2 mt-auto">
							<div className="flex gap-2 items-center">
								<ClockIcon className={iconClassName} />
								{c.time}
							</div>
							<div className="flex gap-2 items-center">
								<UsersIcon className={iconClassName} />
								{c.members}
							</div>
						</div>
						<button className="btn btn-primary">Join Challenge</button>
					</div>
				))}
			</div>
			{loaded < filteredChallenges.length && (
				<button
					className="btn btn-primary btn-large mt-8 mx-auto"
					onClick={() => {
						setLoaded(Math.min(loaded + 8, filteredChallenges.length));
					}}
				>
					Load more challenges
				</button>
			)}
		</div>
	);
}
