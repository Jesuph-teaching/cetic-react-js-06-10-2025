import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import ThemeSwitcher from '../ThemeSwitcher';

export default function NavUser() {
	const value = useContext(UserContext);
	return (
		<div className="user-auth">
			<ThemeSwitcher />
			<img src="/user.png" alt="" />
			{value.userName}
		</div>
	);
}
