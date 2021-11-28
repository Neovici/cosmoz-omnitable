export const
	memoize = fn => {
		let
			lastArg,
			lastResult;
		return function (arg) {
			if (lastArg === arg) {
				return lastResult;
			}

			const result = fn(arg);
			lastResult = result;
			lastArg = arg;
			return result;
		};
	},

	memooize = fn => {
		let
			lastArg1,
			lastArg2,
			lastResult;
		return function (arg1, arg2) {
			if (lastArg1 === arg1 && lastArg2 === arg2) {
				return lastResult;
			}

			const result = fn(arg1, arg2);
			lastResult = result;
			lastArg1 = arg1;
			lastArg2 = arg2;
			return result;
		};
	},

	memoooize = fn => {
		let
			lastArg1,
			lastArg2,
			lastArg3,
			lastResult;
		return function (arg1, arg2, arg3) {
			if (lastArg1 === arg1 && lastArg2 === arg2 && lastArg3 === arg3) {
				return lastResult;
			}

			const result = fn(arg1, arg2, arg3);
			lastResult = result;
			lastArg1 = arg1;
			lastArg2 = arg2;
			lastArg3 = arg3;
			return result;
		};
	};
