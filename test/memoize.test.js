import { memoize, memooize, memoooize } from '../lib/memoize';
import { assert } from '@open-wc/testing';

suite('memoize', () => {
	test('memoized function acts as original', () => {
		const complex = a => a * 10,
			complexMemoized = memoize(complex);

		assert.equal(complex(1), complexMemoized(1));
		assert.equal(complex(2), complexMemoized(2));
		assert.equal(complexMemoized(2), 20);
	});

	test('memoizes a function', () => {
		let count = 0;
		const complex = () => count++,
			complexMemoized = memoize(complex);

		complexMemoized(1);
		assert.equal(count, 1);
		complexMemoized(2);
		assert.equal(count, 2);
		complexMemoized(2);
		complexMemoized(2);
		complexMemoized(2);
		complexMemoized(2);
		complexMemoized(2);
		complexMemoized(2);
		assert.equal(count, 2);
		complexMemoized(1);
		assert.equal(count, 3);
	});
});

suite('memooize', () => {
	test('memoized function acts as original', () => {
		const complex = (a, b) => a * b,
			complexMemoized = memooize(complex);

		assert.equal(complex(1, 1), complexMemoized(1, 1));
		assert.equal(complex(2, 3), complexMemoized(2, 3));
		assert.equal(complexMemoized(2, 5), 10);
	});

	test('memoizes a function with two arguments', () => {
		let count = 0;
		const complex = () => count++,
			complexMemoized = memooize(complex);

		complexMemoized(1, 2);
		assert.equal(count, 1);
		complexMemoized(1, 3);
		assert.equal(count, 2);
		complexMemoized(1, 3);
		complexMemoized(1, 3);
		assert.equal(count, 2);
		complexMemoized(1, 4);
		assert.equal(count, 3);
		complexMemoized(2, 4);
		assert.equal(count, 4);
		complexMemoized(3, 5);
		assert.equal(count, 5);
		complexMemoized(3, 5);
		assert.equal(count, 5);
		complexMemoized();
		assert.equal(count, 6);
	});
});

suite('memoooize', () => {
	test('memoized function acts as original', () => {
		const complex = (a, b, c) => a + b + c,
			complexMemoized = memoooize(complex);

		assert.equal(complex(1, 1, 1), complexMemoized(1, 1, 1));
		assert.equal(complex(2, 3, 5), complexMemoized(2, 3, 5));
		assert.equal(complexMemoized(2, 5, 8), 15);
	});

	test('memoizes a function with three arguments', () => {
		let count = 0;
		const complex = () => count++,
			complexMemoized = memoooize(complex);

		complexMemoized(1, 2, 3);
		assert.equal(count, 1);
		complexMemoized(1, 3, 7);
		assert.equal(count, 2);
		complexMemoized(1, 3, 7);
		complexMemoized(1, 3, 7);
		assert.equal(count, 2);
		complexMemoized(1, 4, 7);
		assert.equal(count, 3);
		complexMemoized(2, 4, 6);
		assert.equal(count, 4);
		complexMemoized(3, 5, 7);
		assert.equal(count, 5);
		complexMemoized(3, 5, 7);
		assert.equal(count, 5);
		complexMemoized();
		assert.equal(count, 6);
	});
});
