import './App.css';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import UserProvider from './providers/UserProvider';

function App() {
	return (
		<UserProvider>
			<Navbar />
			<UserForm />
		</UserProvider>
	);
}

export default App;
