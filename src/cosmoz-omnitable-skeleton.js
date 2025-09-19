import { html, css, component } from '@pionjs/pion';

const styles = css`
	:host {
		max-width: 100%;
		overflow-x: hidden;
		padding: 0 12px;
	}
	.skeleton {
		width: 100%;
	}
	.skeleton > div {
		height: 17.5px;
		display: flex;
		padding: 11px 12px 11px 0;
	}
	.skeleton > div div:not(.handle) {
		background-image: linear-gradient(
			90deg, 
			var(--cosmoz-omnitable-skeleton-bg-from, #e0e0e0), 
			var(--cosmoz-omnitable-skeleton-bg-middle, #f5f5f5), 
			var(--cosmoz-omnitable-skeleton-bg-to, #e0e0e0)
		);
		background-size: 1000%;
		background-position: right;
		border-radius: 4px;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
	}
	.skeleton > div div:not(.checkbox):not(:last-of-type) {
		margin-right: 7px;
	}
	.skeleton > div div.checkbox {
		min-width: 18px;
		margin-left: 0;
		margin-right: 12px;
	}
	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;

const Skeleton = ({ settingsConfig }) => {
	const { columns, collapsed } = settingsConfig,
		showingColumns = columns.filter(
			(column) => !collapsed.some((hidden) => hidden.name === column.name),
		);

	return html`<div class="skeleton">
		${Array.from(
			{ length: 5 },
			() =>
				html`<div>
					<div class="checkbox"></div>
					${showingColumns.map(
						(col) =>
							html`<div
								class="cell"
								part=${`cell-${col.name}`}
								name=${col.name}
							></div>`,
					)}
				</div>`,
		)}
	</div>`;
};

customElements.define(
	'cosmoz-omnitable-skeleton',
	component(Skeleton, { styleSheets: [styles] }),
);
