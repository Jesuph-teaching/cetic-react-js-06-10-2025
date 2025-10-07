import { useState, type ReactNode } from 'react';
import UserContext from '../contexts/UserContext';

export default function UserProvider({ children }: { children: ReactNode }) {
	const [username, setUsername] = useState('');
	return (
		<UserContext.Provider
			value={{
				username: username,
				setUsername: setUsername,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
