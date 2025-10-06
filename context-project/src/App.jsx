import './App.css';
import SignIn from './components/forms/SignIn';
import Navbar from './components/Navbar';
import UserProvider from './providers/UserProvider';

function App() {
	return (
		<UserProvider>
			<Navbar />
			<SignIn />
		</UserProvider>
	);
}

export default App;
