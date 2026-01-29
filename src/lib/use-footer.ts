import type { Host as BaseHost } from './types';

interface FooterHost extends BaseHost {
	csvFilename?: string;
	xlsxFilename?: string;
	xlsxSheetname?: string;
	topPlacement?: string;
}

interface UseFooterParams {
	host: FooterHost;
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
