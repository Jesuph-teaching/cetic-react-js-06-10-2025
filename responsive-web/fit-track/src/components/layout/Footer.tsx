import type { ReactNode } from 'react';
import Logo from './Logo';
import { FacebookIcon, InstagramIcon, MailIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
const socialMedias: {
	icon: ReactNode;
	link: string;
}[] = [
	{
		icon: <FacebookIcon />,
		link: 'https://facebook.com',
	},
	{
		icon: <InstagramIcon />,
		link: 'https://instagram.com',
	},
	{
		icon: <TwitterIcon />,
		link: 'https://twitter.com',
	},
	{
		icon: <YoutubeIcon />,
		link: 'https://youtube.com',
	},
];
const links = [
	{
		title: 'Quick Links',
		links: [
			{
				title: 'About Us',
				link: '/#about-us',
			},
			{
				title: 'Features',
				link: '/#features',
			},
			{
				title: 'Pricing',
				link: '/#pricing',
			},
			{
				title: 'FAQ',
				link: '/#faq',
			},
			{
				title: 'Contact',
				link: '/#contact',
			},
		],
	},
	{
		title: 'Challenges',
		links: [
			{
				title: 'Browse All',
				link: '/challenges/all',
			},
			{
				title: 'Popular',
				link: '/challenges/popular',
			},
			{
				title: 'For Beginners',
				link: '/challenges/beginners',
			},
			{
				title: 'Advanced',
				link: '/challenges/advanced',
			},
			{
				title: 'Create Your Own',
				link: '/challenges/create',
			},
		],
	},
];
export default function Footer() {
	return (
		<footer className=" bg-gray-900 py-18 text-gray-400">
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 container px-4 mx-auto">
				<div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
					<Logo className="text-orange-500" />
					<p>
						Transform your fitness journey with challenges, tracking, and a supportive
						community.
					</p>
					<div className="flex gap-4">
						{socialMedias.map((sm) => (
							<a
								key={sm.link}
								href={sm.link}
								className="flex justify-center items-center p-2 rounded-xl text-gray-300 bg-gray-800 hover:bg-orange-500"
							>
								{sm.icon}
							</a>
						))}
					</div>
				</div>
				{links.map((group) => (
					<div className="flex flex-col gap-4" key={group.title}>
						<h5 className="font-bold text-white">{group.title}</h5>
						<ul className="flex flex-col gap-2 ">
							{group.links.map((link) => (
								<li key={link.link}>
									<a
										href={link.link}
										className="transition-colors duration-300 hover:text-orange-500"
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
				<form action={'/'} className="flex flex-col sm:col-span-2 gap-2 lg:col-span-1">
					<h5 className="font-bold text-white">Newsletter</h5>
					<p className="text-sm max-w-xs">
						Subscribe to get the latest challenges and fitness tips.
					</p>
					<div className="flex items-center gap-2 max-w-sm">
						<input
							type="text"
							placeholder="Your email"
							className=" flex-1  focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg leading-none px-4 py-2 bg-gray-800 placeholder:text-gray-500 text-white"
						/>
						<button className="bg-orange-500   px-4 py-2 text-gray-300 rounded-lg  hover:bg-orange-600">
							<MailIcon className="size-5" />
						</button>
					</div>
				</form>
			</div>
		</footer>
	);
}
