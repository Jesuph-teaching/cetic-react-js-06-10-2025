import { createContext } from 'react';
interface UserContextI {
	username: string;
	setUsername: (name: string) => void;
}
const UserContext = createContext<UserContextI | null>(null);
export default UserContext;
