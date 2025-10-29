import {
	renderCosmozGroupedList,
	useCosmozGroupedList,
	type UseCosmozGroupedListHost,
} from './use-cosmoz-grouped-list';
import { component } from '@pionjs/pion';

const CosmozGroupedList = (host: UseCosmozGroupedListHost) =>
	renderCosmozGroupedList(useCosmozGroupedList(host));

customElements.define(
	'cosmoz-grouped-list',
	component(CosmozGroupedList, { useShadowDOM: false }),
);
