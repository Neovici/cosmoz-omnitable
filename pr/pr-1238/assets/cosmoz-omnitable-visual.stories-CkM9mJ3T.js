import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Xt as t,Yt as n}from"./iframe-DHJTShA6.js";import{J as r}from"./dist-D6nHfqDj.js";import{t as i}from"./cosmoz-omnitable-CaqSx5_a.js";import{n as a,t as o}from"./data-Bh8FuB_z.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),t(),i(),a(),s={title:`Visual/CosmozOmnitable`,component:`cosmoz-omnitable`,parameters:{docs:{disable:!0}}},c=o.slice(0,8),l=()=>n`
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
`,u=[...o.filter(e=>e.eyeColor===`blue`).slice(0,3),...o.filter(e=>e.eyeColor===`green`).slice(0,3)],d=()=>n`
    <cosmoz-omnitable
        group-on="eyeColor"
        .data=${u}
        style="width: 600px; height: 480px"
    >
        <cosmoz-omnitable-column
            name="eyeColor"
            title="Eye color"
            value-path="eyeColor"
            width="140px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column
            name="company"
            title="Company"
            value-path="company"
            width="140px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column-number
            name="age"
            title="Age"
            value-path="age"
            width="80px"
        ></cosmoz-omnitable-column-number>
        <cosmoz-omnitable-column
            name="email"
            title="Email"
            value-path="email"
            width="160px"
        ></cosmoz-omnitable-column>
    </cosmoz-omnitable>
`,f=()=>n`
    <cosmoz-omnitable .data=${c} style="width: 600px; height: 400px">
        <cosmoz-omnitable-column
            name="w00"
            title="Column 00"
            value-path="company"
            width="80px"
            min-width="300"
        ></cosmoz-omnitable-column>
        ${Array.from({length:19},(e,t)=>n`<cosmoz-omnitable-column
                    name=${`w`+String(t+1).padStart(2,`0`)}
                    title=${`Column `+String(t+1).padStart(2,`0`)}
                    value-path=${t%2?`age`:`eyeColor`}
                    width="80px"
                    priority=${String(t+1)}
                ></cosmoz-omnitable-column>`)}
    </cosmoz-omnitable>
`,p=o.slice(0,30),m=()=>n`
    <cosmoz-omnitable .data=${p} style="width: 600px; height: 400px">
        <cosmoz-omnitable-column
            name="tall"
            title="Tall"
            value-path="company"
            width="300px"
            .renderCell=${(e,t)=>n`<div
                    style="height: 300px; box-sizing: border-box; overflow: hidden; display: flex; align-items: center; padding-left: 12px"
                >
                    ${t.item.company+` #`+t.index}
                </div>`}
        ></cosmoz-omnitable-column>
    </cosmoz-omnitable>
`,h=[`Hierarchy`,`Grouped`,`Wide`,`TallRowsScrolled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-omnitable
        group-on="eyeColor"
        .data=\${groupedData}
        style="width: 600px; height: 480px"
    >
        <cosmoz-omnitable-column
            name="eyeColor"
            title="Eye color"
            value-path="eyeColor"
            width="140px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column
            name="company"
            title="Company"
            value-path="company"
            width="140px"
        ></cosmoz-omnitable-column>
        <cosmoz-omnitable-column-number
            name="age"
            title="Age"
            value-path="age"
            width="80px"
        ></cosmoz-omnitable-column-number>
        <cosmoz-omnitable-column
            name="email"
            title="Email"
            value-path="email"
            width="160px"
        ></cosmoz-omnitable-column>
    </cosmoz-omnitable>
\``,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-omnitable .data=\${data} style="width: 600px; height: 400px">
        <cosmoz-omnitable-column
            name="w00"
            title="Column 00"
            value-path="company"
            width="80px"
            min-width="300"
        ></cosmoz-omnitable-column>
        \${Array.from({
  length: 19
}, (_, i) => html\`<cosmoz-omnitable-column
                    name=\${'w' + String(i + 1).padStart(2, '0')}
                    title=\${'Column ' + String(i + 1).padStart(2, '0')}
                    value-path=\${i % 2 ? 'age' : 'eyeColor'}
                    width="80px"
                    priority=\${String(i + 1)}
                ></cosmoz-omnitable-column>\`)}
    </cosmoz-omnitable>
\``,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => html\`
    <cosmoz-omnitable .data=\${tallData} style="width: 600px; height: 400px">
        <cosmoz-omnitable-column
            name="tall"
            title="Tall"
            value-path="company"
            width="300px"
            .renderCell=\${(_column, cell) => html\`<div
                    style="height: 300px; box-sizing: border-box; overflow: hidden; display: flex; align-items: center; padding-left: 12px"
                >
                    \${cell.item.company + ' #' + cell.index}
                </div>\`}
        ></cosmoz-omnitable-column>
    </cosmoz-omnitable>
\``,...m.parameters?.docs?.source}}}})))()}g();export{d as Grouped,l as Hierarchy,m as TallRowsScrolled,f as Wide,h as __namedExportsOrder,s as default};