import { NextRequest, NextResponse } from 'next/server';
import Students from '../students.json';
import { StudentI } from '@/types/student';
const studentsMap = new Map<string, StudentI>();
Students.map((st) => {
	studentsMap.set(st.id, st as StudentI);
});
export async function GET(_request: NextRequest, { params }: { params: Promise<{ studentId: string }> }) {
	const studentId = (await params).studentId;
	console.log(studentId);
	const student = studentsMap.get(studentId);
	return NextResponse.json(student || null);
}
