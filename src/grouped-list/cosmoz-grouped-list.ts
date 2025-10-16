import {
	renderCosmozGroupedList,
	useCosmozGroupedList,
} from './use-cosmoz-grouped-list';
import { component } from '@pionjs/pion';
import type { UseCosmozGroupedListHost } from './use-cosmoz-grouped-list';

const CosmozGroupedList = (host: UseCosmozGroupedListHost) =>
	renderCosmozGroupedList(useCosmozGroupedList(host));

customElements.define(
	'cosmoz-grouped-list',
	component(CosmozGroupedList, { useShadowDOM: false }),
);
