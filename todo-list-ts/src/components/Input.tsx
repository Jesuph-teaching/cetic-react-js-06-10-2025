import { useState } from 'react';

export default function Input({ addToTodo }: { addToTodo: (task: string) => void }) {
	const [task, setTask] = useState('');
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				// TODO: add to the list here logic
				addToTodo(task);
				setTask('');
			}}
		>
			<input
				type="text"
				placeholder="Enter your tasks here"
				value={task}
				onChange={(e) => {
					setTask(e.target.value);
				}}
			/>
			<button type="submit">add</button>
		</form>
	);
}
