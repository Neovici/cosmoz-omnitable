import { useFastLayout } from './use-fast-layout';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = host => ({
	...useFastLayout(host)
});
