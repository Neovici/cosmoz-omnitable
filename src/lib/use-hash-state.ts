import { navigate } from '@neovici/cosmoz-router';
import { identity, invoke } from '@neovici/cosmoz-utils/function';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import {
	hashUrl,
	multiParse,
	singleParse,
} from '@neovici/cosmoz-utils/location';
import { useCallback, useEffect, useMemo, useState } from '@pionjs/pion';

type SingleCodec<T> = (value: string) => T;
type MultiCodec<T> = (entry: [string, string]) => [string, T];

type SingleHashStateOpts<T> = {
	suffix?: string;
	read?: SingleCodec<T>;
	write?: (value: T) => string;
	multi?: false;
};

type MultiHashStateOpts<T extends Record<string, unknown>> = {
	suffix?: string;
	read?: MultiCodec<T[keyof T]>;
	write?: (entry: [string, T[keyof T]]) => [string, string | undefined];
	multi: true;
};

const makeLinker =
		(
			parameterize: (
				hashParam: string,
				value: unknown,
				codec: (v: unknown) => string,
				searchParams: URLSearchParams,
			) => void,
		) =>
		(
			hashParam: string,
			value: unknown,
			codec: (v: unknown) => string = identity as (v: unknown) => string,
		) => {
			const url = hashUrl(),
				searchParams = new URLSearchParams(url.hash.replace('#', ''));

			parameterize(hashParam, value, codec, searchParams);

			return (
				'#!' +
				Object.assign(url, { hash: searchParams }).href.replace(
					location.origin,
					'',
				)
			);
		},
	isEmpty = (v: unknown): v is null | undefined | '' => v == null || v === '',
	singleLink = makeLinker((hashParam, value, codec, searchParams) =>
		!isEmpty(codec(value))
			? searchParams.set(hashParam, codec(value))
			: searchParams.delete(hashParam),
	),
	multiLink = makeLinker((hashParam, value, codec, searchParams) => {
		const originalEntries = Object.entries(value as Record<string, unknown>);
		const entries = originalEntries
			.map(codec)
			.filter(([, val]) => val !== undefined);

		// Preserve hash when values are not encodable (all are undefined)
		// Update hash when intent is to clear (empty object)
		if (entries.length === 0 && originalEntries.length > 0) {
			return;
		}

		const prefix = hashParam;
		Array.from(searchParams.keys())
			.filter((key) => key.startsWith(prefix))
			.forEach((key) => searchParams.delete(key));

		entries.forEach(([key, val]) =>
			!isEmpty(val)
				? searchParams.set(hashParam + key, val as string)
				: searchParams.delete(hashParam + key),
		);
	});

export function useHashState<T>(
	initial: T,
	param: string | null | undefined,
	opts?: SingleHashStateOpts<T>,
): [T, (value: T | ((prev: T) => T)) => void];

export function useHashState<T extends Record<string, unknown>>(
	initial: T,
	param: string | null | undefined,
	opts: MultiHashStateOpts<T>,
): [T, (value: T | ((prev: T) => T)) => void];

export function useHashState<T>(
	initial: T,
	param: string | null | undefined,
	{
		suffix = '',
		read,
		write,
		multi,
	}: SingleHashStateOpts<T> | MultiHashStateOpts<Record<string, unknown>> = {},
): [T, (value: T | ((prev: T) => T)) => void] {
	const link = multi ? multiLink : singleLink,
		meta = useMeta({
			param,
			suffix,
			link,
			write: (write ?? identity) as (v: unknown) => string,
		}),
		hashWasExplicit = useMemo(() => {
			if (param == null) return false;
			if (multi) {
				const result = multiParse(param + suffix);
				return Object.keys(result).length > 0;
			}
			return singleParse(param + suffix) !== undefined;
		}, []),
		[state, _setState] = useState(() => {
			if (param == null) return initial;
			if (multi) {
				const result = multiParse(
					param + suffix,
					read as MultiCodec<unknown> | undefined,
				);
				return Object.keys(result).length > 0 ? (result as T) : initial;
			}
			const result = singleParse(
				param + suffix,
				read as SingleCodec<T> | undefined,
			);
			return (result ?? initial) as T;
		}),
		setState = useCallback(
			(state: T | ((prev: T) => T)) =>
				_setState((oldState) => {
					const newState = invoke(state, oldState);

					if (meta.param != null) {
						navigate(
							meta.link(meta.param + meta.suffix, newState, meta.write),
							null,
							{
								notify: false,
							},
						);
					}

					return newState;
				}),
			[],
		);

	// Sync state with initial when:
	// - initial changes (e.g., savedSettings loaded async)
	// - AND hash was NOT explicitly provided in URL on mount
	useEffect(() => {
		if (meta.param == null || hashWasExplicit) return;

		if (initial != null) {
			setState(initial);
		}
	}, [
		hashWasExplicit,
		...(typeof initial === 'object' && initial != null
			? Object.values(initial)
			: [initial]),
	]);

	return [state, setState];
}
