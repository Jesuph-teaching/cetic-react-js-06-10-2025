export interface TodoI {
	id: number;
	task: string;
	done: boolean;
	createdAt: Date;
	updatedAt: Date;
}
export type TodoFilterT = 'All' | 'Done' | 'Current';
