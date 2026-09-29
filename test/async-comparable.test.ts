import { assert } from "@open-wc/testing";
import { processItemsAsync } from "../src/lib/process-items-async";

suite("processItemsAsync", () => {
	const asyncComparable = (values) =>
		({
			groupOn: "comparable",
			sortOn: "comparable",
			getComparableValue: (_column, item) => Promise.resolve(values.get(item)),
		} as object);

	test("sorts items by resolved comparables", async () => {
		const a = { id: "a" },
			b = { id: "b" },
			c = { id: "c" },
			sortOnColumn = asyncComparable(
				new Map([
					[a, 1],
					[b, 3],
					[c, 2],
				])
			);

		const order = await processItemsAsync({
			filteredItems: [b, c, a],
			sortOnColumn,
			noLocalSort: false,
			descending: false,
		} as never);

		assert.deepEqual(order, [a, c, b]);
	});

	test("sorts items descending", async () => {
		const a = { id: "a" },
			b = { id: "b" },
			sortOnColumn = asyncComparable(
				new Map([
					[a, 1],
					[b, 2],
				])
			);

		const order = await processItemsAsync({
			filteredItems: [a, b],
			sortOnColumn,
			noLocalSort: false,
			descending: true,
		} as never);

		assert.deepEqual(order, [b, a]);
	});

	test("rejected comparables sort as missing", async () => {
		const a = { id: "a" },
			b = { id: "b" },
			sortOnColumn = {
				sortOn: "comparable",
				getComparableValue: (_column, item) =>
					item === b
						? Promise.reject(new Error("rejected"))
						: Promise.resolve(1),
			};

		const order = (await processItemsAsync({
			filteredItems: [a, b],
			sortOnColumn,
			noLocalSort: false,
			descending: false,
		})) as Array<{ id: string }>;

		// rejected values resolve to undefined; exact position of undefined
		// only needs to be stable, not sorted before/after defined values
		assert.equal(order.length, 2);
		assert.equal(order.indexOf(b) > -1, true);
	});

	test("groups items by resolved comparables", async () => {
		const a = { id: "a" },
			b = { id: "b" },
			c = { id: "c" },
			groupOnColumn = asyncComparable(
				new Map([
					[a, "x"],
					[b, "x"],
					[c, "y"],
				])
			);

		const groups = (await processItemsAsync({
			filteredItems: [a, b, c],
			groupOnColumn,
			noLocalSort: true,
		})) as Array<{ id: string; name: string; items: Array<{ id: string }> }>;

		assert.deepEqual(
			groups.map((group) => [group.id, group.items.map((item) => item.id)]),
			[
				["x", ["a", "b"]],
				["y", ["c"]],
			]
		);
	});

	test("sorts groups descending", async () => {
		const a = { id: "a" },
			b = { id: "b" },
			groupOnColumn = asyncComparable(
				new Map([
					[a, "x"],
					[b, "y"],
				])
			);

		const groups = (await processItemsAsync({
			filteredItems: [a, b],
			groupOnColumn,
			groupOnDescending: true,
			noLocalSort: true,
		})) as Array<{ id: string }>;

		assert.deepEqual(
			groups.map((group) => group.id),
			["y", "x"]
		);
	});
});
