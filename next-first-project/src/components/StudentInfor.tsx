import { StudentI } from '@/types/student';
import DetailedInfo from './DetailedInfo';

export default async function StudentInformation({ studentId }: { studentId: string }) {
	const response = await fetch(new URL('/api/students/' + studentId, process.env.NEXT_PUBLIC_BASE_URL));
	const student = (await response.json()) as StudentI | null;
	if (!student) {
		return <div>THis student doesnt exist</div>;
	}
	return (
		<div>
			<h1>This page is for {studentId}</h1>
			<h2>
				{student.firstName} {student.lastName}
			</h2>
			<DetailedInfo student={student} />
		</div>
	);
}
