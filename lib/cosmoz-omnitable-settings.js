import { html, component, useCallback, useMemo } from 'haunted';
import { usePosition } from '@neovici/cosmoz-autocomplete/lib/use-position';
import { useFocus } from '@neovici/cosmoz-autocomplete/lib/use-focus';
import { portal } from '@neovici/cosmoz-utils/lib/directives/portal';
import styles from '../cosmoz-omnitable-styles';

const useSettings = host => {
		usePosition({ anchor: host.anchor, host });
		const meta = useMemo(() => ({}), []);
		return {
			onDown: useCallback(e => {
				if (!e.target.closest('.sort')) {
					return;
				}
				meta.handle = e.currentTarget;
			}, [meta]),
			onDragStart: useCallback(e => {
				const { target } = e;
				if (!meta.handle?.contains(target)) {
					return e.preventDefault();
				}
				meta.handle = null;
				e.dataTransfer.effectAllowed = 'move';
				e.dataTransfer.setData('text/plain', target.dataset.index);
				setTimeout(() => target.classList.add('drag'), 0);
			}, [meta]),
			onDragEnd: useCallback(e => e.target.classList.remove('drag', 'dragover'), []),
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
				const index = e.currentTarget.dataset.index,
					prevIndex = e.dataTransfer.getData('text/plain'),
					newColumns = host.columns.slice();
				e.currentTarget.classList.remove('dragover');
				newColumns.splice(Math.max(index - 1, 0), 0, ...newColumns.splice(prevIndex, 1));
				host.columns = newColumns;
				e.preventDefault();
			}, [])
		};
	},

	SettingsUI = host => {
		const { onDragStart, onDragEnd, onDragEnter, onDragOver, onDragLeave, onDrop, onDown } = useSettings(host);
		return html`
		<style>
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
				border-radius: 8px;
				padding: 12px;
				display: flex;
				flex-direction: column;
				max-height: 40vh;
			}
			.list {
				overflow-y: auto;
				flex: 1;
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
			label {
				min-width: 160px;
			}
			${ styles }
		</style>
		<div class="list">
		${ host.columns.map((column, i) => html`<div class="item" data-index=${ i } @mousedown=${ onDown } draggable="true"
			@dragstart=${ onDragStart } @dragend=${ onDragEnd }
			@dragenter=${ onDragEnter } @dragover=${ onDragOver } @dragleave=${ onDragLeave }
			@drop=${ onDrop }
		>
			<button class="sort" mousedown="">
				<svg viewBox="0 0 24 24" width="24"><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"></path></svg>
			</button>
			<label>${ column.title }</label>
			<input class="checkbox" type="checkbox" checked>
		</div>`) }
		</div>`;

	},

	Settings = host => {
		const { columns } = host,
			{ active, onFocus, onReopen } = useFocus(host),
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
				.anchor:hover {
					background: #eee;
				}
			</style>
		    <button class="anchor" @focusin=${ onFocus } @focusout=${ onFocus } @click=${ onReopen }>
				<svg viewBox="0 0 24 24" width="24"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></svg>
			</button>
			${ active
		? portal(html`<cosmoz-omnitable-settings-ui
				tabindex="-1" .anchor=${ anchor } .columns=${ columns }
				@focusin=${ onFocus } @focusout=${ onFocus } data-dropdown>`)
		: [] }
		    `;
	};

customElements.define('cosmoz-omnitable-settings', component(Settings));
customElements.define('cosmoz-omnitable-settings-ui', component(SettingsUI));
