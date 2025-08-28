export const connectable = (base) =>
	class extends base {
		connectedCallback() {
			super.connectedCallback?.();
			this.dispatchEvent(new CustomEvent('connected'));
		}
		disconnectedCallback() {
			super.disconnectedCallback?.();
			this.dispatchEvent(new CustomEvent('disconnected'));
		}
	};
