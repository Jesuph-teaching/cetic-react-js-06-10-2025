import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';

const user = {
	information: {},
	isLoggedIn: true,
};
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Navigate to="/app" />} />
				<Route path="/app" element={user.isLoggedIn ? <DashboardLayout /> : <Navigate to="/auth/sign-in" />}>
					<Route index element={<Navigate to="/app/dashboard" />} />
					<Route path="dashboard" Component={Dashboard} />
					<Route path="students" Component={Students} />
					<Route path="*" Component={NotFound} />
				</Route>
				<Route path="/auth" element={user.isLoggedIn ? <Navigate to="/app" /> : <AuthLayout />}>
					<Route index element={<Navigate to="/auth/sign-in" />} />
					<Route path="sign-in" Component={SignIn} />
					<Route path="sign-up" Component={SignUp} />
				</Route>
				<Route path="*" Component={NotFound} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
