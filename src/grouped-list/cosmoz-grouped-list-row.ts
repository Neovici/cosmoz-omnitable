import { render } from 'lit-html';
import type { Item } from '../lib/types';

customElements.define(
	'cosmoz-grouped-list-row',
	class Element extends HTMLElement {
		private _item?: Item;
		private _index?: number;
		private _renderFn?: (item: Item, index: number) => unknown;
		private _renderPending = false;

		get item() {
			return this._item;
		}

		set item(item: Item | undefined) {
			this._item = item;
			this._render();
		}

		get index() {
			return this._index;
		}

		set index(index: number | undefined) {
			this._index = index;
			this._render();
		}

		get renderFn() {
			return this._renderFn;
		}

		set renderFn(
			renderFn: ((item: Item, index: number) => unknown) | undefined,
		) {
			this._renderFn = renderFn;
			this._render();
		}

		_render() {
			if (this._renderPending) return;
			this._renderPending = true;
			queueMicrotask(() => {
				this._renderPending = false;
				const { _item: item, _index: index, _renderFn: renderFn } = this;
				if (item == null || index == null || renderFn == null) return;
				render(renderFn(item, index), this);
			});
		}
	},
);
