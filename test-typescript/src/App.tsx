import './App.css';
import Navbar from './components/Navbar';
import UserProvider from './providers/UserProvider';

function App() {
	return (
		<UserProvider>
			<Navbar />
		</UserProvider>
	);
}

export default App;
