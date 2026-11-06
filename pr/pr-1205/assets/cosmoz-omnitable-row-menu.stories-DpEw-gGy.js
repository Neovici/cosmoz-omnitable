import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Xt as t,Yt as n}from"./iframe-c0zjlsmC.js";import{t as r}from"./cosmoz-omnitable-sGTjoaj1.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),{action:i}=__STORYBOOK_MODULE_ACTIONS__,a=Array.from({length:20},(e,t)=>({name:`Invoice ${1001+t}`,supplier:[`Acme`,`Globex`,`Initech`,`Umbrella`][t%4],amount:{amount:(t+1)*125.5,currency:`EUR`}})),o=e=>n`
        <style>
            [role="menuitem"] {
                display: block;
                width: 100%;
                padding: 6px 8px;
                border: 0;
                border-radius: 6px;
                background: none;
                color: inherit;
                font: inherit;
                text-align: start;
                cursor: pointer;
            }
            [role="menuitem"]:is(:hover, :focus-visible) {
                background: var(--cz-color-bg-secondary, #f2f4f7);
                outline: none;
            }
            .label {
                padding: 6px 8px;
                color: var(--cz-color-text-tertiary, #667085);
            }
        </style>
        <div class="label">
            ${e.length===1?e[0].name:`${e.length} invoices`}
        </div>
        ${[`Approve`,`Reject`,`Assign to…`].map(t=>n`<button
                    role="menuitem"
                    @click=${()=>i(t)(e.map(e=>e.name))}
                >
                    ${t}
                </button>`)}
    `,s={title:`Components/CosmozOmnitableRowMenu`,component:`cosmoz-omnitable`,parameters:{docs:{description:{component:'Set `rowMenu` to `(items) => template` to give each row an action menu. Right-click a row to open it. A row inside a multi-row selection acts on the whole selection. Clicking a `role="menuitem"` closes the menu (logged in the Actions panel).'}}}},c={render:()=>n`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable .data=${a} .rowMenu=${o}>
                <cosmoz-omnitable-column
                    name="name"
                    title="Invoice"
                    value-path="name"
                ></cosmoz-omnitable-column>
                <cosmoz-omnitable-column
                    name="supplier"
                    title="Supplier"
                    value-path="supplier"
                ></cosmoz-omnitable-column>
                <cosmoz-omnitable-column-amount
                    name="amount"
                    title="Amount"
                    value-path="amount"
                ></cosmoz-omnitable-column-amount>
            </cosmoz-omnitable>
        </div>
    `},l=[`RowMenu`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
            }
            cosmoz-omnitable {
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable .data=\${data} .rowMenu=\${rowMenu}>
                <cosmoz-omnitable-column
                    name="name"
                    title="Invoice"
                    value-path="name"
                ></cosmoz-omnitable-column>
                <cosmoz-omnitable-column
                    name="supplier"
                    title="Supplier"
                    value-path="supplier"
                ></cosmoz-omnitable-column>
                <cosmoz-omnitable-column-amount
                    name="amount"
                    title="Amount"
                    value-path="amount"
                ></cosmoz-omnitable-column-amount>
            </cosmoz-omnitable>
        </div>
    \`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as RowMenu,l as __namedExportsOrder,s as default};