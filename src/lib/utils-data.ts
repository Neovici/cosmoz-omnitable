import { get, set } from '@polymer/polymer/lib/utils/path';
import { columnSymbol } from './use-dom-columns';
import { GetPath, Items, Item, Column } from './types';

interface DefaultComputeSource {
	externalValues?: unknown[];
	values?: unknown[];
	valuePath?: GetPath;
}

export const valuesFrom = (data: Items, valuePath: GetPath) => {
	return Array.isArray(data)
		? data
				.map((item) => get(item, valuePath))
				.filter(
					(value, index, self) =>
						value != null && self.indexOf(value) === index,
				)
		: undefined;
};

export const defaultComputeSource = (
	{ externalValues, values, valuePath }: DefaultComputeSource,
	data: Items,
) => {
	if (externalValues) {
		return externalValues;
	}

	if (typeof values === 'function') {
		return values;
	}

	if (valuePath !== undefined) {
		return valuesFrom(data, valuePath);
	}

	return undefined;
};

export const onItemChange = (
	host: HTMLElement,
	column: Column,
	item: Item,
	value: unknown,
) => {
	const { valuePath } = column,
		oldValue = valuePath !== undefined ? get(item, valuePath) : undefined;

	if (value === oldValue) {
		return;
	}

	if (valuePath !== undefined) {
		set(item, valuePath, value);
	}

	const change = {
		item,
		valuePath,
		value,
		oldValue,
		column: column[columnSymbol],
	};

	host.dispatchEvent(
		new CustomEvent('column-item-changed', {
			bubbles: true,
			composed: true,
			detail: change,
		}),
	);
};
