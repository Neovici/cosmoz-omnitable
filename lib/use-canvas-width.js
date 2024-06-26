import { useState } from '@pionjs/pion';
import { useTrackSize } from './use-track-size';

export const useCanvasWidth = (host) => {
	const [canvasWidth, setCanvasWidth] = useState(
		() => host.getBoundingClientRect().width,
	);

	useTrackSize(host, setCanvasWidth);

	return canvasWidth;
};
