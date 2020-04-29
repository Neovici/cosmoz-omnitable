export const style = `
  :host {
    display: flex;
    flex-direction: column;
  }

  .header, .row {
    display: flex;
  }

  .content {
		position: relative;
    min-height: 90px;
		overflow-y: auto;
		flex: 1;
  }

  .cell {
    flex-basis: 125px;
  }
`;
