import { useState } from '@pionjs/pion';
import { useTrackSize, LAYOUT_OFFSET } from './use-track-size';

export const useCanvasWidth = (host: HTMLElement) => {
	const [canvasWidth, setCanvasWidth] = useState(
		() => host.getBoundingClientRect().width - LAYOUT_OFFSET,
	);

	useTrackSize(host, setCanvasWidth);

	return canvasWidth;
};
