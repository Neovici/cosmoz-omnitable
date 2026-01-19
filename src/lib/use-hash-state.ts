import { navigate } from '@neovici/cosmoz-router';
import { identity, invoke } from '@neovici/cosmoz-utils/function';
import {
	hashUrl,
	multiParse,
	singleParse,
} from '@neovici/cosmoz-utils/location';
import { useCallback, useState } from '@pionjs/pion';

type Codec = (value: unknown) => string;
type Reader<T> = (value: string) => T;
type Parser = <T>(param: string, reader?: Reader<T>) => T | null;

type Parameterize = (
	hashParam: string,
	value: unknown,
	codec: Codec,
	searchParams: URLSearchParams,
) => void;

interface UseHashStateOptions<T> {
	suffix?: string;
	read?: Reader<T>;
	write?: Codec;
	multi?: boolean;
}

const makeLinker =
	(parameterize: Parameterize) =>
	(hashParam: string, value: unknown, codec?: Codec): string => {
		const url = hashUrl(),
			searchParams = new URLSearchParams(url.hash.replace('#', ''));

		// TODO: make parameterize pure
		parameterize(hashParam, value, codec ?? (identity as Codec), searchParams);

		return (
			'#!' +
			Object.assign(url, { hash: searchParams }).href.replace(
				location.origin,
				'',
			)
		);
	};

const isEmpty = (v: unknown): boolean => v == null || v === '';

const singleLink = makeLinker((hashParam, value, codec, searchParams) =>
	!isEmpty(codec(value))
		? searchParams.set(hashParam, codec(value))
		: searchParams.delete(hashParam),
);

const multiLink = makeLinker((hashParam, value, codec, searchParams) =>
	Object.entries(value as Record<string, unknown>)
		.map((entry) => codec(entry))
		.forEach(([key, value]) =>
			!isEmpty(value)
				? searchParams.set(hashParam + key, value as string)
				: searchParams.delete(hashParam + key),
		),
);

export const useHashState = <T>(
	initial: T,
	param?: string,
	{ suffix = '', read, write, multi }: UseHashStateOptions<T> = {},
): [T, (state: T | ((prevState: T) => T)) => void] => {
	const [link, parseHash] = multi
			? [multiLink, multiParse as Parser]
			: [singleLink, singleParse as Parser],
		[state, _setState] = useState<T>(() =>
			param == null ? initial : (parseHash<T>(param + suffix, read) ?? initial),
		),
		setState = useCallback(
			(state: T | ((prevState: T) => T)) =>
				_setState((oldState) => {
					const newState = invoke(state, oldState) as T;

					if (param != null) {
						navigate(link(param + suffix, newState, write), null, {
							notify: false,
						});
					}

					return newState;
				}),
			[param, suffix, link, write],
		);

	return [state, setState];
};
