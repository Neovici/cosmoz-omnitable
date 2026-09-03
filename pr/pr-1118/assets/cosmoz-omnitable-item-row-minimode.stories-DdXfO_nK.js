import{b as m}from"./iframe-CTCPQAZu.js";import{g as e}from"./table-demo-helper-uKBeFwiu.js";import"./cosmoz-omnitable-BNvIZiVc.js";import"./preload-helper-PPVm8Dsz.js";import"./cosmoz-collapse-BGtPenM4.js";const t=e(10,10,10),u={title:"Components/CosmozOmnitableItemRowMiniMode",component:"cosmoz-omnitable-item-row"},a=n=>m`
    <style>
        .container {
            width: ${n.width||"400px"};
            height: 400px;
            display: flex;
            flex-direction: column;
        }
        cosmoz-omnitable {
            flex: 1;
            min-height: 0;
        }
    </style>
    <div class="container">
        <cosmoz-omnitable .data=${t} mini-breakpoint="9999">
            <cosmoz-omnitable-column
                name="name"
                title="Name"
                value-path="name"
                mini="0"
            ></cosmoz-omnitable-column>
            <cosmoz-omnitable-column
                name="group"
                title="Group"
                value-path="group"
                mini="1"
            ></cosmoz-omnitable-column>
            <cosmoz-omnitable-column
                name="value"
                title="Value"
                value-path="value"
                mini="2"
            ></cosmoz-omnitable-column>
            <cosmoz-omnitable-column
                name="randomString"
                title="Random String"
                value-path="randomString"
                mini="3"
            ></cosmoz-omnitable-column>
            <cosmoz-omnitable-column
                name="bool"
                title="Bool"
                value-path="bool"
            ></cosmoz-omnitable-column>
        </cosmoz-omnitable>
    </div>
`,o=a.bind({});o.args={width:"400px"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => html\`
    <style>
        .container {
            width: \${args.width || '400px'};
            height: 400px;
            display: flex;
            flex-direction: column;
        }
        cosmoz-omnitable {
            flex: 1;
            min-height: 0;
        }
    </style>
    <div class="container">
        <cosmoz-omnitable .data=\${data} mini-breakpoint="9999">
            <cosmoz-omnitable-column
                name="name"
                title="Name"
                value-path="name"
                mini="0"
            ></cosmoz-omnitable-column>
            <cosmoz-omnitable-column
                name="group"
                title="Group"
                value-path="group"
                mini="1"
            ></cosmoz-omnitable-column>
            <cosmoz-omnitable-column
                name="value"
                title="Value"
                value-path="value"
                mini="2"
            ></cosmoz-omnitable-column>
            <cosmoz-omnitable-column
                name="randomString"
                title="Random String"
                value-path="randomString"
                mini="3"
            ></cosmoz-omnitable-column>
            <cosmoz-omnitable-column
                name="bool"
                title="Bool"
                value-path="bool"
            ></cosmoz-omnitable-column>
        </cosmoz-omnitable>
    </div>
\``,...o.parameters?.docs?.source}}};const p=["MiniMode"];export{o as MiniMode,p as __namedExportsOrder,u as default};
