import useUser from '../hooks/useUser';

export default function Navbar() {
	const { username } = useUser();
	return <div>{username}</div>;
}
