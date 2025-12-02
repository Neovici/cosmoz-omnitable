interface FooterHost extends HTMLElement {
	csvFilename?: string;
	xlsxFilename?: string;
	xlsxSheetname?: string;
	topPlacement?: string;
	skipBottomBarAnimationOnMount?: boolean;
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
		skipBottomBarAnimationOnMount,
	} = host;

	return {
		csvFilename,
		xlsxFilename,
		xlsxSheetname,
		topPlacement,
		skipBottomBarAnimationOnMount,
		...rest,
	};
};
