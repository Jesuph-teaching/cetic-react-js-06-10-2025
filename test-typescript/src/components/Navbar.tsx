import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Navbar() {
	const context = useContext(UserContext);
	console.log(context);
	return <div>Navbar</div>;
}
