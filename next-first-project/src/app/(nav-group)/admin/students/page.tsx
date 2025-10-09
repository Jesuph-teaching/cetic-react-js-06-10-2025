import { StudentI } from '@/types/student';
import Link from 'next/link';
import React from 'react';

export default async function StudentsPage() {
	const response = await fetch(new URL('/api/students', process.env.NEXT_PUBLIC_BASE_URL));
	const students = (await response.json()) as StudentI[];
	console.log(students);
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Birthdate</th>
						<th>Gender</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{students.map((student) => (
						<tr key={student.id}>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>{new Date(student.birthdate).toLocaleString()}</td>
							<td>{student.gender}</td>
							<td>
								<Link className="bg-red-300/30 p-2 flex my-2" href={'/admin/students/' + student.id}>
									Go to Student
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
