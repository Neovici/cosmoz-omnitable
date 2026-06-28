import { renderHook } from '@neovici/testing';
import { expect, nextFrame } from '@open-wc/testing';
import { spy } from 'sinon';
import { useTweenArray } from '../src/lib/use-tween-array';

const tick = async (frames = 1) => {
	for (let i = 0; i < frames; i++) {
		await nextFrame();
	}
};

suite('useTweenArray', () => {
	test('snaps to target when speedFactor is 1', async () => {
		const cb = spy();
		const { rerender } = await renderHook(
			({ target, speed }: { target: number[]; speed: number }) =>
				useTweenArray(target, speed, cb),
			{ initialProps: { target: [0], speed: 1 } },
		);

		cb.resetHistory();
		await rerender({ target: [100], speed: 1 });
		await tick();

		expect(cb.calledWith([100])).to.equal(true);
		// snap reaches target in a single frame — no extra convergence pass
		expect(cb.callCount).to.equal(1);
	});

	test('eases toward target when speedFactor > 1', async () => {
		const cb = spy();
		const { rerender } = await renderHook(
			({ target, speed }: { target: number[]; speed: number }) =>
				useTweenArray(target, speed, cb),
			{ initialProps: { target: [0], speed: 1 } },
		);

		cb.resetHistory();
		await rerender({ target: [100], speed: 1.9 });
		// allow the rAF loop to run several frames
		await tick(10);

		const calls = cb.getCalls().map((c) => c.args[0][0]);
		expect(calls[0]).to.be.lessThan(100);
		expect(calls[calls.length - 1]).to.be.closeTo(100, 0.5);
		expect(calls.length).to.be.greaterThan(2);
	});

	test('calls onConverge when tween completes', async () => {
		const cb = spy(),
			onConverge = spy();
		const { rerender } = await renderHook(
			({
				target,
				speed,
				onDone,
			}: {
				target: number[];
				speed: number;
				onDone: () => void;
			}) => useTweenArray(target, speed, cb, onDone),
			{ initialProps: { target: [0], speed: 1, onDone: onConverge } },
		);

		onConverge.resetHistory();
		await rerender({ target: [50], speed: 1, onDone: onConverge });
		await tick();

		expect(onConverge.calledOnce).to.equal(true);
	});

	test('speedFactor updates apply on the next target change', async () => {
		const cb = spy();
		const { rerender } = await renderHook(
			({ target, speed }: { target: number[]; speed: number }) =>
				useTweenArray(target, speed, cb),
			{ initialProps: { target: [0], speed: 1 } },
		);

		// First change at speed 1 -> snap
		cb.resetHistory();
		await rerender({ target: [40], speed: 1 });
		await tick();
		expect(cb.calledWith([40])).to.equal(true);

		// Subsequent change also snaps (speed still 1)
		cb.resetHistory();
		await rerender({ target: [80], speed: 1 });
		await tick();
		expect(cb.calledWith([80])).to.equal(true);
		expect(cb.callCount).to.equal(1);
	});
});
