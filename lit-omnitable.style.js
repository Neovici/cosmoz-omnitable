export const style = `
  :host {
    display: flex;
    flex-direction: column;
  }

  .header, .row {
		display: flex;
		width: 100%;
  }

  .content {
		position: relative;
    min-height: 90px;
		overflow-y: auto;
		flex: 1;
  }
`;
