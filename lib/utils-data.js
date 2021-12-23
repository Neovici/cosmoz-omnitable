import { get, set } from '@polymer/polymer/lib/utils/path';
import { columnSymbol } from './use-dom-columns';

export const
	valuesFrom = (data, valuePath) => Array.isArray(data) ?
		data.map(item => get(item, valuePath))
			.filter((value, index, self) =>
				value != null && self.indexOf(value) === index
			)
		: undefined,

	defaultComputeSource = ({ externalValues, values, valuePath }, data) =>
		externalValues || typeof values === 'function'
			? values
			: valuesFrom(data, valuePath),

	onItemChange = (host, column, item, value) => {
		const
			{ valuePath } = column,
			oldValue = get(item, valuePath);

		if (value === oldValue) {
			return;
		}

		set(item, valuePath, value);

		const
			change = {
				item,
				valuePath,
				value,
				oldValue,
				column: column[columnSymbol]
			};

		host.dispatchEvent(new CustomEvent('column-item-changed', {
			bubbles: true,
			composed: true,
			detail: change
		}));
	};
