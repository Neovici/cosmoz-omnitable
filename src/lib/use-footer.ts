import type { Item } from './types';
import { type TSelection } from './utils';

interface FooterHost extends HTMLElement {
	csvFilename?: string;
	xlsxFilename?: string;
	xlsxSheetname?: string;
	topPlacement?: string;
	allItemsCount?: number;
}

interface UseFooterParams {
	host: FooterHost;
	selectedItems: TSelection<Item>;
	allSelected: boolean;
	setSelectedItems: (
		items: TSelection<Item> | ((prev: TSelection<Item>) => TSelection<Item>),
	) => void;
	enableSelectAll: boolean;
	allItemsCount?: number;
	[key: string]: unknown;
}

export const useFooter = ({ host, ...rest }: UseFooterParams) => {
	const {
		csvFilename = 'omnitable.csv',
		xlsxFilename = 'omnitable.xlsx',
		xlsxSheetname = 'Omnitable',
		topPlacement = 'top-end',
	} = host;

	return {
		csvFilename,
		xlsxFilename,
		xlsxSheetname,
		topPlacement,
		...rest,
	};
};
