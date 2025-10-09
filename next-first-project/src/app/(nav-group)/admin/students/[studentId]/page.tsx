import StudentInformation from '@/components/StudentInfor';
import React from 'react';

export default async function page({ params }: { params: Promise<{ studentId: string }> }) {
	const studentId = (await params).studentId;

	return <StudentInformation studentId={studentId} />;
}
