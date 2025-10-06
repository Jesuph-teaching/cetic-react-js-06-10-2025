import './App.css';
import SignIn from './components/forms/SignIn';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Notfound from './pages/Notfound';
import ThemeProvider from './providers/ThemeProvider';
import UserProvider from './providers/UserProvider';
import ProjectsProvider from './providers/ProjectsProvider';
import ContactProvider from './providers/ContactProvider';
import { BrowserRouter, Route, Routes } from 'react-router';
function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<ProjectsProvider>
					<ContactProvider>
						<UserProvider>
							<Navbar />
							<Routes>
								<Route path="/" Component={Home} />
								<Route path="/projects" Component={ProjectsPage} />
								<Route path="/signin" element={<SignIn />} />
								<Route path="*" Component={Notfound} />
							</Routes>
						</UserProvider>
					</ContactProvider>
				</ProjectsProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
