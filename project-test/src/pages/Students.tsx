import { DataTable } from '@/components/DataTable';
import StudentForm from '@/components/StudentForm';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import type { StudentI } from '@/types/student';
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';

const students: StudentI[] = [
	{
		id: '1',
		firstName: 'John',
		lastName: 'Doe',
		level: '1AP',
		birthdate: new Date('2010-01-01'),
		gender: 'Male',
		parents: {
			firstName: 'Jane',
			lastName: 'Doe',
			birthdate: new Date('1980-05-15'),
			gender: 'Female',
			phone: '1234567890',
		},
	},
	{
		id: '2',
		firstName: 'Alice',
		lastName: 'Smith',
		level: '2AP',
		birthdate: new Date('2011-02-02'),
		gender: 'Female',
		parents: {
			firstName: 'Bob',
			lastName: 'Smith',
			birthdate: new Date('1978-08-20'),
			gender: 'Male',
			phone: '0987654321',
		},
	},
	{
		id: '3',
		firstName: 'Yasmine',
		lastName: 'Benkhelifa',
		level: '3AP',
		birthdate: new Date('2012-03-10'),
		gender: 'Female',
		parents: {
			firstName: 'Samir',
			lastName: 'Benkhelifa',
			birthdate: new Date('1982-07-22'),
			gender: 'Male',
			phone: '0551234567',
		},
	},
	{
		id: '4',
		firstName: 'Walid',
		lastName: 'Boualem',
		level: '4AP',
		birthdate: new Date('2010-11-05'),
		gender: 'Male',
		parents: {
			firstName: 'Nadia',
			lastName: 'Boualem',
			birthdate: new Date('1985-03-18'),
			gender: 'Female',
			phone: '0669876543',
		},
	},
	{
		id: '5',
		firstName: 'Imane',
		lastName: 'Ait Ahmed',
		level: '2AP',
		birthdate: new Date('2011-06-21'),
		gender: 'Female',
		parents: {
			firstName: 'Karim',
			lastName: 'Ait Ahmed',
			birthdate: new Date('1979-12-30'),
			gender: 'Male',
			phone: '0771122334',
		},
	},
	{
		id: '6',
		firstName: 'Rachid',
		lastName: 'Ziani',
		level: '5AP',
		birthdate: new Date('2009-09-14'),
		gender: 'Male',
		parents: {
			firstName: 'Fatima',
			lastName: 'Ziani',
			birthdate: new Date('1983-04-25'),
			gender: 'Female',
			phone: '0543344556',
		},
	},
	{
		id: '7',
		firstName: 'Sara',
		lastName: 'Brahimi',
		level: '1AP',
		birthdate: new Date('2013-12-03'),
		gender: 'Female',
		parents: {
			firstName: 'Mounir',
			lastName: 'Brahimi',
			birthdate: new Date('1981-08-09'),
			gender: 'Male',
			phone: '0656677889',
		},
	},
	{
		id: '8',
		firstName: 'Adel',
		lastName: 'Cherif',
		level: '3AP',
		birthdate: new Date('2012-05-27'),
		gender: 'Male',
		parents: {
			firstName: 'Lila',
			lastName: 'Cherif',
			birthdate: new Date('1986-02-14'),
			gender: 'Female',
			phone: '0569988776',
		},
	},
	{
		id: '9',
		firstName: 'Nour',
		lastName: 'Saadi',
		level: '4AP',
		birthdate: new Date('2010-07-19'),
		gender: 'Female',
		parents: {
			firstName: 'Abdelkader',
			lastName: 'Saadi',
			birthdate: new Date('1977-11-11'),
			gender: 'Male',
			phone: '0774455667',
		},
	},
	{
		id: '10',
		firstName: 'Khaled',
		lastName: 'Mebarki',
		level: '5AP',
		birthdate: new Date('2009-04-08'),
		gender: 'Male',
		parents: {
			firstName: 'Samia',
			lastName: 'Mebarki',
			birthdate: new Date('1984-09-23'),
			gender: 'Female',
			phone: '0557788990',
		},
	},
	{
		id: '11',
		firstName: 'Lina',
		lastName: 'Boussaid',
		level: '2AP',
		birthdate: new Date('2011-10-30'),
		gender: 'Female',
		parents: {
			firstName: 'Yacine',
			lastName: 'Boussaid',
			birthdate: new Date('1980-06-17'),
			gender: 'Male',
			phone: '0662233445',
		},
	},
	{
		id: '12',
		firstName: 'Omar',
		lastName: 'Guedjati',
		level: '1AP',
		birthdate: new Date('2013-01-25'),
		gender: 'Male',
		parents: {
			firstName: 'Amina',
			lastName: 'Guedjati',
			birthdate: new Date('1987-05-29'),
			gender: 'Female',
			phone: '0545566778',
		},
	},
];

const columnHelper = createColumnHelper<StudentI>();

const columns = [
	columnHelper.accessor('id', {
		header: 'Full name',
		cell(ctx) {
			const { id, firstName, lastName } = ctx.row.original;
			return (
				<div className="">
					<div>
						{firstName} {lastName}
					</div>
					<div className="text-neutral-400">{id}</div>
				</div>
			);
		},
	}),
	columnHelper.accessor('gender', {
		header: 'Gender',
		cell(ctx) {
			return (
				<span className={'rounded-lg p-2 ' + (ctx.getValue() === 'Male' ? 'bg-cyan-200' : 'bg-pink-200')}>
					{ctx.getValue()}
				</span>
			);
		},
	}),
	columnHelper.accessor('birthdate', {
		header: 'Birthdate',
		cell(ctx) {
			return ctx.getValue().toLocaleString('FR-dz', {
				day: 'numeric',
				year: 'numeric',
				month: 'long',
			});
		},
	}),
	columnHelper.group({
		header: 'Parent',

		columns: [
			columnHelper.accessor('parents.firstName', { header: 'First Name' }),
			columnHelper.accessor('parents.lastName', { header: 'Last Name' }),
			columnHelper.accessor('parents.phone', { header: 'Phone number' }),
		],
	}),
] as ColumnDef<StudentI>[];

export default function Students() {
	const [data, setData] = useState(students);

	return (
		<div className="p-4 flex flex-col gap-2 ">
			<Dialog>
				<DialogTrigger asChild>
					<Button className="ml-auto">Add new student</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Add a new student</DialogTitle>
						<DialogDescription>
							Fill in the form below to add a new student to the list. Please provide all required
							information including the student's name, birthdate, gender, level, and parent details.
						</DialogDescription>
					</DialogHeader>
					<StudentForm
						onStudentSubmitting={(student) => {
							setData([...data, student]);
						}}
					/>
				</DialogContent>
			</Dialog>
			<DataTable columns={columns} data={data} />
		</div>
	);
}
