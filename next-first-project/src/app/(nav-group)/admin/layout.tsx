import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex gap-4">
			<aside className="bg-neutral-300/30">
				<ul className="flex flex-col max-w-5xl mx-auto gap-4 justify-center">
					<li>
						<Link href="/admin/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link href="/admin/students">Students</Link>
					</li>
				</ul>
			</aside>
			{children}
		</div>
	);
}
