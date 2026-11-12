import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Xt as t,Yt as n}from"./iframe-DQjXE101.js";import{J as r}from"./dist-CQZtc1Sh.js";import{t as i}from"./cosmoz-omnitable-CV_8ydu_.js";import{n as a,t as o}from"./data-Bh8FuB_z.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{r(),t(),i(),a(),s={title:`Visual/CosmozOmnitable`,component:`cosmoz-omnitable`,parameters:{docs:{disable:!0}}},c=o.slice(0,8),l=Array.from({length:30},(e,t)=>({company:`Company ${t}`,eyeColor:[`green`,`blue`,`brown`][t%3],age:18+t%40,balance:(t+1)*137.41,email:`user${t}@example.com`})),u=()=>n`
    <cosmoz-omnitable .data=${c} style="width: 600px; height: 480px">
        <cosmoz-omnitable-column
            name="company"
            title="Company"
            value-path="company"
            width="120px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column-autocomplete
            name="eyeColor"
            title="Eye color"
            value-path="eyeColor"
            width="120px"
        ></cosmoz-omnitable-column-autocomplete>
        <cosmoz-omnitable-column-number
            name="age"
            title="Age"
            value-path="age"
            width="120px"
        ></cosmoz-omnitable-column-number>
        <cosmoz-omnitable-column
            name="balance"
            title="Balance"
            value-path="balance"
            width="120px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column
            name="email"
            title="Email"
            value-path="email"
            priority="-1"
            width="200px"
        ></cosmoz-omnitable-column>
        <cosmoz-button slot="actions" size="sm">Export</cosmoz-button>
    </cosmoz-omnitable>
`,d=()=>n`
    <cosmoz-omnitable .data=${l} style="width: 600px; height: 480px">
        <cosmoz-omnitable-column
            name="company"
            title="Company"
            value-path="company"
            width="120px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column-autocomplete
            name="eyeColor"
            title="Eye color"
            value-path="eyeColor"
            width="120px"
        ></cosmoz-omnitable-column-autocomplete>
        <cosmoz-omnitable-column-number
            name="age"
            title="Age"
            value-path="age"
            width="120px"
        ></cosmoz-omnitable-column-number>
        <cosmoz-omnitable-column
            name="balance"
            title="Balance"
            value-path="balance"
            width="120px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column
            name="email"
            title="Email"
            value-path="email"
            priority="-1"
            width="200px"
        ></cosmoz-omnitable-column>
    </cosmoz-omnitable>
`,f=[`Hierarchy`,`Rows`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-omnitable .data=\${data} style="width: 600px; height: 480px">
        <cosmoz-omnitable-column
            name="company"
            title="Company"
            value-path="company"
            width="120px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column-autocomplete
            name="eyeColor"
            title="Eye color"
            value-path="eyeColor"
            width="120px"
        ></cosmoz-omnitable-column-autocomplete>
        <cosmoz-omnitable-column-number
            name="age"
            title="Age"
            value-path="age"
            width="120px"
        ></cosmoz-omnitable-column-number>
        <cosmoz-omnitable-column
            name="balance"
            title="Balance"
            value-path="balance"
            width="120px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column
            name="email"
            title="Email"
            value-path="email"
            priority="-1"
            width="200px"
        ></cosmoz-omnitable-column>
        <cosmoz-button slot="actions" size="sm">Export</cosmoz-button>
    </cosmoz-omnitable>
\``,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-omnitable .data=\${rowsData} style="width: 600px; height: 480px">
        <cosmoz-omnitable-column
            name="company"
            title="Company"
            value-path="company"
            width="120px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column-autocomplete
            name="eyeColor"
            title="Eye color"
            value-path="eyeColor"
            width="120px"
        ></cosmoz-omnitable-column-autocomplete>
        <cosmoz-omnitable-column-number
            name="age"
            title="Age"
            value-path="age"
            width="120px"
        ></cosmoz-omnitable-column-number>
        <cosmoz-omnitable-column
            name="balance"
            title="Balance"
            value-path="balance"
            width="120px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column
            name="email"
            title="Email"
            value-path="email"
            priority="-1"
            width="200px"
        ></cosmoz-omnitable-column>
    </cosmoz-omnitable>
\``,...d.parameters?.docs?.source}}}})))()}p();export{u as Hierarchy,d as Rows,f as __namedExportsOrder,s as default};