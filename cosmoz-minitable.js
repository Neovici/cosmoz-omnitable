import { component, html } from 'haunted';

const Minitable = () => {
    return html`<cosmoz-tab-card>
        <h1>GOD DAG PAPPSKALLAR!</h1>
    </cosmoz-tab-card>`;
}

customElements.define('cosmoz-minitable', component(Minitable));