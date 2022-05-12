import { html } from 'haunted';
import { _ } from '@neovici/cosmoz-i18next';
import { without } from '@neovici/cosmoz-utils/lib/array';

const direction = (descending) =>
		`(${descending ? _('Descending') : _('Ascending')})`,
	values = (columns, type, value) => {
		return (
			columns
				?.filter?.((c) => c[type])
				/* eslint-disable-next-line no-bitwise */
				.sort((a, b) => ((b === value) >> 0) - ((a === value) >> 0))
		);
	},
	onSelect = (newVal, { value, onChange, onText, limit }) => {
		onText('');
		onChange([...without(newVal)(value), newVal].slice(-limit));
	},
	onChange = ({ setGroupOn, setGroupOnDescending }) => {
		return (val, close) => {
			const value = (val[0] ?? val)?.name ?? '',
				setter = setGroupOn,
				directionSetter = setGroupOnDescending;

			setter((oldValue) => {
				if (value) {
					directionSetter((oldDirection) =>
						value === oldValue ? !oldDirection : false
					);
				} else {
					directionSetter(null);
				}
				return value;
			});

			value && close(); /* eslint-disable-line no-unused-expressions */
		};
	};

export default () => html`
	<sort-and-group-consumer
		style="display: contents"
		.render=${({
			columns,
			groupOnDescending,
			groupOnColumn,
			setGroupOn,
			setGroupOnDescending,
		} = {}) => html` <div class="group">
			<cosmoz-autocomplete
				.label="${_('Group on')} ${direction(groupOnDescending)}"
				.placeholder=${_('No grouping')}
				.source=${values(columns, 'groupOn', groupOnColumn)}
				.value=${groupOnColumn}
				limit="1"
				text-property="title"
				always-float-label
				.itemHeight=${48}
				.itemLimit=${8}
				.onChange=${onChange({ setGroupOn, setGroupOnDescending })}
				.onSelect=${onSelect}
				default-index="-1"
				show-single
			>
				<svg
					slot="suffix"
					viewBox="0 0 24 24"
					preserveAspectRatio="xMidYMid meet"
					focusable="false"
					width="24"
					fill="currentColor"
				>
					<path d="M7 10l5 5 5-5z"></path>
				</svg>
			</cosmoz-autocomplete>
		</div>`}
	>
	</sort-and-group-consumer>
`;
