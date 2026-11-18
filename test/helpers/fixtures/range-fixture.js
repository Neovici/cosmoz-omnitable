/**
 * Range-column fixtures shared by the range-*.test.js suites.
 * Each omnitable carries a numeric + an amount column; the "all" fixture
 * adds the date, datetime and time columns the range suites bind their
 * header inputs to.
 */
import { html } from '@open-wc/testing';

export const rangeFixture = html`
	<cosmoz-omnitable id="omnitable" .resizeSpeedFactor=${1}>
		<cosmoz-omnitable-column-number
			title="Age"
			name="age"
			value-path="age"
			maximum-fraction-digits="2"
		>
		</cosmoz-omnitable-column-number>
		<cosmoz-omnitable-column-amount
			title="Amount"
			name="amount"
			value-path="amount"
			locale="en-US"
		>
		</cosmoz-omnitable-column-amount>
	</cosmoz-omnitable>
`;

export const rangeAllFixture = html`
	<cosmoz-omnitable id="omnitable" style="width: 800px" .resizeSpeedFactor=${1}>
		<cosmoz-omnitable-column-number title="Age" name="age" value-path="age">
		</cosmoz-omnitable-column-number>
		<cosmoz-omnitable-column-amount
			title="Amount"
			name="amount"
			value-path="amount"
		>
		</cosmoz-omnitable-column-amount>
		<cosmoz-omnitable-column-date
			title="Date"
			name="date"
			value-path="date"
			locale="en-US"
			editable
		>
		</cosmoz-omnitable-column-date>
		<cosmoz-omnitable-column-datetime
			title="Datetime"
			name="datetime"
			value-path="date"
			editable
		>
		</cosmoz-omnitable-column-datetime>
		<cosmoz-omnitable-column-time
			title="Time"
			name="time"
			value-path="time"
			editable
		>
		</cosmoz-omnitable-column-time>
	</cosmoz-omnitable>
`;
