import { useEffect } from '@pionjs/pion';

export const SCROLLBAR_WIDTH = 20;
export const CHECKBOX_WIDTH = 44;
export const EXPAND_BUTTON_WIDTH = 24;
// Rows are inset from the table's edge by --cz-spacing * 2 on each side.
export const ROW_INSET = 16;
export const LAYOUT_OFFSET =
	SCROLLBAR_WIDTH + CHECKBOX_WIDTH + EXPAND_BUTTON_WIDTH + ROW_INSET;

export const useTrackSize = (
	host: HTMLElement,
	setCanvasWidth: (width: number) => void,
) =>
	useEffect(() => {
		const onResize = ([entry]: ResizeObserverEntry[]) => {
				if (entry.contentRect?.width === 0) {
					return;
				}

				setCanvasWidth(entry.contentRect.width - LAYOUT_OFFSET);
			},
			observer = new ResizeObserver(onResize);

		observer.observe(host);
		return () => observer.unobserve(host);
	}, []);
