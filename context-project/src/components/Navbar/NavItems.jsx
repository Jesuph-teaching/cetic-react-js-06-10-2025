import { Link } from 'react-router';

const navigationItems = [
	{
		title: 'Home',
		link: '/',
	},
	{
		title: 'About Us',
		link: '/about-us',
	},
	{
		title: 'Our services',
		link: '/services',
		icon: '',
	},
	{
		title: 'Signin',
		link: '/signin',
		icon: '',
	},
];

export default function NavItems() {
	return (
		<ul>
			{navigationItems.map((elm) => (
				<li key={elm.title}>
					{elm.icon}
					<Link to={elm.link}>{elm.title}</Link>
				</li>
			))}
		</ul>
	);
}
