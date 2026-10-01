import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

import type { Column, HostRenderItem, Item } from './types';

export const renderMinis =
	({ item, index }: { item: Item; index: number }) =>
	(columns: Column[] | undefined) =>
		when(
			(columns?.length ?? 0) > 0,
			() => html`
				<div class="itemRow-minis" part="item-minis">
					${columns!.map(
						(column) =>
							html`<div
								class="itemRow-mini"
								part="item-mini item-mini-${column.name}"
							>
								${(column.renderMini ?? column.renderCell)!(column, {
									item,
									index,
								})}
							</div>`
					)}
				</div>
			`
		);

const getMiniColumns = (columns: Column[] | undefined): Column[] =>
	(columns ?? [])
		.filter((column) => column.mini != null)
		.sort((a, b) => (a.mini ?? 0) - (b.mini ?? 0));

/**
 * The default card renderer — set as `renderItem` on `<cosmoz-omnitable>`.
 *
 * Two-tier card: the first mini column is the title line, the rest render
 * in a meta flex row below. Cells render via `column.renderMini ??
 * column.renderCell`. The checkbox is wired through `onCheckboxChange`,
 * so shift-range and ctrl select-only semantics work like on default rows.
 */
export const renderMini: HostRenderItem = (
	item,
	index,
	{ selected, onItemClick, onCheckboxChange, dataIsValid, columns }
) => {
	const miniColumns = getMiniColumns(columns),
		[titleColumn] = miniColumns;

	return html`
		<div
			?selected=${selected}
			part="itemRow itemCard itemRow-${index}"
			class="itemRow"
			.dataIndex=${index}
			.dataItem=${item}
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
				${when(
					titleColumn != null,
					() =>
						html`<div
							class="itemRow-mini"
							part="item-mini item-mini-${titleColumn!.name}"
						>
							${(titleColumn!.renderMini ?? titleColumn!.renderCell)!(
								titleColumn!,
								{ item, index }
							)}
						</div>`
				)}
			</div>
			${renderMinis({ item, index })(miniColumns.slice(1))}
		</div>
	`;
};
