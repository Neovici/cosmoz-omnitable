import { renderHook } from '@neovici/testing';
import { expect, nextFrame } from '@open-wc/testing';
import { normalizeStore } from '../src/lib/settings/normalize.js';
import useSavedSettings from '../src/lib/settings/use-saved-settings.js';

const settingsId = 'saved-settings-test',
	key = 'omnitable-' + settingsId,
	saved = { groupOn: 'node', columns: [{ name: 'id', priority: 1 }] },
	noop = () => undefined,
	render = async (settings?: unknown) => {
		const hook = await renderHook(() =>
			useSavedSettings(settingsId, settings as never, noop)
		);
		await nextFrame();
		return hook;
	};

suite('useSavedSettings', () => {
	setup(() => localStorage.setItem(key, JSON.stringify(saved)));

	teardown(() => localStorage.removeItem(key));

	test('reads the stored settings', async () => {
		const { result } = await render();
		expect(result.current.savedSettings).to.deep.equal(saved);
	});

	test('can reset a stored layout with no pending changes', async () => {
		const { result } = await render();
		expect(result.current.hasChanges).to.equal(false);
		expect(result.current.canReset).to.equal(true);
	});

	test('reset clears the stored settings', async () => {
		const { result } = await render();
		await result.current.onReset();
		await nextFrame();

		expect(localStorage.getItem(key)).to.equal(null);
		expect(result.current.savedSettings).to.equal(null);
		expect(result.current.canReset).to.equal(false);
	});

	test('nothing to reset without stored settings or changes', async () => {
		localStorage.removeItem(key);
		const { result } = await render();
		expect(result.current.canReset).to.equal(false);
	});

	test('saving a sort change keeps the stored columns', () => {
		expect(
			normalizeStore({ sortOn: 'name' } as never, saved as never).columns
		).to.deep.equal(saved.columns);
	});
});
