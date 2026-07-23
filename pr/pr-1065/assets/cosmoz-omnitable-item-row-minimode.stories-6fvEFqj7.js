import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{Xt as t,Zt as n}from"./dist-BesIDOUm.js";import{n as r,t as i}from"./table-demo-helper-tugfAsPO.js";import{t as a}from"./cosmoz-omnitable-C9_kzYAq.js";var o,s,c,l,u;e((()=>{n(),r(),a(),o=i(10,10,10),s={title:`Components/CosmozOmnitableItemRowMiniMode`,component:`cosmoz-omnitable-item-row`},c=e=>t`
    <style>
        .container {
            width: ${e.width||`400px`};
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
        <cosmoz-omnitable .data=${o} mini-breakpoint="9999">
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
`,l=c.bind({}),l.args={width:`400px`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => html\`
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
\``,...l.parameters?.docs?.source}}},u=[`MiniMode`]}))();export{l as MiniMode,u as __namedExportsOrder,s as default};