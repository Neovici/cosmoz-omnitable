import {
	fixture
} from '@open-wc/testing';

export const setupOmnitableFixture = async (omnitableFixture, data) => {
	const omnitable = await fixture(omnitableFixture);
	omnitable.data = data;
	omnitable._columnObserver.flush();
	omnitable.flush();
	return omnitable;
};
