import { useEffect } from 'haunted';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';

const initialized = Symbol('initialized useNotifyResize');
export const useNotifyResize = when => {
	const host = useHost();

	useEffect(() => {
		// skip dispatch on element initalization
		if (!host[initialized]) {
			host[initialized] = true;
			return;
		}

		host.dispatchEvent(new CustomEvent('iron-resize', {
			bubbles: true,
			composed: true
		}));
	}, [when, host]);
};
