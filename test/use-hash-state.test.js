import { expect, nextFrame } from '@open-wc/testing';
import { renderHook } from '@neovici/testing';
import { useHashState } from '../src/lib/use-hash-state.js';

suite('useHashState', () => {
	setup(() => {
		location.hash = '#!/';
	});

	teardown(() => {
		location.hash = '#!/';
	});

	test('uses initial value when no hash param exists', async () => {
		location.hash = '#!/';
		const { result } = await renderHook(() =>
			useHashState('name', 'test', { suffix: '-sortOn' }),
		);
		expect(result.current[0]).to.equal('name');
	});

	test('uses hash param value when it exists', async () => {
		location.hash = '#!/#test-sortOn=id';
		const { result } = await renderHook(() =>
			useHashState('name', 'test', { suffix: '-sortOn' }),
		);
		expect(result.current[0]).to.equal('id');
	});

	test('updates state when initial changes and hash was not explicit', async () => {
		location.hash = '#!/';
		const { result, rerender } = await renderHook(
			(initial) => useHashState(initial, 'test', { suffix: '-sortOn' }),
			{ initialProps: 'name' },
		);

		expect(result.current[0]).to.equal('name');

		await rerender('id');
		await nextFrame();

		expect(result.current[0]).to.equal('id');
		expect(location.hash).to.include('test-sortOn=id');
	});

	test('does not override state when hash was explicit', async () => {
		location.hash = '#!/#test-sortOn=date';
		const { result, rerender } = await renderHook(
			(initial) => useHashState(initial, 'test', { suffix: '-sortOn' }),
			{ initialProps: 'name' },
		);

		expect(result.current[0]).to.equal('date');

		await rerender('id');
		await nextFrame();

		// State should NOT change - explicit hash takes precedence
		expect(result.current[0]).to.equal('date');
		expect(location.hash).to.include('test-sortOn=date');
	});
});
