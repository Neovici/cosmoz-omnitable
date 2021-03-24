/* eslint-disable max-lines */
import {
	expect, fixture, html
} from '@open-wc/testing';

import sinon from 'sinon';


import './helpers/fixtures/basic-row';
import './helpers/fixtures/basic-column';
import '@polymer/paper-toggle-button';

sinon.assert.expose(chai.assert, { prefix: '' });

suite('OmnitableRepeaterMixin', () => {
	let
		row,
		columns,
		otherColumns;

	setup(async () => {
		const result = await fixture(html`
			<div>
				<basic-row></basic-row>
				<div>
					<basic-column value-path="id"></basic-column>
					<basic-column .renderCell=${ (_, { item }) => item.complexData.someKey }></basic-column>
				</div>
				<div>
					<basic-column .renderCell=${ (_, { item }) => html`Id: ${ item.id }` }></basic-column>
				</div>
			</div>
		`);
		row = result.children[0];
		columns = Array.from(result.children[1].children);
		otherColumns = Array.from(result.children[2].children);
	});


	suite('columns configuration is missing', () => {
		test('does not render anything', () => {
			row.columns = [];
			row.renderCells();
			expect(row.children).to.have.lengthOf(0);
		});

	});


	suite('columns configuration is present', () => {
		setup(() => {
			row.item = {
				id: 1,
				complexData: { someKey: 'aaa' }
			};
			row.columns = columns;
		});

		suite('renderCells', () => {
			test('it renders cells', () => {
				row.renderCells();

				expect(row.children).to.have.lengthOf(2);
				expect(row.textContent).to.equal('1aaa');
			});

			test('it configures cells according to the row configuration', () => {
				row._elementType = 'span';
				row._slotName = 'some-slot';
				row.renderCells();

				expect(row.children).to.have.lengthOf(2);
				Array.from(row.children).forEach(cell => {
					expect(cell.nodeName).to.equal('SPAN');
					expect(cell.slot).to.equal('some-slot');
				});
			});
		});

		suite('destroyCells', () => {
			test('it destroys rendered cells', () => {
				row.renderCells();
				row.destroyCells();

				expect(row.children).to.have.lengthOf(0);
			});
		});

		suite('forEachElement', () => {
			test('it runs code on each rendered element', () => {
				row.renderCells();
				row.forEachElement(element => {
					element.classList.add('ok');
				});

				Array.from(row.children).forEach(cell => {
					expect(cell.classList.toString()).to.equal('ok');
				});
			});
		});

		suite('forwardChange', () => {
			test('it forwards simple changes to rendered elements', () => {
				row.renderCells();

				row.item = {
					id: 2,
					complexData: { someKey: 'bbb' }
				};
				expect(row.textContent).to.equal('2bbb');
			});
		});

		suite('forwardPathChange', () => {
			test('it forwards complex changes to rendered elements', () => {
				row.renderCells();

				row.set('item.complexData.someKey', 'abc');
				expect(row.textContent).to.equal('1abc');
			});
		});

		suite('trackColumns', () => {
			test('it tracks configuration changes', () => {
				row.trackColumns();

				row.columns = otherColumns;
				expect(row.textContent).to.equal('Id: 1');

				row.set('columns', columns);
				expect(row.textContent).to.equal('1aaa');

				row.push('columns', columns[0]);
				expect(row.textContent).to.equal('1aaa1');

				row.pop('columns');
				row.pop('columns');
				expect(row.textContent).to.equal('1');
			});

			test('it tracks column\'s editable state', () => {
				row.trackColumns();

				row.set('columns.0.editable', true);
				expect(row.textContent).to.equal('Edit: 1aaa');

				row.set('columns.0.editable', false);
				expect(row.textContent).to.equal('1aaa');
			});

			test('it ensures that configuration tracking is used correctly', () => {
				row.trackColumns();
				expect(() => row.trackColumns()).to.throw('The columns are already tracked.');
			});
		});

		suite('stopTrackingColumns', () => {
			test('it can stop tracking configuration changes', () => {
				row.trackColumns();

				row.set('columns', otherColumns);
				expect(row.textContent).to.equal('Id: 1');

				row.stopTrackingColumns();

				row.set('columns', columns);
				expect(row.textContent).to.equal('Id: 1');
			});

			test('it ensures that configuration tracking is used correctly', () => {
				expect(() => row.stopTrackingColumns()).to.throw('The columns are not tracked.');

				row.trackColumns();

				row.stopTrackingColumns();
				expect(() => row.stopTrackingColumns()).to.throw('The columns are not tracked.');
			});
		});

		suite('groupOnColumn', () => {
			test('it hides cells that belong to the column that the data is grouped on', () => {
				row.groupOnColumn = columns[0];
				row.renderCells();

				expect(row.children[0].hidden).to.be.true;
				expect(row.children[1].hidden).to.be.false;
			});

			test('it handles group on column changes', () => {
				row.groupOnColumn = columns[0];
				row.renderCells();
				expect(row.children[0].hidden).to.be.true;
				expect(row.children[1].hidden).to.be.false;

				row.groupOnColumn = columns[1];
				expect(row.children[0].hidden).to.be.false;
				expect(row.children[1].hidden).to.be.true;

				row.groupOnColumn = null;
				expect(row.children[0].hidden).to.be.false;
				expect(row.children[1].hidden).to.be.false;
			});

			test('it ignores grouping on columns other than those configured', () => {
				row.renderCells();

				row.groupOnColumn = otherColumns[0];
				expect(row.children[0].hidden).to.be.false;
				expect(row.children[1].hidden).to.be.false;
			});
		});
	});
});

