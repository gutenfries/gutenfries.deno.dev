import { parseColors } from '@/rust/background_generator/typescript/parseColors.ts';
import { assertEquals } from 'testing/asserts.ts';

Deno.test({
	name: '`parseColors()` unit test',
	permissions: { read: true },
	fn: () => {
		const exampleInput = 'blue-500;red-500;green-500;';
		const expected = ['blue-500', 'red-500', 'green-500', ''];

		assertEquals(parseColors(exampleInput), expected);
	},
});
