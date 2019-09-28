const leftPad = (stro, leno, cho) => {
		let str = String(stro),
			i =	 -1;
		const
			ch = !cho && cho !== 0 ? ' ' : cho,
			len = leno - str.length;

		while (++i < len) {
			str = ch + str;
		}
		return str;
	},

	getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

	getRandomDateJSON = () => '2015-' + leftPad(getRandomInt(1, 12), 2, '0') + '-' + leftPad(getRandomInt(1, 28), 2, '0'),

	getRandomDate = () => {
	// return some equal dates to test grouping
		const i = getRandomInt(0, 20);
		if (i === 1) {
			return new Date(2015, 3, 2, 14, 26, 10, 299);
		}
		if (i === 2) {
			return new Date(2016, 4, 2, 10, 9, 10, 444);
		}
		if (i === 3) {
			return new Date(2016, 4, 2, 10, 9, 10, 443);
		}
		if (i === 4) {
			return new Date(2016, 4, 2, 10, 9, 10, 442);
		}
		return new Date(
			getRandomInt(2014, 2017),
			getRandomInt(1, 12),
			getRandomInt(1, 28),
			getRandomInt(0, 23),
			getRandomInt(0, 59),
			getRandomInt(0, 59),
			getRandomInt(0, 999)
		);
	};

/* eslint-disable-next-line max-lines-per-function */
export const generateTableDemoData = (min, max, maxRandomString) => {
	const groupsCount = getRandomInt(min, max),
		data = [],
		descriptions = [
			'Lorem ipsum dolor sit amet',
			'Nunc tristique',
			'Curabitur vestibulum',
			'Cras laoreet',
			'Himenaeos',
			'maximus diam purus at mauris'
		],
		currencies = [
			'SEK',
			'USD',
			'EUR',
			'AUD'
		];

	let n = 0;

	for (let i = 0; i < groupsCount; i += 1) {
		const group =	 'Group ' + i,
			itemsCount = i * 2	+ 1;
		for (let j = 0; j < itemsCount; j += 1) {
			const listValue = [],
				objectListValue = [],
				listValueCount = n % 10;
			for (let k = 0; k < listValueCount; k += 1) {
				listValue.push('Item ' + k);
				objectListValue.push({
					name: 'Item ' + k,
					value: 'item-value-' + k
				});
			}
			data.push({
				id: n,
				name: group + ' item ' + j,
				value: getRandomInt(0, 10000),
				bool: getRandomInt(0, 100) > 50,
				object: {
					value: getRandomInt(0, 10000),
					label: 'Random string ' + getRandomInt(1, maxRandomString)
				},
				sub: {
					subProp: descriptions[n % descriptions.length]
				},
				randomString: 'Random string ' + getRandomInt(1, maxRandomString),
				randomString2: 'Random string 2 ' + getRandomInt(1, maxRandomString),
				randomString3: 'Random string 3 ' + getRandomInt(1, maxRandomString),
				randomString4: 'Random string 4 ' + getRandomInt(1, maxRandomString),
				date: getRandomDate(),
				dateJSON: getRandomDateJSON(),
				amount: {
					amount: getRandomInt(10, 100),
					currency: currencies[n % currencies.length]
				},
				group,
				list: listValue,
				objectList: objectListValue
			});
			n += 1;
		}
	}
	return data;
};
