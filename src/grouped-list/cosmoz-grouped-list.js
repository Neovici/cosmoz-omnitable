import {
	renderCosmozGroupedList,
	useCosmozGroupedList,
} from './use-cosmoz-grouped-list';
import { component } from '@pionjs/pion';

const CosmozGroupedList = (host) =>
	renderCosmozGroupedList(useCosmozGroupedList(host));

customElements.define(
	'cosmoz-grouped-list',
	component(CosmozGroupedList, { useShadowDOM: false }),
);
