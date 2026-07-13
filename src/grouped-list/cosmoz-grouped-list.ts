import { component } from '@pionjs/pion';
import {
	renderCosmozGroupedList,
	useCosmozGroupedList,
	type UseCosmozGroupedListHost,
} from './use-cosmoz-grouped-list';

const CosmozGroupedList = (host: UseCosmozGroupedListHost) =>
	renderCosmozGroupedList(useCosmozGroupedList(host));

customElements.define(
	'cosmoz-grouped-list',
	component(CosmozGroupedList, { useShadowDOM: false }),
);
