import { chevronDownIcon } from '@neovici/cosmoz-icons/untitled';
import { html } from '@pionjs/pion';

import type { HostRenderGroup } from './types';

const _getGroupRowClasses = (folded: boolean): string =>
	folded ? 'groupRow groupRow-folded' : 'groupRow';

/** The default group-row renderer. */
export const renderGroup: HostRenderGroup = (
	item,
	index,
	{ selected, folded, toggleFold, onCheckboxChange, groupOnColumn, dataIsValid }
) =>
	html` <div
		class="${_getGroupRowClasses(folded)}"
		part="groupRow groupRow-${index}"
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
