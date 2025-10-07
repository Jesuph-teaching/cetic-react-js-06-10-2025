import type { TodoI } from '../types/todo';

export default function TodoElement({
	todo,
	toggleDone,
	deleteTodo,
}: {
	todo: TodoI;
	toggleDone: (id: number) => void;
	deleteTodo: (id: number) => void;
}) {
	return (
		<li
			style={{
				textDecoration: todo.done ? 'line-through' : 'none',
			}}
			onClick={() => {
				// toggle done for this todo
				toggleDone(todo.id);
			}}
		>
			{todo.task}
			<button
				onClick={(e) => {
					e.stopPropagation();
					deleteTodo(todo.id);
				}}
			>
				delete
			</button>
		</li>
	);
}
