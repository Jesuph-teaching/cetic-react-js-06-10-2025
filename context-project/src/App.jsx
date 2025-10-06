import './App.css';
import SignIn from './components/forms/SignIn';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import ThemeProvider from './providers/ThemeProvider';
import UserProvider from './providers/UserProvider';
import { BrowserRouter, Route, Routes } from 'react-router';
function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<UserProvider>
					<Navbar />
					<Routes>
						<Route path="/" Component={Home} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="*" Component={Notfound} />
					</Routes>
				</UserProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
