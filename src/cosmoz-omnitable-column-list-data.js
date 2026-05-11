import { sheet, css } from '@neovici/cosmoz-utils';
import { component, html, useEffect, useHost, useMemo, useState } from '@pionjs/pion';
import { t } from 'i18next';

const style = css`
	:host {
		display: block;
	}

	:host a {
		color: var(--primary-link-color, inherit);
	}

	[hidden] {
		display: none;
	}

	ul {
		list-style-type: none;
		margin: 0.3em 0;
		padding-left: 0;
	}

	li {
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;

const ListData = ({ items }) => {
	const [expanded, setExpanded] = useState(false);
	const host = useHost();
	const safeItems = Array.isArray(items) ? items : [];
	const othersCount = useMemo(() => Math.max(0, safeItems.length - 1), [safeItems]);

	useEffect(() => {
		requestAnimationFrame(() =>
			host.dispatchEvent(new CustomEvent('expand', { bubbles: true })),
		);
	}, [host, safeItems.length]);

	if (safeItems.length === 0) {
		return null;
	}

	const showToggle = safeItems.length > 2;
	const firstItem = safeItems[0];
	const otherItems = showToggle && !expanded ? [] : safeItems.slice(1);
	const toggleExpand = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setExpanded((value) => !value);
	};

	return html`
		<ul>
			<li>
				<span>${firstItem}</span>
			</li>
			<li class="see-more" ?hidden=${!showToggle || expanded}>
				<a href="#" @click=${toggleExpand}
					>${t('and {0} more', { 0: othersCount })}</a
				>
			</li>
			${otherItems.map(
				(item) => html`
					<li>
						<span class="item">${item}</span>
					</li>
				`,
			)}
			<li class="see-less" ?hidden=${!showToggle || !expanded}>
				<a href="#" @click=${toggleExpand}>${t('See less')}</a>
			</li>
		</ul>
	`;
};

customElements.define(
	'cosmoz-omnitable-column-list-data',
	component(ListData, { styleSheets: [sheet(style)] }),
);
