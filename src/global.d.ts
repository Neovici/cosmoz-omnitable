declare module '@neovici/nullxlsx' {
	class NullXlsx {
		constructor(filename: string);
		addSheetFromData(data: unknown[][], sheetname: string): this;
		generate(): ArrayBuffer;
	}
	export { NullXlsx };
}

declare module 'file-saver-es' {
	export { saveAs } from 'file-saver';
}
