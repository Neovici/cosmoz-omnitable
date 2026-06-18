import '@neovici/cosmoz-collapse';
import { defaultMiddleware, size } from '@neovici/cosmoz-dropdown/use-floating';
import { sheet } from '@neovici/cosmoz-utils';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { component, html } from '@pionjs/pion';
import { t } from 'i18next';
import { when } from 'lit-html/directives/when.js';
import { arrow, close, pull } from '../icons';
import { group, sort } from './cosmoz-omnitable-sort-group';
import style, { dropdown as dropdownStyle } from './style.css';
import useSettingsUi from './use-settings-ui';

const middleware = [
	size({
		apply({
			availableHeight,
			elements,
		}: {
			availableHeight: number;
			elements: { floating: HTMLElement };
		}) {
			Object.assign(elements.floating.style, {
				maxHeight: `${Math.max(0, availableHeight)}px`,
			});
		},
	}),
	...defaultMiddleware,
];

const renderItem =
	({
		onDragStart,
		onDragEnter,
		onDragOver,
		onDragLeave,
		onDrop,
		onDown,
		onToggle,
		collapsed,
		filters,
	}: {
		onDragStart: (e: DragEvent) => void;
		onDragEnter: (e: DragEvent) => void;
		onDragOver: (e: DragEvent) => void;
		onDragLeave: (e: DragEvent) => void;
		onDrop: (e: DragEvent) => void;
		onDown: (e: MouseEvent) => void;
		onToggle: (e: Event) => void;
		collapsed: unknown[];
		filters: Record<string, any>;
	}) =>
	(column: { name: string; title?: string; disabled?: boolean }, i: number) => {
		const indeterminate = !!collapsed?.find((c: any) => c.name === column.name),
			checked = !column.disabled && !indeterminate;
		return html` <div
			class="item"
			data-index=${i}
			@mousedown=${onDown}
			draggable="true"
			@dragstart=${onDragStart}
			@dragenter=${onDragEnter}
			@dragover=${onDragOver}
			@dragleave=${onDragLeave}
			@drop=${onDrop}
		>
			<button class="pull">${pull}</button>
			<label class="title" ?has-filter=${!isEmpty(filters[column.name]?.filter)}
				>${column.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${checked}
				@click=${onToggle}
				.indeterminate=${indeterminate}
			/>
		</div>`;
	};

const SettingsUI = (host: HTMLElement) => {
	const thru = useSettingsUi(host as any) as any;
	const {
		settings,
		settingsId,
		onSave,
		onReset,
		hasChanges,
		opened,
		setOpened,
	} = thru;
	return html` <div class="headline">
			${t('Sort and filter')}
			<button
				class="close"
				@click=${(e: MouseEvent) => {
					const tg = e.currentTarget as HTMLElement;
					tg?.focus();
					tg?.blur();
				}}
			>
				${close}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${opened.columns}
				@click=${() =>
					setOpened((c: Record<string, boolean>) => ({
						...c,
						columns: !c.columns,
					}))}
				part="columns columns-heading"
			>
				${t('Columns')} ${arrow}
			</div>
			<cosmoz-collapse
				?opened="${opened.columns}"
				part="columns columns-content"
			>
				<div class="list">${settings.columns?.map(renderItem(thru))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${opened.sort}
				@click=${() =>
					setOpened((c: Record<string, boolean>) => ({ ...c, sort: !c.sort }))}
			>
				${t('Sort on')} ${arrow}
			</div>
			<cosmoz-collapse ?opened=${opened.sort}> ${sort()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${opened.group}
				@click=${() =>
					setOpened((c: Record<string, boolean>) => ({
						...c,
						group: !c.group,
					}))}
				part="groups groups-heading"
			>
				${t('Group on')} ${arrow}
			</div>
			<cosmoz-collapse ?opened=${opened.group} part="groups groups-heading"
				>${group()}</cosmoz-collapse
			>
		</div>

		${when(
			settingsId,
			() =>
				html`<div class="buttons">
					<button
						class="button reset"
						@click=${onReset}
						?disabled=${!hasChanges}
					>
						${t('Reset')}
					</button>
					<button class="button" @click=${onSave} ?disabled=${!hasChanges}>
						${t('Save')}
					</button>
				</div>`,
		)}`;
};

customElements.define(
	'cosmoz-omnitable-settings-ui',
	component(SettingsUI, { styleSheets: [sheet(style)] }),
);

const Settings = ({
	config,
	newLayout,
}: {
	config?: any;
	newLayout?: boolean;
}) => html`
	<cosmoz-dropdown
		.placement="${newLayout ? 'bottom-start' : 'bottom-end'}"
		.middleware="${middleware}"
	>
		<div title="${t('Sort and filter')}" slot="button">
			${when(
				newLayout,
				() => html`<div class="headerDots">...</div>`,
				() =>
					html` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`,
			)}
			${when(config?.badge, () => html`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${config}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;

customElements.define(
	'cosmoz-omnitable-settings',
	component(Settings, { styleSheets: [sheet(dropdownStyle)] }),
);
