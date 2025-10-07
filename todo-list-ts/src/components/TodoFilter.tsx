import type { TodoFilterT } from '../types/todo';

export default function TodoFilter({ applyFilter }: { applyFilter: (filter: TodoFilterT) => void }) {
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					applyFilter('All');
				}}
			>
				All
			</button>
			<button
				type="button"
				onClick={() => {
					applyFilter('Done');
				}}
			>
				Done
			</button>
			<button
				type="button"
				onClick={() => {
					applyFilter('Current');
				}}
			>
				Current
			</button>
		</div>
	);
}
