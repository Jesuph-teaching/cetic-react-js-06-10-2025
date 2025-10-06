import './Navbar.css';
import NavItems from './NavItems';
import NavUser from './NavUser';

export default function Navbar() {
	return (
		<nav className="navbar">
			<img src="/logo.png" />
			<NavItems />
			<NavUser />
		</nav>
	);
}
