import useUser from '../hooks/useUser';

export default function UserForm() {
	const { setUsername, username } = useUser();
	return (
		<div>
			<input
				type="text"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
		</div>
	);
}
