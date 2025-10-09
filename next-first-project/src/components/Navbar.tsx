import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<nav className="w-full bg-neutral-300/30 py-2 px-8">
			<ul className="flex max-w-5xl mx-auto gap-4 justify-center">
				<li>
					<Link href="/home">Home</Link>
				</li>
				<li>
					<Link href="/admin/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link href="/admin/students">Students</Link>
				</li>
				<li>
					<Link href="/auth/sign-in">Sign in</Link>
				</li>
			</ul>
		</nav>
	);
}
