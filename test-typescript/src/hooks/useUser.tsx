import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function useUser() {
	const context = useContext(UserContext);
	if (!context) throw new Error("You didn't put this component inside a provider");
	return context;
}
