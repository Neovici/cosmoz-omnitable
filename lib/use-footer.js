import { defaultPlacement } from '@neovici/cosmoz-dropdown';
const _defaultPlacement = ['top-right', ...defaultPlacement];

export const useFooter = ({ host, ...rest }) => {
	const {
		csvFilename = 'omnitable.csv',
		xlsxFilename = 'omnitable.xlsx',
		xlsxSheetname = 'Omnitable',
		topPlacement = _defaultPlacement,
	} = host;

	return {
		csvFilename,
		xlsxFilename,
		xlsxSheetname,
		topPlacement,
		...rest,
	};
};
