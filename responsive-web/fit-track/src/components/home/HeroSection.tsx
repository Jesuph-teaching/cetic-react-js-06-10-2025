import { TrendingUpIcon, TrophyIcon, UsersIcon, ZapIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

const stats = [
	{
		title: 'Active Users',
		value: '50K+',
	},
	{
		title: 'Challenges',
		value: '120+',
	},
	{
		title: 'Success Rate',
		value: '98%',
	},
];
const iconSize = 'size-6';
const cards: {
	icon: React.ReactNode;
	title: string;
	description: string;
	color: string;
}[] = [
	{
		icon: <TrendingUpIcon className={iconSize} />,
		title: 'Track Progress',
		description: 'Monitor your daily achievements',
		color: 'bg-orange-100 text-orange-500',
	},

	{
		icon: <UsersIcon className={iconSize} />,
		title: 'Join Community',
		description: 'Connect with like-minded people',
		color: 'bg-red-100 text-red-500',
	},
	{
		icon: <TrophyIcon className={iconSize} />,
		title: 'Win Rewards',
		description: 'Earn badges and prizes',
		color: 'bg-yellow-100 text-yellow-500',
	},

	{
		icon: <ZapIcon className={iconSize} />,
		title: 'Stay Motivated',
		description: 'Daily tips and reminders',
		color: 'bg-purple-100 text-purple-500',
	},
];
export default function HeroSection() {
	return (
		<div className="flex justify-center bg-linear-to-r from-orange-50 to-red-50 ">
			<div className="container px-4  py-24 grid grid-cols-1 gap-8 md:grid-cols-2 w-full">
				<div className=" flex flex-col gap-6">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold w-[14ch] leading-tight">
						Transform Your <span className="text-orange-500">Fitness</span> Journey
					</h1>
					<p className="w-full max-w-md lg:max-w-xl text-xl">
						Join thousands of users tracking challenges, competing with friends, and
						achieving their fitness goals. Start your transformation today!
					</p>
					<div className="flex gap-4">
						<a href="#" className="btn btn-large btn-primary">
							Start Challenge
						</a>
						<a href="#" className="btn btn-large btn-outlined">
							Learn More
						</a>
					</div>
					<div className="border-t border-neutral-200 py-8 gap-8 w-full flex justify-between">
						{stats.map((s) => (
							<div key={s.title} className="flex flex-col items-center">
								<h3 className="text-3xl font-bold">{s.value}</h3>
								<h5 className="text-sm">{s.title}</h5>
							</div>
						))}
					</div>
				</div>
				<div className="gap-6 px-4 py-4 lg:py-12 grid grid-cols-2 lg:grid-cols-[15rem_15rem] xl:grid-cols-[17rem_17rem]">
					{cards.map((c, i) => (
						<div
							key={c.title}
							className={cn(
								'card max-w-2xs flex flex-col p-6 gap-2 items-start',
								i % 2 === 0 ? '' : 'mt-8'
							)}
						>
							<div className={cn('p-3 rounded-lg', c.color)}>{c.icon}</div>
							<h4 className="font-medium">{c.title}</h4>
							<p className="text-sm">{c.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
