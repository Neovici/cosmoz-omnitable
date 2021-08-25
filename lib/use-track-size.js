import { useEffect } from 'haunted';

export const useTrackSize = (host, setCanvasWidth) =>
	useEffect(() => {
		const onResize = ([entry]) =>
				requestAnimationFrame(() =>
					setCanvasWidth(
						entry.contentRect?.width -
						20 /* scrollbar width */ -
						44 /* checkbox width */ -
						24 /* expand button width */
					)
				),
			observer = new ResizeObserver(onResize);

		observer.observe(host);
		return () => observer.unobserve(host);
	}, []);
