import { chevronDownIcon } from '@neovici/cosmoz-icons/untitled';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { html } from '@pionjs/pion';

import { renderMinis } from './render-mini';
import type { HostRenderItem } from './types';

/**
 * The default item-row renderer, in the same shape as the `renderItem`
 * host property. Connected to omnitable-owned params by `use-list`;
 * exported so consumers can wrap or replace it.
 */
export const renderItem: HostRenderItem = (
	item,
	index,
	{
		selected,
		expanded,
		toggleCollapse,
		columns,
		collapsedColumns,
		miniColumns,
		onItemClick,
		onCheckboxChange,
		onItemChange,
		rowPartFn,
		groupOnColumn,
		dataIsValid,
	}
) =>
	html`
		<div
			?selected=${selected}
			part="${['itemRow', `itemRow-${index}`, rowPartFn?.(item, index)]
				.filter(Boolean)
				.join(' ')}"
			.dataIndex=${index}
			.dataItem=${item}
			class="itemRow"
			@click=${onItemClick}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${selected}
					.dataItem=${item}
					@input=${onCheckboxChange}
					?disabled=${!dataIsValid}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${columns}
					.index=${index}
					.selected=${selected}
					.expanded=${expanded}
					.item=${item}
					.groupOnColumn=${groupOnColumn}
					.onItemChange=${onItemChange}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${isEmpty(collapsedColumns.length)}"
					?aria-expanded="${expanded}"
					@click="${toggleCollapse}"
				>
					${chevronDownIcon({ width: '16', height: '16' })}
				</button>
			</div>
			${renderMinis({ item, index })(miniColumns)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${collapsedColumns}
			.item=${item}
			?selected=${selected}
			?expanded=${expanded}
			.groupOnColumn=${groupOnColumn}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`;
