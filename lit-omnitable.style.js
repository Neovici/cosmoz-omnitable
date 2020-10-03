/**
 * TODO:
 * * check what is the deal with "Chrome overflow rendering bug"
 */

export const style = `
  :host {
    display: flex;
    flex-direction: column;
  }

  .header, .row {
		display: flex;
		width: 100%;
		overflow: hidden;
  }

  .content {
		position: relative;
    min-height: 90px;
		overflow-y: auto;
		flex: 1;
	}

	.cell {
		flex: none;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing: border-box;
		padding: 0 1.5px;
	}

	.footer {
		display: flex;
		align-items: center;
		border-top: solid 1px #e8e8e8;
		background-color: #f5f5f5;
		min-height: 25px;
		height: 63px;
		margin-bottom: 1px; /* Chrome overflow rendering bug? When only component in a view */
	}

	.footer-controls {
		display: flex;
		flex: 1;
		align-items: center;
	}

	.footer-control {
		margin-left: 3%;
		display: flex;
		align-items: center;
	}

	.footer-tableStats {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-right: 3%;
	}

	.footer-tableStats :first-child {
		margin-bottom: 5px;
	}
`;
