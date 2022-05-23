import { html, component } from 'haunted';
import { nothing } from 'lit-html';
import { _ } from '@neovici/cosmoz-i18next';
import { isEmpty } from '@neovici/cosmoz-utils/lib/template';
import { defaultPlacement } from '@neovici/cosmoz-dropdown';
import '@neovici/cosmoz-collapse';
import sort from './cosmoz-omnitable-sort';
import group from './cosmoz-omnitable-group';
import style, { dropdown as dropdownStyle } from './style.css';
import useSettingsUi from './use-settings-ui';
import { close, pull, arrow } from '../icons';

/* eslint-disable max-lines-per-function */
const placement = ['bottom-right', ...defaultPlacement],
	renderItem =
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
				<label
					class="title"
					?has-filter=${!isEmpty(filters[column.name]?.filter)}
					>${column.title}</label
				>
				<input
					class="checkbox"
					type="checkbox"
					.checked=${checked}
					@click=${onToggle}
					.indeterminate=${indeterminate}
					.windeterminate=${indeterminate}
				/>
			</div>`;
		},
	SettingsUI = (host) => {
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
		return [
			html`
				<style>
					${style}
				</style>
				<div class="headline">
					${_('Sort and filter')}
					<button class="close" @click=${(e) => e.currentTarget?.blur()}>
						${close}
					</button>
				</div>
				<div class="contents">
					<div
						class="heading"
						?data-opened=${opened.columns}
						@click=${() => setOpened((c) => ({ ...c, columns: !c.columns }))}
					>
						${_('Columns')} ${arrow}
					</div>
					<cosmoz-collapse ?opened=${opened.columns}>
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
					>
						${_('Group on')} ${arrow}
					</div>
					<cosmoz-collapse ?opened=${opened.group}>
						${group()}
					</cosmoz-collapse>
				</div>
			`,
			settingsId &&
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
		].filter(Boolean);
	},
	Settings = ({ config }) => html`
		<style>
			${dropdownStyle}
		</style>
		<cosmoz-dropdown
			.render=${() => html`<cosmoz-omnitable-settings-ui
				.config=${config}
			></cosmoz-omnitable-settings-ui>`}
			.placement=${placement}
		>
			<svg viewBox="0 0 24 24" width="24" slot="button" fill="currentColor">
				<path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>
			</svg>
			${config?.badge ? html`<div class="badge" slot="button"></div>` : nothing}
		</cosmoz-dropdown>
	`;
customElements.define('cosmoz-omnitable-settings', component(Settings));
customElements.define('cosmoz-omnitable-settings-ui', component(SettingsUI));
