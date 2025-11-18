import { CircleX, Menu } from 'lucide-react';
import { useState } from 'react';

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
					className="absolute right-2 top-2 md:hidden"
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
			<main className="flex-1 md:col-start-3 md:-col-end-1 overflow-auto">
				<h1>Main content</h1>
				<p>open : {String(open)}</p>
				<p>
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Laudantium quasi,
					provident corrupti voluptates enim
					reprehenderit neque eum voluptate, nihil
					tempore ipsa. Ullam a, cupiditate
					expedita qui quidem perferendis
					veritatis soluta, laborum doloremque
					sint dolore consequatur deserunt earum,
					accusamus impedit? Recusandae nemo rem
					doloremque voluptate laboriosam minus
					libero necessitatibus at neque id
					commodi, reprehenderit quidem incidunt
					sapiente veniam nisi consequatur dicta
					quia assumenda tenetur laudantium fugiat
					fuga quis ratione! Architecto nemo alias
					necessitatibus laudantium! Aspernatur
					nemo eius laudantium quae id aliquid
					nihil tempora nisi optio hic animi
					maiores deleniti, provident cum saepe
					illo. Praesentium incidunt ratione cum
					ipsum repudiandae. Cum tempora quidem,
					vero in perspiciatis, magni earum
					mollitia soluta ipsum veniam tempore,
					pariatur enim. Quam voluptatibus, vitae
					consequatur perspiciatis totam
					perferendis repudiandae quis maxime
					optio rerum, cupiditate cumque aliquam
					ea saepe ab quibusdam libero et officia
					in? Perspiciatis dolorum delectus
					praesentium vel? Sit fugiat voluptatem
					omnis. Consequuntur explicabo inventore
					quasi hic.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Laudantium quasi,
					provident corrupti voluptates enim
					reprehenderit neque eum voluptate, nihil
					tempore ipsa. Ullam a, cupiditate
					expedita qui quidem perferendis
					veritatis soluta, laborum doloremque
					sint dolore consequatur deserunt earum,
					accusamus impedit? Recusandae nemo rem
					doloremque voluptate laboriosam minus
					libero necessitatibus at neque id
					commodi, reprehenderit quidem incidunt
					sapiente veniam nisi consequatur dicta
					quia assumenda tenetur laudantium fugiat
					fuga quis ratione! Architecto nemo alias
					necessitatibus laudantium! Aspernatur
					nemo eius laudantium quae id aliquid
					nihil tempora nisi optio hic animi
					maiores deleniti, provident cum saepe
					illo. Praesentium incidunt ratione cum
					ipsum repudiandae. Cum tempora quidem,
					vero in perspiciatis, magni earum
					mollitia soluta ipsum veniam tempore,
					pariatur enim. Quam voluptatibus, vitae
					consequatur perspiciatis totam
					perferendis repudiandae quis maxime
					optio rerum, cupiditate cumque aliquam
					ea saepe ab quibusdam libero et officia
					in? Perspiciatis dolorum delectus
					praesentium vel? Sit fugiat voluptatem
					omnis. Consequuntur explicabo inventore
					quasi hic.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Laudantium quasi,
					provident corrupti voluptates enim
					reprehenderit neque eum voluptate, nihil
					tempore ipsa. Ullam a, cupiditate
					expedita qui quidem perferendis
					veritatis soluta, laborum doloremque
					sint dolore consequatur deserunt earum,
					accusamus impedit? Recusandae nemo rem
					doloremque voluptate laboriosam minus
					libero necessitatibus at neque id
					commodi, reprehenderit quidem incidunt
					sapiente veniam nisi consequatur dicta
					quia assumenda tenetur laudantium fugiat
					fuga quis ratione! Architecto nemo alias
					necessitatibus laudantium! Aspernatur
					nemo eius laudantium quae id aliquid
					nihil tempora nisi optio hic animi
					maiores deleniti, provident cum saepe
					illo. Praesentium incidunt ratione cum
					ipsum repudiandae. Cum tempora quidem,
					vero in perspiciatis, magni earum
					mollitia soluta ipsum veniam tempore,
					pariatur enim. Quam voluptatibus, vitae
					consequatur perspiciatis totam
					perferendis repudiandae quis maxime
					optio rerum, cupiditate cumque aliquam
					ea saepe ab quibusdam libero et officia
					in? Perspiciatis dolorum delectus
					praesentium vel? Sit fugiat voluptatem
					omnis. Consequuntur explicabo inventore
					quasi hic.
				</p>
			</main>
			<footer className="text-center md:col-start-3 md:-col-end-1">
				<p>All rights reserved © 2025</p>
			</footer>
		</div>
	);
}

export default App;
