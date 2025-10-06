import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function NavUser() {
	const value = useContext(UserContext);
	return (
		<div className="user-auth">
			<img src="/user.png" alt="" />
			{value.userName}
		</div>
	);
}
