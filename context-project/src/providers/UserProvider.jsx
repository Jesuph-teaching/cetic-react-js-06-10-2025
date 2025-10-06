import { useState } from 'react';
import UserContext from '../contexts/UserContext';
export default function UserProvider({ children }) {
	const [userName, setUserName] = useState('');
	return (
		<UserContext.Provider
			value={{
				userName: userName,
				setUserName: setUserName,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
