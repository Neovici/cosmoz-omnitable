import { useCallback, useEffect, useMemo, useState } from '@pionjs/pion';
import { navigate } from '@neovici/cosmoz-router';
import { identity, invoke } from '@neovici/cosmoz-utils/function';
import {
	hashUrl,
	multiParse,
	singleParse,
} from '@neovici/cosmoz-utils/location';

const makeLinker =
		(parameterize) =>
		(hashParam, value, codec = identity) => {
			const url = hashUrl(),
				searchParams = new URLSearchParams(url.hash.replace('#', ''));

			// TODO: make parameterize pure
			parameterize(hashParam, value, codec, searchParams);

			return (
				'#!' +
				Object.assign(url, { hash: searchParams }).href.replace(
					location.origin,
					'',
				)
			);
		},
	isEmpty = (v) => v == null || v === '',
	singleLink = makeLinker((hashParam, value, codec, searchParams) =>
		!isEmpty(codec(value))
			? searchParams.set(hashParam, codec(value))
			: searchParams.delete(hashParam),
	),
	multiLink = makeLinker((hashParam, value, codec, searchParams) =>
		Object.entries(value)
			.map(codec)
			.forEach(([key, value]) =>
				!isEmpty(value)
					? searchParams.set(hashParam + key, value)
					: searchParams.delete(hashParam + key),
			),
	);

export const useHashState = (
	initial,
	param,
	{ suffix = '', read, write, multi } = {},
) => {
	const [link, parseHash] = multi
			? [multiLink, multiParse]
			: [singleLink, singleParse],
		// Track if hash param was explicitly in URL on mount
		hashWasExplicit = useMemo(
			() => param != null && parseHash(param + suffix, read) != null,
			[],
		),
		[state, _setState] = useState(() =>
			param == null ? initial : (parseHash(param + suffix, read) ?? initial),
		),
		setState = useCallback(
			(state) =>
				_setState((oldState) => {
					const newState = invoke(state, oldState);

					if (param != null) {
						navigate(link(param + suffix, newState, write), null, {
							notify: false,
						});
					}

					return newState;
				}),
			[param, suffix, link, write],
		);

	// Sync state with initial when:
	// - initial changes (e.g., savedSettings loaded async)
	// - AND hash was NOT explicitly provided in URL on mount
	useEffect(() => {
		if (param == null) return;
		if (hashWasExplicit) return;

		if (initial != null) {
			setState(initial);
		}
	}, [initial, param, hashWasExplicit, setState]);

	return [state, setState];
};
