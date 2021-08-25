import { useState } from 'haunted';
import { useTrackSize } from './use-track-size';

export const useCanvasWidth = host => {
	const [canvasWidth, setCanvasWidth] = useState(0);

	useTrackSize(host, setCanvasWidth);

	return canvasWidth;
};
