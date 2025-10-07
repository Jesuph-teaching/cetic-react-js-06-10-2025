import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import type { TodoFilterT, TodoI } from './types/todo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
	const [todos, setTodos] = useState<TodoI[]>([]);
	const [filter, setFilter] = useState<TodoFilterT>('All');
	const filteredTodos =
		filter === 'All'
			? todos
			: todos.filter((todo) => (todo.done && filter === 'Done') || (!todo.done && filter === 'Current'));
	return (
		<>
			<h1>TODO</h1>
			<h3>{filter}</h3>
			<Input
				addToTodo={(task) => {
					setTodos([
						{
							id: Date.now(),
							task: task,
							createdAt: new Date(),
							updatedAt: new Date(),
							done: false,
						},
						...todos,
					]);
				}}
			/>
			<TodoList
				todos={filteredTodos}
				toggleDone={(id) => {
					const newTodos = [...todos]; // create a copy
					for (let i = 0; i < newTodos.length; i++) {
						if (newTodos[i].id === id) {
							newTodos[i].done = !newTodos[i].done;
						}
					}
					setTodos(newTodos);
				}}
				deleteTodo={(id) => {
					const newTodos = [...todos]; // create a copy
					const indexOfTod = newTodos.findIndex((todo) => todo.id === id);
					console.log(indexOfTod);
					if (indexOfTod === -1) return;
					newTodos.splice(indexOfTod, 1);
					console.log(newTodos);
					setTodos(newTodos);
				}}
			/>
			<TodoFilter applyFilter={setFilter} />
		</>
	);
}

export default App;
