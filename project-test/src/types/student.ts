export interface StudentI {
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
