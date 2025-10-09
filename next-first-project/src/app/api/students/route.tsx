import { NextResponse } from 'next/server';
import students from './students.json';
export function GET() {
	return NextResponse.json(students);
}
