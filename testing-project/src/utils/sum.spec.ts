import { expect, it } from 'vitest';
import { Sum } from './sum';

it('Sum must add 3 and 4 to equal 7', () => {
	expect(Sum(3, 4), '3+4').toEqual(7);
});
