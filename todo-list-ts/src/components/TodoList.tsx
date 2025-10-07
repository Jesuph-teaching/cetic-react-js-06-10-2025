import React from 'react';
import type { TodoI } from '../types/todo';
import TodoElement from './TodoElement';

export default function TodoList({
	todos,
	toggleDone,
	deleteTodo,
}: {
	todos: TodoI[];
	toggleDone: (id: number) => void;
	deleteTodo: (id: number) => void;
}) {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoElement key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
			))}
		</ul>
	);
}
