import { html, component } from '@pionjs/pion';
import { _ } from '@neovici/cosmoz-i18next';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { defaultPlacement } from '@neovici/cosmoz-dropdown';
import '@neovici/cosmoz-collapse';
import { sort, group } from './cosmoz-omnitable-sort-group';
import style, { dropdown as dropdownStyle } from './style.css';
import useSettingsUi from './use-settings-ui';
import { close, pull, arrow } from '../icons';
import { when } from 'lit-html/directives/when.js';
import { sheet } from '@neovici/cosmoz-utils';

/* eslint-disable max-lines-per-function */
const placement = ['bottom-right', ...defaultPlacement];

const renderItem =
	({
		onDragStart,
		onDragEnter,
		onDragOver,
		onDragLeave,
		onDrop,
		onDown,
		onToggle,
		collapsed,
		filters,
	}) =>
	(column, i) => {
		const indeterminate = !!collapsed?.find((c) => c.name === column.name),
			checked = !column.disabled && !indeterminate;
		return html` <div
			class="item"
			data-index=${i}
			@mousedown=${onDown}
			draggable="true"
			@dragstart=${onDragStart}
			@dragenter=${onDragEnter}
			@dragover=${onDragOver}
			@dragleave=${onDragLeave}
			@drop=${onDrop}
		>
			<button class="pull">${pull}</button>
			<label class="title" ?has-filter=${!isEmpty(filters[column.name]?.filter)}
				>${column.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${checked}
				@click=${onToggle}
				.indeterminate=${indeterminate}
			/>
		</div>`;
	};

const SettingsUI = (host) => {
	const {
		settings,
		settingsId,
		onSave,
		onReset,
		hasChanges,
		opened,
		setOpened,
		...thru
	} = useSettingsUi(host);
	return html` <div class="headline">
			${_('Sort and filter')}
			<button
				class="close"
				@click=${(e) => {
					const tg = e.currentTarget;
					tg?.focus();
					tg?.blur();
				}}
			>
				${close}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${opened.columns}
				@click=${() => setOpened((c) => ({ ...c, columns: !c.columns }))}
				part="columns columns-heading"
			>
				${_('Columns')} ${arrow}
			</div>
			<cosmoz-collapse
				?opened="${opened.columns}"
				part="columns columns-content"
			>
				<div class="list">${settings.columns?.map(renderItem(thru))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${opened.sort}
				@click=${() => setOpened((c) => ({ ...c, sort: !c.sort }))}
			>
				${_('Sort on')} ${arrow}
			</div>
			<cosmoz-collapse ?opened=${opened.sort}> ${sort()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${opened.group}
				@click=${() => setOpened((c) => ({ ...c, group: !c.group }))}
				part="groups groups-heading"
			>
				${_('Group on')} ${arrow}
			</div>
			<cosmoz-collapse ?opened=${opened.group} part="groups groups-heading"
				>${group()}</cosmoz-collapse
			>
		</div>

		${when(
			settingsId,
			() =>
				html`<div class="buttons">
					<button
						class="button reset"
						@click=${onReset}
						?disabled=${!hasChanges}
					>
						${_('Reset')}
					</button>
					<button class="button" @click=${onSave} ?disabled=${!hasChanges}>
						${_('Save')}
					</button>
				</div>`,
		)}`;
};

customElements.define(
	'cosmoz-omnitable-settings-ui',
	component(SettingsUI, { styleSheets: [sheet(style)] }),
);

const Settings = ({ config, newLayout }) => html`
	<cosmoz-dropdown
		.placement="${newLayout ? ['bottom-left', ...defaultPlacement] : placement}"
	>
		${when(
			newLayout,
			() => html`<div class="headerDots" slot="button">...</div>`,
			() =>
				html` <svg
					viewBox="0 0 24 24"
					width="24"
					slot="button"
					fill="currentColor"
				>
					<circle cx="10" cy="18" r="2"></circle>
					<circle cx="10" cy="12" r="2"></circle>
					<circle cx="10" cy="6" r="2"></circle>
				</svg>`,
		)}
		${when(config?.badge, () => html`<div class="badge" slot="button"></div>`)}
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${config}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;

customElements.define(
	'cosmoz-omnitable-settings',
	component(Settings, { styleSheets: [sheet(dropdownStyle)] }),
);
