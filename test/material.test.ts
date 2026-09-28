import { assert, fixture, html, waitUntil } from "@open-wc/testing";
import "../src/cosmoz-omnitable.js";
import { ignoreResizeObserverLoopErrors } from "./helpers/utils";

ignoreResizeObserverLoopErrors(setup, teardown);

suite("optional table material", () => {
	test("supports composite backgrounds without blurring the table content", async () => {
		const el = await fixture<HTMLElement>(
				html`<cosmoz-omnitable></cosmoz-omnitable>`
			),
			content = el.shadowRoot!.querySelector(".tableContent")!,
			header = el.shadowRoot!.querySelector(".header")!,
			original = getComputedStyle(content).background;
		el.style.setProperty(
			"--cz-material-background",
			"linear-gradient(white, transparent) navy"
		);
		el.style.setProperty(
			"--cz-material-sheen",
			"linear-gradient(white, transparent)"
		);
		el.style.setProperty("--cz-material-blur", "blur(12px)");
		assert.include(
			getComputedStyle(content).backgroundImage,
			"linear-gradient"
		);
		assert.include(getComputedStyle(header).backgroundImage, "linear-gradient");
		assert.equal(getComputedStyle(content).backdropFilter, "none");
		el.style.removeProperty("--cz-material-background");
		el.style.removeProperty("--cz-material-sheen");
		assert.equal(getComputedStyle(content).background, original);
		assert.equal(getComputedStyle(header).backgroundImage, "none");
	});

	test("mini rows are separate cards with visible selection and focus", async () => {
		const el = await fixture<HTMLElement>(html`
			<cosmoz-omnitable
				style="width:360px;
					height:400px;
					--cz-spacing:4px;
					--cz-radius-lg:12px;
					--cz-color-bg-primary:white;
					--cz-color-bg-secondary:whitesmoke;
					--cz-color-bg-primary-hover:lightgray;
					--cz-color-border-brand:blue;
					--cz-color-focus-ring:blue;
					--cz-color-border-secondary:gray;"
				.data=${[{ name: "Alpha" }, { name: "Beta" }]}
			>
				<cosmoz-omnitable-column name="name" mini="1"></cosmoz-omnitable-column>
			</cosmoz-omnitable>
		`);
		await waitUntil(
			() =>
				el.hasAttribute("mini") && !!el.shadowRoot!.querySelector(".itemRow")
		);
		const row = el.shadowRoot!.querySelector<HTMLElement>(".itemRow")!,
			content = el.shadowRoot!.querySelector(".tableContent")!,
			checkbox = row.querySelector<HTMLInputElement>(".checkbox")!;
		assert.notEqual(
			getComputedStyle(row).backgroundColor,
			getComputedStyle(content).backgroundColor
		);
		assert.notEqual(getComputedStyle(row).borderRadius, "0px");
		assert.notEqual(getComputedStyle(row).marginInlineStart, "0px");
		assert.equal(getComputedStyle(row).backdropFilter, "none");
		const border = getComputedStyle(row).borderColor;
		checkbox.click();
		await waitUntil(() => row.hasAttribute("selected"));
		assert.notEqual(getComputedStyle(row).borderColor, border);
		checkbox.focus();
		assert.equal(getComputedStyle(row).outlineStyle, "solid");
	});
});
