import { html, component, useCallback } from 'haunted';
import { usePosition } from '@neovici/cosmoz-autocomplete/lib/use-position';
import { useFocus } from '@neovici/cosmoz-autocomplete/lib/use-focus';
import { portal } from '@neovici/cosmoz-utils/lib/directives/portal';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';
import { checkbox } from '../cosmoz-omnitable-styles';
const settingsStyles = `
	:host {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		font-family: var(--paper-font-subhead_-_font-family, initial);
		background: #fff;
		min-width: 72px;
		box-shadow: 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%), 0 3px 3px -2px rgb(0 0 0 / 40%);
		box-sizing: border-box;
		border-radius: 5px;
		padding: 12px;
		display: flex;
		flex-direction: column;
		max-height: 42vh;
		outline: none;
	}
	.list {
		overflow-y: auto;
		flex: 1;
		padding-top: 2px;
		min-width: 225px;
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
		box-shadow: 0 -2px 0 0 black;
	}
	.sort {
		border: none;
		padding: 0;
		font-size: 0;
		vertical-align: bottom;
		outline: none;
		background: transparent;
		cursor: move;
		margin-right: 12px;
	}
	.title {
		flex: 1;
	}
	${ checkbox }
	`,

	parseIndex = str => {
		const idx = parseInt(str, 10);
		return isFinite(idx) ? idx : undefined;
	},

	preventDefault = e => e.preventDefault(),

	// eslint-disable-next-line max-lines-per-function
	useSettings = host => {
		usePosition({ anchor: host.anchor, host });

		const
			{ settings, onSettings } = host,
			meta = useMeta({ settings, onSettings });

		return {
			settings: host.settings,
			collapsed: host.collapsed,

			onDown: useCallback(e => {
				if (!e.target.closest('.sort')) {
					return;
				}

				meta.handle = e.currentTarget;
			}, [meta]),

			onDragStart: useCallback(e => {
				const { target } = e,
					index = parseIndex(target.dataset.index);

				if (!meta.handle?.contains(target) || index == null) {
					return e.preventDefault();
				}

				meta.handle = null;
				e.dataTransfer.effectAllowed = 'move';
				e.dataTransfer.setData('omnitable/sort-index', index);
				setTimeout(() => target.classList.add('drag'), 0);
				target.addEventListener('dragend', e => e.target.classList.remove('drag'), { once: true });
			}, [meta]),

			onDragEnter: useCallback(e => {
				const ctg = e.currentTarget;
				if (ctg !== e.target) {
					return;
				}

				e.preventDefault();
				e.dataTransfer.dropEffect = 'move';
				ctg.classList.add('dragover');
			}, []),

			onDragOver: useCallback(e => {
				e.preventDefault();
				e.currentTarget.classList.add('dragover');
			}, []),

			onDragLeave: useCallback(e => {
				const ctg = e.currentTarget;
				if (ctg.contains(e.relatedTarget)) {
					return;
				}

				ctg.classList.remove('dragover');
			}, []),

			onDrop: useCallback(e => {
				const from = parseIndex(e.dataTransfer.getData('omnitable/sort-index')),
					to = parseIndex(e.currentTarget.dataset.index),
					{ settings, onSettings } = meta;

				e.currentTarget.classList.remove('dragover');
				e.preventDefault();

				const newSettings = settings.slice();
				newSettings.splice(to + (from >= to ? 0 : -1), 0, newSettings.splice(from, 1)[0]);
				onSettings(newSettings);
			}, [meta]),

			onToggle: useCallback(e => {
				const checked = e.target.checked,
					idx = parseIndex(e.target.closest('[data-index]')?.dataset.index),
					{ settings, onSettings } = meta,
					newSettings = settings.slice(),
					setting = settings[idx],
					priority = e.target.windeterminate ? settings.reduce((acc, s) => Math.max(acc, s.priority), 0) + 1 : setting.priority;

				newSettings.splice(idx, 1, { ...settings[idx], disabled: !checked, priority });
				onSettings(newSettings);
			}, [meta])
		};
	},

	renderItem = ({ onDragStart, onDragEnter, onDragOver, onDragLeave, onDrop, onDown, onToggle, collapsed }) => (column, i) => {
		const indeterminate = collapsed?.includes(column.name),
			checked = !column.disabled && !indeterminate;
		return html`
		<div class="item" data-index=${ i } @mousedown=${ onDown } draggable="true"
			@dragstart=${ onDragStart } @dragenter=${ onDragEnter } @dragover=${ onDragOver } @dragleave=${ onDragLeave }
			@drop=${ onDrop }
		>
			<button class="sort" mousedown="">
				<svg viewBox="0 0 24 24" width="24"><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"></path></svg>
			</button>
			<label class="title">${ column.title }</label>
			<input class="checkbox" type="checkbox" .checked=${ checked } @click=${ onToggle }
				.indeterminate=${ indeterminate } .windeterminate=${ indeterminate }
			>
		</div>`;
	},

	SettingsUI = host => {
		const { settings, ...thru } = useSettings(host);
		return html`
		<style>${ settingsStyles }</style>
		<div class="list"> ${ settings.map(renderItem(thru)) }</div>`;

	},

	Settings = host => {
		const { settings, onSettings, collapsed } = host,
			{ active, onFocus, onToggle } = useFocus(host),
			anchor = useCallback(() => host.shadowRoot.querySelector('.anchor'), []);

		return html`
			<style>
				.anchor {
					border: none;
					padding: 0;
					font-size: 0;
					vertical-align: bottom;
					margin-bottom: 10px;
					outline: none;
					background: transparent;
					cursor: pointer;
				}
				.anchor * { pointer-events: none; }
				.anchor:hover {
					background: #eee;
				}
			</style>
		    <button class="anchor" @focus=${ onFocus } @blur=${ onFocus } @click=${ onToggle } @mousedown=${ preventDefault }>
				<svg viewBox="0 0 24 24" width="24"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></svg>
			</button>
			${ active
		? portal(html`<cosmoz-omnitable-settings-ui
				tabindex="-1" .anchor=${ anchor } .settings=${ settings } .onSettings=${ onSettings } .collapsed=${ collapsed }
				@focusin=${ onFocus } @focusout=${ onFocus } data-dropdown>`)
		: [] }
		    `;
	};

customElements.define('cosmoz-omnitable-settings', component(Settings));
customElements.define('cosmoz-omnitable-settings-ui', component(SettingsUI));
