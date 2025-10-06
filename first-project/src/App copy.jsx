import ControlledInput, { ControlledInputFunction } from './components/ControlledInput';
import ProfileForm from './components/ProfileForm';
import UserProfile from './components/UserProfile';

function App() {
	/* fcvsd */
	// cvdf
	return (
		<>
			<UserProfile fullName="Youcef Madadi" image="/me-optimized.png" age={27} />
			<UserProfile fullName="Lamine" />
			<UserProfile />
			<UserProfile />
			<UserProfile />
			<ControlledInput />
			<ControlledInputFunction />
			<ProfileForm />
		</>
	);
}

export default App;
