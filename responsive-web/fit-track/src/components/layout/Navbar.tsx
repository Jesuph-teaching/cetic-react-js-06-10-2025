import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import Logo from './Logo';
export default function Navbar() {
	const [open, setOpen] = useState(false);

	const navigationListClasses = cn(
		open ? 'flex ' : 'hidden lg:flex',
		'flex-col lg:flex-row w-full lg:w-auto border-t lg:border-0 py-4 lg:py-0',
		'border-white/10'
	);
	return (
		<nav className="flex shadow-lg justify-center bg-linear-to-r font-medium text-white from-orange-500 to-red-500 py-3">
			<div className="flex justify-between flex-wrap items-center gap-4 px-4 container">
				<Logo />
				<button
					className="flex lg:hidden"
					onClick={() => {
						setOpen(!open);
					}}
				>
					{open ? <XIcon /> : <MenuIcon />}
				</button>
				<ul className={cn(navigationListClasses, 'gap-8')}>
					<li>
						<a href="/#Home">Home</a>
					</li>
					<li>
						<a href="/#Challenges">Challenges</a>
					</li>
					<li>
						<a href="/#Dashboard">Dashboard </a>
					</li>
					<li>
						<a href="/#Leaderboard">Leaderboard</a>
					</li>
				</ul>
				<div className={cn(navigationListClasses, 'gap-4')}>
					<a href="#" className="btn lg:bg-white/20">
						Sign In
					</a>
					<a href="#" className="btn btn-empty">
						Start Free
					</a>
				</div>
			</div>
		</nav>
	);
}
