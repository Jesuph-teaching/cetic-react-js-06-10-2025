import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router';
const Dashboard = () => <div>Dashboard</div>;
const Students = () => <div>Students</div>;
const SignIn = () => <div>SignIn</div>;
const SignUp = () => <div>SignUp</div>;
const NotFound = () => <div>NotFound</div>;
const user = {
	information: {},
	isLoggedIn: false,
};
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Navigate to="/app" />} />
				<Route path="/app" element={user.isLoggedIn ? <Outlet /> : <Navigate to="/auth/sign-in" />}>
					<Route index element={<Navigate to="/app/dashboard" />} />
					<Route path="dashboard" Component={Dashboard} />
					<Route path="students" Component={Students} />
				</Route>
				<Route path="/auth" element={user.isLoggedIn ? <Navigate to="/app" /> : <Outlet />}>
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
