const navigationItems = [
	{
		title: 'Home',
		link: '/',
		icon: '',
	},
	{
		title: 'About Us',
		link: '/about-us',
		icon: '',
	},
	{
		title: 'Our services',
		link: '/services',
		icon: '',
	},
];

export default function NavItems() {
	return (
		<ul>
			{navigationItems.map((elm) => (
				<li key={elm.title}>
					{elm.icon}
					<a href={elm.link}>{elm.title}</a>
				</li>
			))}
		</ul>
	);
}
