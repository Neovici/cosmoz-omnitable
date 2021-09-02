import { useMemo, useState } from 'haunted';
import { columnSymbol, normalizeSettings } from './normalize-settings';
import { useFastLayout } from './use-fast-layout';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = host => {
	const
		{ columns, groupOnColumn, resizeSpeedFactor } = host,
		[settings, setSettings] = useState([]),
		normalizedSettings = useMemo(() => normalizeSettings(columns, settings), [columns, settings]),
		normalizedColumns = useMemo(() => normalizedSettings.map(s => s[columnSymbol]), [columns, ...normalizedSettings.map(s => s.name)]),
		{ layoutCss, collapsedColumns } = useFastLayout({ host, settings: normalizedSettings, setSettings, groupOnColumn, resizeSpeedFactor });

	return {
		layoutCss,
		setSettings,
		normalizedSettings,
		normalizedColumns,
		collapsedColumns
	};
};
