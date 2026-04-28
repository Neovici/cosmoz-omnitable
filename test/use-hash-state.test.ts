import { renderHook } from '@neovici/testing';
import { expect, nextFrame } from '@open-wc/testing';
import { useHashState } from '../src/lib/use-hash-state.js';

suite('useHashState', () => {
	setup(() => {
		location.hash = '#!/';
	});

	teardown(() => {
		location.hash = '#!/';
	});

	suite('single mode', () => {
		test('uses initial value when no hash param exists', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState('name', 'test', { suffix: '-sortOn' }),
			);
			const [value, setValue]: [
				string,
				(v: string | ((p: string) => string)) => void,
			] = result.current;
			expect(value).to.equal('name');
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
				(initial: string) =>
					useHashState(initial, 'test', { suffix: '-sortOn' }),
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
				(initial: string) =>
					useHashState(initial, 'test', { suffix: '-sortOn' }),
				{ initialProps: 'name' },
			);

			expect(result.current[0]).to.equal('date');

			await rerender('id');
			await nextFrame();

			expect(result.current[0]).to.equal('date');
			expect(location.hash).to.include('test-sortOn=date');
		});

		test('setState updates hash', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState('initial', 'test', { suffix: '-suffix' }),
			);
			await result.current[1]('value');
			expect(location.hash).to.equal('#!/#test-suffix=value');
		});

		test('setState with function receives previous state', async () => {
			location.hash = '#!/#test-suffix=old';
			const { result } = await renderHook(() =>
				useHashState('initial', 'test', { suffix: '-suffix' }),
			);
			expect(result.current[0]).to.equal('old');
			await result.current[1]((prev: string) => prev + 'new');
			expect(result.current[0]).to.equal('oldnew');
			expect(location.hash).to.equal('#!/#test-suffix=oldnew');
		});

		test('param: null - does not interact with hash', async () => {
			location.hash = '#!/existing=hash';
			const { result } = await renderHook(() =>
				useHashState('initial', null, { suffix: '-suffix' }),
			);
			expect(result.current[0]).to.equal('initial');
			await result.current[1]('newValue');
			expect(location.hash).to.equal('#!/existing=hash');
		});

		test('param: undefined - same as null', async () => {
			location.hash = '#!/existing=hash';
			const { result } = await renderHook(() =>
				useHashState('initial', undefined, { suffix: '-suffix' }),
			);
			expect(result.current[0]).to.equal('initial');
			await result.current[1]('newValue');
			expect(location.hash).to.equal('#!/existing=hash');
		});

		test('with read codec - parses value to number', async () => {
			location.hash = '#!/#test-suffix=42';
			const read = (v: string): number => parseInt(v, 10);
			const { result } = await renderHook(() =>
				useHashState<number>(0, 'test', { suffix: '-suffix', read }),
			);
			const value: number = result.current[0];
			expect(value).to.equal(42);
			expect(typeof value).to.equal('number');
		});

		test('with write codec - encodes value', async () => {
			location.hash = '#!/';
			const write = (v: string): string => v.toUpperCase();
			const { result } = await renderHook(() =>
				useHashState('initial', 'test', { suffix: '-suffix', write }),
			);
			await result.current[1]('value');
			expect(location.hash).to.equal('#!/#test-suffix=VALUE');
		});

		test('read codec returning undefined uses initial', async () => {
			location.hash = '#!/#test-suffix=value';
			const read = (): undefined => undefined;
			const { result } = await renderHook(() =>
				useHashState('initial', 'test', { suffix: '-suffix', read }),
			);
			expect(result.current[0]).to.equal('initial');
		});

		test('read codec returning null - syncs to initial due to hashWasExplicit', async () => {
			location.hash = '#!/#test-suffix=value';
			const read = (): null => null;
			const { result } = await renderHook(() =>
				useHashState('initial', 'test', { suffix: '-suffix', read }),
			);
			expect(result.current[0]).to.equal('initial');
		});

		test('multiple values for same param returns array', async () => {
			location.hash = '#!/#test-suffix=a&test-suffix=b';
			const { result } = await renderHook(() =>
				useHashState<string[]>([], 'test', { suffix: '-suffix' }),
			);
			expect(result.current[0]).to.deep.equal(['a', 'b']);
			expect(Array.isArray(result.current[0])).to.be.true;
		});

		test('empty string value', async () => {
			location.hash = '#!/#test-suffix=';
			const { result } = await renderHook(() =>
				useHashState('initial', 'test', { suffix: '-suffix' }),
			);
			expect(result.current[0]).to.equal('');
		});

		test('special characters are URL decoded', async () => {
			location.hash = '#!/#test-suffix=hello%20world%3F';
			const { result } = await renderHook(() =>
				useHashState('initial', 'test', { suffix: '-suffix' }),
			);
			expect(result.current[0]).to.equal('hello world?');
		});

		test('null initial value', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState<string | null>(null, 'test', { suffix: '-suffix' }),
			);
			expect(result.current[0]).to.equal(null);
		});

		test('concurrent setState calls - last write wins', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState('initial', 'test', { suffix: '-suffix' }),
			);
			result.current[1]('first');
			result.current[1]('second');
			result.current[1]('third');
			await nextFrame();
			expect(location.hash).to.equal('#!/#test-suffix=third');
		});
	});

	suite('multi mode', () => {
		test('uses initial value when no hash params exist', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({});
		});

		test('uses hash params when they exist', async () => {
			location.hash = '#!/#test-foo=a&test-bar=b';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({ foo: 'a', bar: 'b' });
		});

		test('setState updates multiple hash params', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			await result.current[1]({ foo: 'a', bar: 'b' });
			expect(location.hash).to.include('test-foo=a');
			expect(location.hash).to.include('test-bar=b');
		});

		test('setState with function receives previous state', async () => {
			location.hash = '#!/#test-foo=a';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			await result.current[1]((prev: Record<string, string>) => ({
				...prev,
				bar: 'b',
			}));
			expect(result.current[0]).to.deep.equal({ foo: 'a', bar: 'b' });
			expect(location.hash).to.include('test-foo=a');
			expect(location.hash).to.include('test-bar=b');
		});

		test('does not override when hash was explicit', async () => {
			location.hash = '#!/#test-foo=explicit';
			const { result, rerender } = await renderHook(
				(initial: Record<string, string>) =>
					useHashState(initial, 'test', { suffix: '-', multi: true }),
				{ initialProps: {} },
			);
			expect(result.current[0]).to.deep.equal({ foo: 'explicit' });
			await rerender({ new: 'ignored' });
			await nextFrame();
			expect(result.current[0]).to.deep.equal({ foo: 'explicit' });
		});

		test('BUG: syncs with initial when hash was not explicit', async () => {
			location.hash = '#!/';
			const { result, rerender } = await renderHook(
				(initial: Record<string, string>) =>
					useHashState(initial, 'test', { suffix: '-', multi: true }),
				{ initialProps: {} },
			);
			expect(result.current[0]).to.deep.equal({});
			await rerender({ foo: 'synced' });
			await nextFrame();
			expect(result.current[0]).to.deep.equal({});
		});

		test('with read codec - parses values', async () => {
			location.hash = '#!/#test-foo=42&test-bar=100';
			const read = ([key, value]: [string, string]): [string, number] => [
				key,
				parseInt(value, 10),
			];
			const { result } = await renderHook(() =>
				useHashState<Record<string, number>>({}, 'test', {
					suffix: '-',
					multi: true,
					read,
				}),
			);
			expect(result.current[0]).to.deep.equal({ foo: 42, bar: 100 });
		});

		test('with write codec - encodes values', async () => {
			location.hash = '#!/';
			const write = ([key, value]: [string, string]): [string, string] => [
				key,
				value.toUpperCase(),
			];
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
					write,
				}),
			);
			await result.current[1]({ foo: 'bar' });
			expect(location.hash).to.equal('#!/#test-foo=BAR');
		});

		test('delete param via empty string value', async () => {
			location.hash = '#!/#test-foo=a';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({ foo: 'a' });
			await result.current[1]({ foo: '' });
			expect(location.hash).to.equal('#!/');
		});

		test('delete param via setState removing key - BUG: does not delete', async () => {
			location.hash = '#!/#test-foo=a';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({ foo: 'a' });
			await result.current[1]({});
			expect(location.hash).to.equal('#!/#test-foo=a');
		});

		test('delete param via write returning empty string', async () => {
			location.hash = '#!/#test-foo=a';
			const write = ([key, value]: [string, string]): [
				string,
				string | undefined,
			] => [key, value === 'delete-me' ? '' : value];
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
					write,
				}),
			);
			await result.current[1]({ foo: 'delete-me' });
			expect(location.hash).to.equal('#!/');
		});

		test('delete param via write returning null value', async () => {
			location.hash = '#!/#test-foo=a';
			const write = ([key, value]: [string, string]): [
				string,
				string | undefined,
			] => [key, value === 'delete-me' ? null! : value];
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
					write,
				}),
			);
			await result.current[1]({ foo: 'delete-me' });
			expect(location.hash).to.equal('#!/');
		});

		test('special characters are URL decoded', async () => {
			location.hash = '#!/#test-foo=hello%20world';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({ foo: 'hello world' });
		});

		test('empty object initial', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({});
		});

		test('param: null - does not interact with hash', async () => {
			location.hash = '#!/existing=hash';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, null, {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({});
			await result.current[1]({ foo: 'bar' });
			expect(location.hash).to.equal('#!/existing=hash');
		});

		test('null initial value - gets empty object from multiParse', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string> | null>(null, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({});
		});

		test('concurrent setState calls - BUG: accumulates hash params', async () => {
			location.hash = '#!/';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			result.current[1]({ foo: 'first' });
			result.current[1]({ bar: 'second' });
			result.current[1]({ baz: 'third' });
			await nextFrame();
			expect(location.hash).to.include('test-foo=first');
			expect(location.hash).to.include('test-bar=second');
			expect(location.hash).to.include('test-baz=third');
		});

		test('mixing add and delete in single setState - BUG: old params stay', async () => {
			location.hash = '#!/#test-foo=a&test-bar=b';
			const { result } = await renderHook(() =>
				useHashState<Record<string, string>>({}, 'test', {
					suffix: '-',
					multi: true,
				}),
			);
			expect(result.current[0]).to.deep.equal({ foo: 'a', bar: 'b' });
			await result.current[1]({ foo: '', baz: 'c' });
			expect(location.hash).to.include('test-baz=c');
			expect(location.hash).to.not.include('test-foo');
			expect(location.hash).to.include('test-bar=b');
		});
	});
});
