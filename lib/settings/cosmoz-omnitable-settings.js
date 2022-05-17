import { html, component } from 'haunted';
import { nothing } from 'lit-html';
import { isEmpty } from '@neovici/cosmoz-utils/lib/template';
import { defaultPlacement } from '@neovici/cosmoz-dropdown';
import sort from '../cosmoz-omnitable-sort';
import group from '../cosmoz-omnitable-group';
import style, { dropdown as dropdownStyle } from './style.css';
import useSettingsUi from './use-settings-ui';

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
			const indeterminate = collapsed?.includes(column.name),
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
				<button class="pull">
					<svg
						width="16"
						height="6"
						viewBox="0 0 16 6"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="16" height="2" />
						<rect y="4" width="16" height="2" />
					</svg>
				</button>
				<label
					class="title"
					?has-filter=${!isEmpty(filters[column.name]?.filter)}
					>${column.title}</label
				>
				${sort(column.name)}
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
		const { settings, settingsId, onSave, onReset, hasChanges, ...thru } =
			useSettingsUi(host);
		return [
			html`
				<style>
					${style}
				</style>
				<div class="list">${settings?.map(renderItem(thru))}</div>
			`,
			group(),
			settingsId &&
				html`<div class="buttons">
					<button
						class="button reset"
						@click=${onReset}
						?disabled=${!hasChanges}
					>
						Reset
					</button>
					<button class="button" @click=${onSave} ?disabled=${!hasChanges}>
						Save
					</button>
				</div>`,
		].filter(Boolean);
	},
	Settings = ({
		settings,
		onSettings,
		collapsed,
		settingsId,
		hasChanges,
		onSave,
		onReset,
		filters,
		badge,
	}) => html`
		<style>
			${dropdownStyle}
		</style>
		<cosmoz-dropdown
			.render=${() => html`<cosmoz-omnitable-settings-ui
				.settings=${settings}
				.onSettings=${onSettings}
				.collapsed=${collapsed}
				.settingsId=${settingsId}
				.hasChanges=${hasChanges}
				.onSave=${onSave}
				.onReset=${onReset}
				.filters=${filters}
			></cosmoz-omnitable-settings-ui>`}
			.placement=${placement}
		>
			<svg viewBox="0 0 24 24" width="24" slot="button" fill="currentColor">
				<path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>
			</svg>
			${badge ? html`<div class="badge" slot="button"></div>` : nothing}
		</cosmoz-dropdown>
	`;
customElements.define('cosmoz-omnitable-settings', component(Settings));
customElements.define('cosmoz-omnitable-settings-ui', component(SettingsUI));
