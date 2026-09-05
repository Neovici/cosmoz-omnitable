import '@neovici/cosmoz-button';
import '@neovici/cosmoz-collapse';
import { defaultMiddleware, size } from '@neovici/cosmoz-dropdown/use-floating';
import {
	chevronDownIcon,
	dotsVerticalIcon,
	equalIcon,
	xCloseIcon,
} from '@neovici/cosmoz-icons/untitled';
import { sheet } from '@neovici/cosmoz-utils';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { component, html } from '@pionjs/pion';
import { t } from 'i18next';
import { when } from 'lit-html/directives/when.js';
import type { ColumnConfigInput } from '../layout';
import { group, sort } from './cosmoz-omnitable-sort-group';
import style, { dropdown as dropdownStyle } from './style.css';
import useSettingsUi, { type SettingsUiConfig } from './use-settings-ui';

interface SettingsUiConfigExtended extends SettingsUiConfig {
	filters: Record<string, { filter?: unknown }>;
	badge?: boolean;
	settingsId?: string;
	onSave: () => void;
	onReset: () => void;
	hasChanges: boolean;
	opened: Record<string, boolean>;
	setOpened: (
		opened:
			| Record<string, boolean>
			| ((prev: Record<string, boolean>) => Record<string, boolean>)
	) => void;
}

interface RenderItemParams {
	onDragStart: (e: DragEvent) => void;
	onDragEnter: (e: DragEvent) => void;
	onDragOver: (e: DragEvent) => void;
	onDragLeave: (e: DragEvent) => void;
	onDrop: (e: DragEvent) => void;
	onDown: (e: MouseEvent) => void;
	onToggle: (e: Event) => void;
	collapsed?: { name?: string }[];
	filters: Record<string, { filter?: unknown }>;
}

interface SettingsProps {
	config: SettingsUiConfigExtended;
	newLayout?: boolean;
}

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
	}: RenderItemParams) =>
	(column: ColumnConfigInput, i: number) => {
		const indeterminate = !!collapsed?.find((c) => c.name === column.name),
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
			<button class="pull">${equalIcon({ width: '16', height: '16' })}</button>
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

const SettingsUI = (
	host: HTMLElement & { config: SettingsUiConfigExtended }
) => {
	const {
		settings,
		settingsId,
		onSave,
		onReset,
		hasChanges,
		opened,
		setOpened,
		...thru
	} = useSettingsUi(host);
	return html` <div class="headline">
			<span> ${t('Sort and filter')} </span>
			<cosmoz-button
				variant="tertiary"
				aria-label="${t('Close settings')}"
				@click=${(e: Event) => {
					const tg =
						e.currentTarget instanceof HTMLElement ? e.currentTarget : null;
					tg?.focus();
					tg?.blur();
				}}
			>
				${xCloseIcon({ width: '16', height: '16' })}
			</cosmoz-button>
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
				${t('Columns')} ${chevronDownIcon({ width: '20', height: '20' })}
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
				${t('Sort on')} ${chevronDownIcon({ width: '20', height: '20' })}
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
				${t('Group on')} ${chevronDownIcon({ width: '20', height: '20' })}
			</div>
			<cosmoz-collapse ?opened=${opened.group} part="groups groups-heading"
				>${group()}</cosmoz-collapse
			>
		</div>

		${when(
			settingsId,
			() =>
				html`<div class="buttons">
					<cosmoz-button
						variant="tertiary"
						@click=${onReset}
						?disabled=${!hasChanges}
					>
						${t('Reset')}
					</cosmoz-button>
					<cosmoz-button
						variant="primary"
						@click=${onSave}
						?disabled=${!hasChanges}
					>
						${t('Save')}
					</cosmoz-button>
				</div>`
		)}`;
};

customElements.define(
	'cosmoz-omnitable-settings-ui',
	component(SettingsUI, { styleSheets: [sheet(style)] })
);

const Settings = ({ config, newLayout }: SettingsProps) => html`
	<cosmoz-dropdown
		.placement="${newLayout ? 'bottom-start' : 'bottom-end'}"
		.middleware="${middleware}"
	>
		<div title="${t('Sort and filter')}" slot="button">
			${when(
				newLayout,
				() => html`<div class="headerDots">...</div>`,
				() =>
					html` ${dotsVerticalIcon({
						width: '20',
						height: '20',
						styles: 'color: var(--cz-color-text-primary)',
					})}`
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
	component(Settings, { styleSheets: [sheet(dropdownStyle)] })
);
