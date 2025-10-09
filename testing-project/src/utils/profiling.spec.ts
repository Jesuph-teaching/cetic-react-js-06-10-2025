import { describe, expect, it } from 'vitest';
import { DisplayProfile } from './profiling';

describe('DisplayProfile', () => {
	const firstName = 'Youcef';
	const lastName = 'Madadi';
	it('French display last name must be before first name', () => {
		const display = DisplayProfile(firstName, lastName, 'fr');
		expect(display).toContain(firstName);
		expect(display).toContain(lastName);

		expect(display).toEqual(`${lastName} ${firstName}`);
	});
	describe('First name and last name must not have a number', () => {
		const firstName = 'Y0ucef';
		it('firstName', () => {
			const display = DisplayProfile(firstName, lastName, 'fr');
			console.log(display, firstName);
			expect(display).not.toContain(firstName);
		});
		it('lastName', () => {
			const lastName = 'M4dadi';
			const display = DisplayProfile(firstName, lastName, 'fr');
			console.log(display, lastName);
			expect(display).not.toContain(lastName);
		});
	});
});
