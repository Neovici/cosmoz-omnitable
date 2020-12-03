
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom';

export const getEffectiveChildrenLegacyMixin = base => class extends base {
	/**
	 * Returns a list of nodes that are the effective childNodes. The effective
	 * childNodes list is the same as the element's childNodes except that
	 * any `<content>` elements are replaced with the list of nodes distributed
	 * to the `<content>`, the result of its `getDistributedNodes` method.
	 * @return {!Array<!Node>} List of effective child nodes.
	 * @suppress {invalidCasts} LegacyElementMixin must be applied to an
	 *     HTMLElement
	 * @override
	 */
	getEffectiveChildNodes() {
		// eslint-disable-next-line consistent-this
		const thisEl = /** @type {Element} */ this,
			domApi = /** @type {PolymerDomApi} */ dom(thisEl);
		return domApi.getEffectiveChildNodes();
	}

	/**
	 * Returns a list of elements that are the effective children. The effective
	 * children list is the same as the element's children except that
	 * any `<content>` elements are replaced with the list of elements
	 * distributed to the `<content>`.
	 *
	 * @return {!Array<!Node>} List of effective children.
	 * @override
	 */
	getEffectiveChildren() {
		const list = this.getEffectiveChildNodes();
		return list.filter((/** @type {!Node} */ n) => {
			return n.nodeType === Node.ELEMENT_NODE;
		});
	}
};
