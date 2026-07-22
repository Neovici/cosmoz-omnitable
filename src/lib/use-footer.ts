import type { Item } from './types';
import { type TAll } from './utils';

interface FooterHost extends HTMLElement {
	csvFilename?: string;
	xlsxFilename?: string;
	xlsxSheetname?: string;
	topPlacement?: string;
	allItemsCount?: number;
}

interface UseFooterParams {
	host: FooterHost;
	selectedItems: Item[] | TAll;
	allSelected: boolean;
	setSelectedItems: (
		items: Item[] | TAll | ((prev: Item[] | TAll) => Item[] | TAll),
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
