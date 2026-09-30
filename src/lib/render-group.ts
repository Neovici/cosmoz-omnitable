import { chevronDownIcon } from '@neovici/cosmoz-icons/untitled';
import { html } from '@pionjs/pion';

import type { Column, IndexedGroup } from './types';
import { indexSymbol } from './utils';

export interface RenderGroupParams {
	selected: boolean;
	folded: boolean;
	toggleFold: () => void;
}

export interface RenderGroupDeps {
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
	groupOnColumn?: Column;
}

const _getGroupRowClasses = (folded: boolean): string =>
	folded ? 'groupRow groupRow-folded' : 'groupRow';

/**
 * Creates the default group-row renderer.
 *
 * Called by `use-list` with the omnitable-owned wiring; the returned
 * function renders one group row for the grouped list.
 */
export const renderGroup =
	({ onCheckboxChange, dataIsValid, groupOnColumn }: RenderGroupDeps) =>
	(
		item: IndexedGroup,
		index: number,
		{ selected, folded, toggleFold }: RenderGroupParams
	) =>
		html` <div
			class="${_getGroupRowClasses(folded)}"
			part="groupRow groupRow-${item[indexSymbol]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${selected}
				.dataItem=${item}
				@input=${onCheckboxChange}
				?disabled=${!dataIsValid}
			/>
			<h3 class="groupRow-label">
				<div><span>${groupOnColumn?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${groupOnColumn}
					.item=${item.items?.[0]}
					.selected=${selected}
					.folded=${folded}
					.group=${item}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${item.items!.length}</div>
			<button class="expand" ?aria-expanded="${folded}" @click=${toggleFold}>
				${chevronDownIcon({ width: '16', height: '16' })}
			</button>
		</div>`;
