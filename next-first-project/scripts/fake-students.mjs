import { faker } from '@faker-js/faker';

import { writeFile } from 'node:fs/promises';

const students = [];
const numberOfStudents = 20;

for (let i = 0; i < numberOfStudents; i++) {
	const student = {
		id: Math.random().toString(16).split('.')[1],
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		birthdate: faker.date.between({
			from: '2014-01-01',
			to: '2019-12-31',
		}),
		gender: faker.person.sex(),
	};
	students.push(student);
}

console.log(students);
await writeFile('./students.json', JSON.stringify(students));
