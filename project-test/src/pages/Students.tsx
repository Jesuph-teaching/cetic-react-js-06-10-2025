import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
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
];

export default function Students() {
	const [data, setData] = useState(students);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table className="border">
			<thead className="border">
				{table.getHeaderGroups().map((headerGroup) => (
					<tr key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<th key={header.id}>
								{header.isPlaceholder
									? null
									: flexRender(header.column.columnDef.header, header.getContext())}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody className="border">
				{table.getRowModel().rows.map((row) => (
					<tr className="border" key={row.id}>
						{row.getVisibleCells().map((cell) => (
							<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
						))}
					</tr>
				))}
			</tbody>
			<tfoot>
				{table.getFooterGroups().map((footerGroup) => (
					<tr key={footerGroup.id}>
						{footerGroup.headers.map((header) => (
							<th key={header.id}>
								{header.isPlaceholder
									? null
									: flexRender(header.column.columnDef.footer, header.getContext())}
							</th>
						))}
					</tr>
				))}
			</tfoot>
		</table>
	);
}
