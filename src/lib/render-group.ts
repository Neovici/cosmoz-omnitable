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
 * The default group-row renderer. Curried factory over omnitable-owned
 * deps; the returned function is a grouped-list-compatible group renderer.
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

/**
 * Default group renderer in the public contract shape — what
 * `<cosmoz-omnitable>` itself renders when no `renderGroup` override is
 * set. Exported so consumers can wrap or extend the default group row.
 */
export const defaultRenderGroup = renderGroup;
