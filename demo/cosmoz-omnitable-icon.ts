import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { render } from 'lit-html';

import {
	addIcon,
	arrowDropdownIcon,
	cancelIcon,
	checkIcon,
	clearIcon,
	editIcon,
	expandLessIcon,
	expandMoreIcon,
	eyeIcon,
	fileDownloadIcon,
	findInPageIcon,
	fullscreenExitIcon,
	fullscreenIcon,
	googleIcon,
	helpOutlineIcon,
	infoIcon,
	inviteIcon,
	leftChevronIcon,
	rightChevronIcon,
	selectAllIcon,
	trendingDownIcon,
	trendingUpIcon,
	undoIcon,
	uploadIcon,
	wandIcon,
	warningIcon,
	deleteIcon,
	announcementIcon,
	errorIcon,
} from '@neovici/cosmoz-icons';

type IconFunction = (config?: {
	slot?: string;
	title?: string;
	className?: string;
	width?: string;
	height?: string;
	styles?: string;
}) => any;

type IconName = keyof typeof iconMap;

const iconMap: Record<string, IconFunction> = {
	add: addIcon,
	'arrow-dropdown': arrowDropdownIcon,
	cancel: cancelIcon,
	check: checkIcon,
	clear: clearIcon,
	edit: editIcon,
	'expand-less': expandLessIcon,
	'expand-more': expandMoreIcon,
	eye: eyeIcon,
	'file-download': fileDownloadIcon,
	'find-in-page': findInPageIcon,
	'fullscreen-exit': fullscreenExitIcon,
	fullscreen: fullscreenIcon,
	google: googleIcon,
	'help-outline': helpOutlineIcon,
	info: infoIcon,
	invite: inviteIcon,
	'left-chevron': leftChevronIcon,
	'right-chevron': rightChevronIcon,
	'select-all': selectAllIcon,
	'trending-down': trendingDownIcon,
	'trending-up': trendingUpIcon,
	undo: undoIcon,
	upload: uploadIcon,
	wand: wandIcon,
	warning: warningIcon,
	delete: deleteIcon,
	announcement: announcementIcon,
	error: errorIcon,
};

class CosmozOmnitableIcon extends PolymerElement {
	icon!: string;
	width!: string;
	height!: string;
	styles!: string;
	$!: { iconContainer: HTMLElement };

	static get is() {
		return 'cosmoz-omnitable-icon';
	}

	static get properties() {
		return {
			icon: {
				type: String,
			},
			width: {
				type: String,
				value: '24',
			},
			height: {
				type: String,
				value: '24',
			},
			styles: {
				type: String,
				value: 'fill: currentColor;',
			},
		};
	}

	static get template() {
		return html`
			<style>
				:host {
					display: inline-block;
					width: var(--cosmoz-omnitable-icon-width, 24px);
					height: var(--cosmoz-omnitable-icon-height, 24px);
					fill: currentColor;
				}

				:host([hidden]) {
					display: none !important;
				}
			</style>
			<div id="iconContainer"></div>
		`;
	}

	connectedCallback() {
		super.connectedCallback();
		this._renderIcon();
	}

	_renderIcon() {
		if (!this.icon || !this.$.iconContainer) return;

		const iconFunction = iconMap[this.icon];
		if (!iconFunction) {
			console.warn(
				`cosmoz-omnitable-icon: Unknown icon "${this.icon}". Available icons:`,
				Object.keys(iconMap).join(', '),
			);
			return;
		}

		const iconConfig = {
			width: this.width,
			height: this.height,
			styles: this.styles,
		};

		render(iconFunction(iconConfig), this.$.iconContainer as HTMLElement);
	}
}

customElements.define(CosmozOmnitableIcon.is, CosmozOmnitableIcon);
