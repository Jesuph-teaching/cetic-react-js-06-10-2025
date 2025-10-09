import { afterEach, describe, expect, it } from 'vitest';
import {
	render,
	screen,
	cleanup,
	fireEvent,
} from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
	it("Counter contain 'Count is 0' on start", () => {
		render(<Counter />);
		expect(
			screen.getByRole('paragraph')
		).toHaveTextContent('Count is 0');
	});
	it('Counter increment on clicking', () => {
		render(<Counter />);
		const incrementBtn = screen.getByText('increment');
		expect(incrementBtn).toBeDefined();
		fireEvent.click(incrementBtn);
		fireEvent.click(incrementBtn);
		expect(
			screen.getByRole('paragraph')
		).toHaveTextContent('Count is 2');
	});
	afterEach(() => {
		cleanup();
	});
});
