import {
	component, html
} from 'haunted';
import { nothing } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { _ } from '@neovici/cosmoz-i18next';
import { useListData } from './lib/use-list-data.js';
import { guard } from 'lit-html/directives/guard';

const
	style = html`
		<style>
			:host {
				display: block;
			}

			a[href] {
				color: var(--primary-link-color, inherit);
			}

			[hidden] {
				display: none;
			}

			ul {
				list-style-type: none;
				margin: 0.3em 0;
				padding-left: 0;
			}

			ul li {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				max-width: 100%;
			}
		</style>
	`,

	ListData = host => {
		const
			{
				items,
				expanded,
				visibleItems,
				openExpand,
				closeExpand
			} = useListData(host);

		if (items == null || items.length < 1) {
			return nothing;
		}

		const
			listItems = repeat(visibleItems, item => html`
				<li>
					<span>${ item }</span>
				</li>`),
			seeMore = guard(items.length, () => html`
				<li class="see-more">
					<a href="#" @click=${ openExpand }>${ _('and {0} more', items.length - 1) }</a>
				</li>`),
			seeLess = guard([], () => html`
				<li class="see-less">
					<a href="#" @click="${ closeExpand }">${ _('See less') }</a>
				</li>`),
			button = expanded ? seeLess : seeMore,
			listContent = [
				listItems,
				items.length > 2 ? button : nothing
			];

		return [style, html`<ul>${ listContent }</ul>`];
	};

customElements.define('cosmoz-omnitable-column-list-data', component(ListData));
