import { z } from 'zod';
/* export interface StudentI {
	id: number;
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
} */

export const studentSchema = z.object({
	id: z.number(),
	firstName: z.string().min(3).max(20),
	lastName: z.string().min(3).max(20),
	level: z.enum(['1AP', '2AP', '3AP', '4AP', '5AP']),
	birthdate: z.date(),
	gender: z.enum(['Male', 'Female']),
	parents: z.object({
		firstName: z.string().min(3).max(20),
		lastName: z.string().min(3).max(20),
		birthdate: z.date(),
		gender: z.enum(['Male', 'Female']),
		phone: z.string().regex(/\d{8,}/),
	}),
});

export type StudentI = z.infer<typeof studentSchema>;
