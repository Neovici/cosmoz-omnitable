export const resolveLocale = (locale?: string | null) =>
	locale || globalThis.document?.documentElement.lang || undefined;
