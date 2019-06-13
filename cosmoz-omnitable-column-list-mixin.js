import '@webcomponents/shadycss/entrypoints/apply-shim';
import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';

/**
 * @polymer
 * @mixinFunction
 */
export const listColumnMixin = dedupingMixin(base =>	class extends base {
	static get properties() {
		return {
			textProperty: {
				type: String,
				value: 'label'
			},

			valueProperty: {
				type: String,
				value: 'value'
			}
		};
	}

	getString(item, valuePath = this.valuePath) {
		const values = this.get(valuePath, item);

		if (values == null) {
			return '';
		}

		return values
			.map(value => this.textProperty ? this.get(this.textProperty, value) : value)
			.filter((value, index, array) => array.indexOf(value) === index)
			.filter(Boolean)
			.join(', ');
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		return this.getString(item, valuePath);
	}

});
