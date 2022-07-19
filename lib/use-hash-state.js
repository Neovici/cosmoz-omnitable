import { useCallback, useState } from 'haunted';
import { navigate } from '@neovici/cosmoz-router';
import { identity } from '@neovici/cosmoz-utils/function';
import { invoke } from './invoke';

const
	hashUrl = () => new URL(location.hash.replace(/^#!?/iu, '').replace('%23', '#'), location.origin),

	singleParse = (hashParam, codec = identity) => codec(new URLSearchParams(hashUrl().hash.replace('#', '')).get(hashParam)),
	multiParse = (hashParam, codec = identity) => {
		const params = Array.from(new URLSearchParams(hashUrl().hash.replace('#', '')).entries())
			.filter(([param]) => param.startsWith(hashParam))
			.map(([param, value]) => codec([param.replace(hashParam, ''), value]))
			.filter(([, value]) => value != null);

		return Object.fromEntries(params);
	},

	makeLinker = parameterize => (hashParam, value, codec = identity) => {
		const
			url = hashUrl(),
			searchParams = new URLSearchParams(url.hash.replace('#', ''));

		// TODO: make parameterize pure
		parameterize(hashParam, value, codec, searchParams);

		return '#!' + Object.assign(url, { hash: searchParams }).href.replace(location.origin, '');
	},
	isEmpty = v => v == null || v === '',
	singleLink = makeLinker((hashParam, value, codec, searchParams) =>
		!isEmpty(codec(value))
			? searchParams.set(hashParam, codec(value))
			: searchParams.delete(hashParam)),
	multiLink = makeLinker((hashParam, value, codec, searchParams) =>
		Object.entries(value)
			.map(codec)
			.forEach(([key, value]) => !isEmpty(value)
				? searchParams.set(hashParam + key, value)
				: searchParams.delete(hashParam + key)));

export const useHashState = (initial, param, { suffix = '', read, write, multi } = {}) => {
	const
		[link, parseHash] = multi ? [multiLink, multiParse] : [singleLink, singleParse],
		[state, _setState] = useState(() => param == null
			? initial
			: parseHash(param + suffix, read) ?? initial),

		setState = useCallback(state => _setState(oldState => {
			const newState = invoke(state, oldState);

			if (param != null) {
				navigate(link(param + suffix, newState, write), null, { notify: false });
			}

			return newState;
		}), [param, suffix, link, write]);

	return [state, setState];
};
