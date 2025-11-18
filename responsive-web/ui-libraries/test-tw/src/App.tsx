import { CircleX, Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from './components/ui/button';
import ResponsiveDialog from './components/ResponsiveDialog';
import { HoverCardDemo } from './components/HoverCardDemo';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div
			id="layout"
			className="flex flex-col md:grid md:gap-y-2 md:grid-rows-[auto_1fr_24px] md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 w-full h-screen"
		>
			<aside
				className={`flex md:col-span-2 md:row-start-1 md:row-end-4 shadow flex-col fixed transition-transform duration-500 md:static bg-white w-full h-full ${
					open
						? 'translate-x-0'
						: '-translate-x-full md:translate-x-0'
				} `}
			>
				<ul>
					<li>
						<a href="#">Dashboard</a>
					</li>
					<li>
						<a href="#">Settings</a>
					</li>
					<li>
						<a href="#">Profile</a>
					</li>
				</ul>
				<button
					type="button"
					className="absolute text-yamina bg-yamina right-2  top-2 md:hidden"
					onClick={() => {
						setOpen(false);
					}}
				>
					<CircleX />
				</button>
			</aside>
			<header className="md:col-start-3 md:-col-end-1">
				<nav className="flex justify-between shadow py-4 px-8">
					<a href="#">
						<img src="/vite.svg" alt="Logo" />
					</a>
					<ul className="flex gap-2">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
					<button
						type="button"
						className="md:hidden"
						onClick={() => {
							setOpen(true);
						}}
					>
						<Menu />
					</button>
				</nav>
			</header>
			<main className="flex-1 @container/main md:col-start-3 md:-col-end-1 overflow-auto">
				<h1>Main content</h1>
				<p>open : {String(open)}</p>
				<div
					id="cards-holder"
					className="grid w-full grid-cols-1  @md/main:grid-cols-2 @xl/main:grid-cols-3 @4xl/main:grid-cols-4 @6xl/main:grid-cols-5 gap-4 p-4"
				>
					{Array.from({ length: 20 }, (_, i) => (
						<div
							key={i}
							className="bg-white rounded-lg shadow p-4"
						>
							<h2 className="text-lg font-semibold mb-2">
								Card Title {i + 1}
							</h2>
							<p className="text-gray-600">
								This is a description for
								card {i + 1}.
							</p>
						</div>
					))}
				</div>
				<ResponsiveDialog />
				<HoverCardDemo />
			</main>
			<footer className="text-center md:col-start-3 md:-col-end-1">
				<p>All rights reserved © 2025</p>
			</footer>
		</div>
	);
}

export default App;
