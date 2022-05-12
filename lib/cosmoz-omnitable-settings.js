import { html, component, useCallback } from 'haunted';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';
import { checkbox, sort as sortStyle } from '../cosmoz-omnitable-styles';
import { nothing } from 'lit-html';
import { isEmpty } from '@neovici/cosmoz-utils/lib/template';
import { defaultPlacement } from '@neovici/cosmoz-dropdown';
import sort from './cosmoz-omnitable-sort';
import group  from './cosmoz-omnitable-group';

const placement = ['bottom-right', ...defaultPlacement],
	settingsStyles = `
	:host {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		max-height: 42vh;
		outline: none;
		padding-top: 14px;
	}
	.list {
		overflow-y: auto;
		flex: 1;
		padding: 2px 14px;
		min-width: 232px;
	}
	.item {
		display: flex;
		align-items: center;
		background: white;
	}
	.item.drag {
		opacity: 0.6;
		pointer-events: none;
	}
	.item.dragover {
		box-shadow: 0 -2px 0 0 currentColor;
	}
	.pull {
		border: none;
		padding: 0;
		font-size: 0;
		vertical-align: bottom;
		outline: none;
		background: transparent;
		cursor: move;
		margin-right: 12px;
		color: #c4c4c4;
	}
	.title {
		flex: 1;
	}
	.title[has-filter] {
		font-weight: bold;
	}
	${checkbox}
	.checkbox {
		margin: 4px 0;
	}

	${sortStyle}
	.sort {
		order: initial;
		margin: 0;
		width: auto;
		padding: 8px;
	}

	.buttons {
		display: flex;
		gap: 8px;
		padding: 12px 14px;
		box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}
	.button {
		border: none;
		cursor: pointer;
		background: var(--cosmoz-button-bg-color, #101010);
		color: var(--cosmoz-button-color, #fff);
		font-family: inherit;
		font-size: 13px;
		font-weight: 600;
		line-height: 26px;
		border-radius: 4px;
		padding: 8px;
		flex: 1;
	}
	.button:not(.reset):hover {
		background: var(--cosmoz-button-hover-bg-color, #3A3F44);
	}
	.button[disabled] {
		opacity: 0.2;
		pointer-events: none;
	}
	.reset {
		background: transparent;
		color: inherit;
		text-decoration: underline;
	}
	.group {
		padding: 0px 14px;
		box-shadow: inset 0px 1px 0px rgb(0 0 0 / 15%)
	}
	`,
	parseIndex = (str) => {
		const idx = parseInt(str, 10);
		return isFinite(idx) ? idx : undefined;
	},
	// eslint-disable-next-line max-lines-per-function
	useSettings = (host) => {
		const { settings, onSettings } = host,
			meta = useMeta({ settings, onSettings });

		return {
			settings: host.settings,
			collapsed: host.collapsed,

			settingsId: host.settingsId,
			hasChanges: host.hasChanges,
			onSave: host.onSave,
			onReset: host.onReset,

			filters: host.filters,

			onDown: useCallback(
				(e) => {
					if (!e.target.closest('.pull')) {
						return;
					}

					meta.handle = e.currentTarget;
				},
				[meta]
			),

			onDragStart: useCallback(
				(e) => {
					const { target } = e,
						index = parseIndex(target.dataset.index);

					if (!meta.handle?.contains(target) || index == null) {
						return e.preventDefault();
					}

					meta.handle = null;
					e.dataTransfer.effectAllowed = 'move';
					e.dataTransfer.setData('omnitable/sort-index', index);
					setTimeout(() => target.classList.add('drag'), 0);
					target.addEventListener(
						'dragend',
						(e) => e.target.classList.remove('drag'),
						{ once: true }
					);
				},
				[meta]
			),

			onDragEnter: useCallback((e) => {
				const ctg = e.currentTarget;
				if (ctg !== e.target) {
					return;
				}

				e.preventDefault();
				e.dataTransfer.dropEffect = 'move';
				ctg.classList.add('dragover');
			}, []),

			onDragOver: useCallback((e) => {
				e.preventDefault();
				e.currentTarget.classList.add('dragover');
			}, []),

			onDragLeave: useCallback((e) => {
				const ctg = e.currentTarget;
				if (ctg.contains(e.relatedTarget)) {
					return;
				}

				ctg.classList.remove('dragover');
			}, []),

			onDrop: useCallback(
				(e) => {
					const from = parseIndex(
							e.dataTransfer.getData('omnitable/sort-index')
						),
						to = parseIndex(e.currentTarget.dataset.index),
						{ settings, onSettings } = meta;

					e.currentTarget.classList.remove('dragover');
					e.preventDefault();

					const newSettings = settings.slice();
					newSettings.splice(
						to + (from >= to ? 0 : -1),
						0,
						newSettings.splice(from, 1)[0]
					);
					onSettings(newSettings);
				},
				[meta]
			),

			onToggle: useCallback(
				(e) => {
					const checked = e.target.checked,
						idx = parseIndex(e.target.closest('[data-index]')?.dataset.index),
						{ settings, onSettings } = meta,
						newSettings = settings.slice(),
						setting = settings[idx],
						priority = e.target.windeterminate
							? settings.reduce((acc, s) => Math.max(acc, s.priority), 0) + 1
							: setting.priority;

					newSettings.splice(idx, 1, {
						...settings[idx],
						disabled: !checked,
						priority,
					});
					onSettings(newSettings);
				},
				[meta]
			),
		};
	},
	renderItem =
		// eslint-disable-next-line max-lines-per-function
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
			useSettings(host);
		return [
			html`
				<style>${settingsStyles}</style>
				<div class="list">${settings?.map(renderItem(thru))}</div>
			`,
			group(),
			settingsId && html`<div class="buttons">
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
			</div>`
		].filter(Boolean);
	},
	// eslint-disable-next-line max-lines-per-function
	Settings = ({
		anchor,
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
			:host {
				display: contents;
				color: var(--cosmoz-omnitable-settings-color, #101010);
				--cosmoz-dropdown-box-shadow: 0 3px 4px 0 rgb(0 0 0 / 14%),
					0 1px 8px 0 rgb(0 0 0 / 12%), 0 3px 3px -2px rgb(0 0 0 / 40%);
			}
			cosmoz-dropdown::part(button) {
				--cosmoz-dropdown-button-size: 24px;
				padding: 0;
				background: transparent;
				color: inherit;
			}
			cosmoz-dropdown::part(anchor) {
				display: inline-block;
			}
			.badge {
				position: absolute;
				top: 1px;
				right: -4px;
				background-color: var(
					--cosmoz-omnitable-checkbox-checked-color,
					var(--primary-color)
				);
				width: 8px;
				height: 8px;
				border-radius: 100%;
			}
		</style>
		<cosmoz-dropdown
			.render=${() => html`<cosmoz-omnitable-settings-ui
				.anchor=${anchor}
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
