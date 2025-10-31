export const useFooter = ({ host, ...rest }) => {
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
