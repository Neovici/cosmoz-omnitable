export type LimitFunction = (a: number, b: number) => number | undefined;

export type Currency = 'SEK' | 'USD' | 'EUR' | 'AUD';

export interface AmountValue {
	amount: string | number;
	currency: Currency | string;
}

export type ValuePath = 'amount' | 'min' | 'max' | 'value';

export interface Value {
	valuePath?: ValuePath;
	locale?: string;
	minimumFractionDigits?: number | null;
	maximumFractionDigits?: number | null;
}

export interface AmountObj {
	amount: AmountValue;
	bool: boolean;
	date: Date;
	dateJSON: string;
	group: string;
	id: number;
	list: string[];
	name: string;
	object: {
		label: string;
		value: number;
	};
	objectList: Array<{
		name: string;
		value: number;
	}>;
	randomString: string;
	randomString2: string;
	randomString3: string;
	randomString4: string;
	sub: {
		subProp: string;
	};
	value: number;
}

export interface FilterObj {
	min: AmountValue;
	max: AmountValue;
}

export type Item = FilterObj | AmountObj;
