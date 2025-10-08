import { Outlet } from 'react-router';

export default function DashboardLayout() {
	return (
		<div className="grid grid-cols-[25vw_1fr] grid-rows-[5rem_1fr] w-full h-screen">
			<aside className="bg-cyan-400 row-span-2">
				<ul>
					<li>Element 1</li>
					<li>Element 2</li>
					<li>Element 3</li>
				</ul>
			</aside>
			<nav className="w-full bg-red-500">
				<ul>
					<li>Element 1</li>
					<li>Element 2</li>
					<li>Element 3</li>
				</ul>
			</nav>

			<main className="bg-green-400 overflow-auto">
				<Outlet />
			</main>
		</div>
	);
}
