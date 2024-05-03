import { useState } from '@pionjs/pion';
import { useTrackSize } from './use-track-size';

export const useCanvasWidth = (host) => {
	const [canvasWidth, setCanvasWidth] = useState(
		() => host.getBoundingClientRect().width,
	);
	const breakpoint = host.miniBreakpoint ?? 480;
	const mini = useMemo(
		() => canvasWidth <= breakpoint,
		[canvasWidth, host.miniBreakpoint],
	);

	useTrackSize(host, setCanvasWidth);

	return { width: canvasWidth, mini };
};
