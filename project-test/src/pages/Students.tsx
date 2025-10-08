import { DataTable } from '@/components/DataTable';
import { Button } from '@/components/ui/button';
import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
interface StudentI {
	id: string;
	firstName: string;
	lastName: string;
	level: '1AP' | '2AP' | '3AP' | '4AP' | '5AP';
	birthdate: Date;
	gender: 'Male' | 'Female';
	parents: {
		firstName: string;
		lastName: string;
		birthdate: Date;
		gender: 'Male' | 'Female';
		phone: string;
	};
}

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
		<div className="p-4">
			<Button>Add new student</Button>
			<DataTable columns={columns} data={data} />
		</div>
	);
}
