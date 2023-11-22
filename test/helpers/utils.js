import { fixture, nextFrame } from '@open-wc/testing';
import { flush } from '@polymer/polymer/lib/utils/flush';

export const setupOmnitableFixture = async (omnitableFixture, data) => {
	const omnitable = await fixture(omnitableFixture);
	omnitable.data = data;
	await nextFrame();
	flush();
	await nextFrame();
	return omnitable;
};
