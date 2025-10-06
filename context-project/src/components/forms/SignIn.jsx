import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function SignIn() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const value = useContext(UserContext);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				// request from the backend if the user credential are correct
				value.setUserName(userName);
				setPassword('');
				setUserName('');
			}}
		>
			<div>
				<label htmlFor="userName">Username</label>
				<input
					name="username"
					value={userName}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
					type="text"
					id="userName"
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					name="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					type="password"
					id="password"
				/>
			</div>
			<button>Sign in</button>
		</form>
	);
}
