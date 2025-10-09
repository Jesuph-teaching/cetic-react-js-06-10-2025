import { StudentI } from '@/types/student';
import React from 'react';

export default function DetailedInfo({ student }: { student: StudentI }) {
	if (typeof window !== 'undefined') {
		localStorage.getItem('theme');
	}
	return (
		<div>
			<p>{student.birthdate}</p>
		</div>
	);
}
