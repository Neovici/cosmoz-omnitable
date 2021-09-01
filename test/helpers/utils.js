import {
	fixture
} from '@open-wc/testing';

export const setupOmnitableFixture = async (omnitableFixture, data) => {
	const omnitable = await fixture(omnitableFixture);
	omnitable.data = data;
	omnitable.flush();
	return omnitable;
};
