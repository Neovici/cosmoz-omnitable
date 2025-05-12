import { render } from 'lit-html';

customElements.define(
	'cosmoz-grouped-list-row',
	class Element extends HTMLElement {
		get item() {
			return this._item;
		}

		set item(item) {
			this._item = item;
			this._render();
		}

		get index() {
			return this._index;
		}

		set index(index) {
			this._index = index;
			this._render();
		}

		get renderFn() {
			return this._renderFn;
		}

		set renderFn(renderFn) {
			this._renderFn = renderFn;
			this._render();
		}

		_render() {
			if (this._item == null || this._index == null || this._renderFn == null) {
				return;
			}

			render(this._renderFn(this._item, this._index), this);
		}
	}
);
