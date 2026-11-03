import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Xt as t,Yt as n}from"./iframe-CmVY1Cir.js";import{t as r}from"./cosmoz-omnitable-DzKLpSMK.js";var i,a,o,s,c;function l(){return(l=e((()=>{t(),r(),{action:i}=__STORYBOOK_MODULE_ACTIONS__,a=()=>Array.from({length:10},(e,t)=>({name:`Item ${t+1}`,quantity:(t+1)*3,price:{amount:(t+1)*12.5,currency:[`EUR`,`USD`,`SEK`][t%3]},approved:t%2==0})),o={title:`Components/CosmozOmnitableEditable`,component:`cosmoz-omnitable`,parameters:{docs:{description:{component:"Columns with the `editable` attribute render inputs instead of plain text. Edits update the item in place and fire a `column-item-changed` event (logged in the Actions panel)."}}}},s={render:()=>n`
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
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=${a()}
                @column-item-changed=${e=>i(`column-item-changed`)(e.detail)}
            >
                <cosmoz-omnitable-column
                    name="name"
                    title="Name"
                    value-path="name"
                    editable
                ></cosmoz-omnitable-column>
                <cosmoz-omnitable-column-number
                    name="quantity"
                    title="Quantity"
                    value-path="quantity"
                    editable
                ></cosmoz-omnitable-column-number>
                <cosmoz-omnitable-column-amount
                    name="price"
                    title="Price"
                    value-path="price"
                    editable
                ></cosmoz-omnitable-column-amount>
                <cosmoz-omnitable-column-boolean
                    name="approved"
                    title="Approved"
                    value-path="approved"
                    true-label="Yes"
                    false-label="No"
                    editable
                ></cosmoz-omnitable-column-boolean>
            </cosmoz-omnitable>
        </div>
    `},c=[`Editable`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${generateData()}
                @column-item-changed=\${e => action('column-item-changed')(e.detail)}
            >
                <cosmoz-omnitable-column
                    name="name"
                    title="Name"
                    value-path="name"
                    editable
                ></cosmoz-omnitable-column>
                <cosmoz-omnitable-column-number
                    name="quantity"
                    title="Quantity"
                    value-path="quantity"
                    editable
                ></cosmoz-omnitable-column-number>
                <cosmoz-omnitable-column-amount
                    name="price"
                    title="Price"
                    value-path="price"
                    editable
                ></cosmoz-omnitable-column-amount>
                <cosmoz-omnitable-column-boolean
                    name="approved"
                    title="Approved"
                    value-path="approved"
                    true-label="Yes"
                    false-label="No"
                    editable
                ></cosmoz-omnitable-column-boolean>
            </cosmoz-omnitable>
        </div>
    \`
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Editable,c as __namedExportsOrder,o as default};