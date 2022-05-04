import { useCallback, html } from 'haunted';

const foldIcon = (expanded) => (expanded ? 'expand-less' : 'expand-more'),
	_onCheckboxChange = (toggleSelect) => (event) => {
		toggleSelect(event.target.checked);
		// const item = event.model.item,
		//     selected = event.target.checked;
		// if (this._shiftKey) {
		//     this.$.groupedList.toggleSelectTo(item, selected);
		// } else if (this._ctrlKey) {
		//     event.target.checked = true;q
		//     this.$.groupedList.selectOnly(item);
		// } else {
		//     this.$.groupedList.toggleSelect(item, selected);
		// }

		event.preventDefault();
		event.stopPropagation();
	};

// eslint-disable-next-line max-lines-per-function
export const useRenderItem = ({
	dataIsValid,
	normalizedColumns,
	groupOnColumn,
	onItemChange,
	collapsedColumns,
}) =>
	useCallback(
		(
			item,
			index,
			{ selected, toggleSelect, expanded, toggleCollapse }
		) => html`<div class="item-row-wrapper">
			<div ?selected=${selected} class="itemRow">
				<input
					class="checkbox"
					type="checkbox"
					.checked=${selected}
					@input=${_onCheckboxChange(toggleSelect)}
					?disabled=${!dataIsValid}
				/>
				<cosmoz-omnitable-item-row
					.columns=${normalizedColumns}
					.selected=${selected}
					.expanded=${expanded}
					.item=${item}
					.groupOnColumn=${groupOnColumn}
					.onItemChange=${onItemChange}
				>
				</cosmoz-omnitable-item-row>
				<paper-icon-button
					class="expand"
					?hidden=${!collapsedColumns.length}
					.icon=${foldIcon(expanded)}
					@tap=${toggleCollapse}
				></paper-icon-button>
			</div>
			<cosmoz-omnitable-item-expand
				.columns=${collapsedColumns}
				.item=${item}
				.selected=${selected}
				?expanded=${expanded}
				.groupOnColumn=${groupOnColumn}
				part="item-expand"
				on-expanded="onExpanded"
			>
			</cosmoz-omnitable-item-expand>
		</div>`,
		[
			dataIsValid,
			normalizedColumns,
			groupOnColumn,
			onItemChange,
			collapsedColumns,
		]
	);
