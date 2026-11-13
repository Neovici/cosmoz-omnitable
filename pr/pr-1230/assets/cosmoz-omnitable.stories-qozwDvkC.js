import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Qt as t,Zt as n}from"./iframe-Cia7VIwH.js";import{t as r}from"./cosmoz-omnitable-BA-BNi3F.js";import{n as i,t as a}from"./data-Bh8FuB_z.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),r(),i(),o=e=>Array.from({length:e},(e,t)=>({company:`Company ${Math.floor(t/100)+1}`,age:20+t%50,eyeColor:[`blue`,`green`,`brown`,`hazel`][t%4],balance:`$${(Math.random()*1e4).toFixed(2)}`,registered:new Date(2020,0,1+t%1e3).toISOString()})),s={title:`Components/CosmozOmnitable`,component:`cosmoz-omnitable`,parameters:{docs:{description:{component:`A data table component with sorting, filtering, grouping.`}}}},c=e=>n`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
                margin-bottom: 60px;
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
            [slot="actions"] button {
                background-color: #1d2939;
                color: #ffffff;
                border: 1px solid #1d2939;
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                font-family: inherit;
                line-height: 1.5;
            }
            [slot="actions"] button:hover {
                background-color: #101828;
                border-color: #101828;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=${a}
                hash-param=${e.hashParam||``}
                sort-on=${e.sortOn||``}
                group-on=${e.groupOn||``}
                ?descending=${e.descending}
                ?group-on-descending=${e.groupOnDescending}
                ?hide-select-all=${e.hideSelectAll}
                ?enable-select-all=${e.enableSelectAll}
                settings-id=${e.settingsId||``}
                ?no-local=${e.noLocal}
                ?no-local-sort=${e.noLocalSort}
                ?no-local-filter=${e.noLocalFilter}
                ?disabled-filtering=${e.disabledFiltering}
                ?loading=${e.loading}
                mini-breakpoint=${e.miniBreakpoint||`768px`}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    `,l=c.bind({}),l.args={},u=c.bind({}),u.args={sortOn:`company`,descending:!1},d=c.bind({}),d.args={groupOn:`eyeColor`,groupOnDescending:!1},f=c.bind({}),f.args={loading:!0},p=c.bind({}),p.args={hideSelectAll:!0},m=c.bind({}),m.args={disabledFiltering:!0},h=e=>n`
        <style>
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <cosmoz-omnitable
            .data=${a}
            ?inline=${!0}
            hash-param=${e.hashParam||``}
            sort-on=${e.sortOn||``}
            group-on=${e.groupOn||``}
            ?descending=${e.descending}
            ?group-on-descending=${e.groupOnDescending}
            ?hide-select-all=${e.hideSelectAll}
            settings-id=${e.settingsId||``}
            ?no-local=${e.noLocal}
            ?no-local-sort=${e.noLocalSort}
            ?no-local-filter=${e.noLocalFilter}
            ?disabled-filtering=${e.disabledFiltering}
            ?loading=${e.loading}
            mini-breakpoint=${e.miniBreakpoint||`768px`}
        >
            <cosmoz-omnitable-column
                name="company"
                title="Company"
                value-path="company"
                sort-on="company"
                group-on="company"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="age"
                title="Age"
                value-path="age"
                sort-on="age"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="eyeColor"
                title="Eye Color"
                value-path="eyeColor"
                sort-on="eyeColor"
                group-on="eyeColor"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="balance"
                title="Balance"
                value-path="balance"
                sort-on="balance"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="registered"
                title="Registered"
                value-path="registered"
                sort-on="registered"
            >
            </cosmoz-omnitable-column>

            <button slot="bottom-bar-toolbar">Approve</button>
        </cosmoz-omnitable>
    `,g=h.bind({}),g.args={},g.parameters={docs:{description:{story:`Inline mode: the omnitable expands to show all rows without internal scrolling. The page itself scrolls instead.`}}},_=h.bind({}),_.args={disabledFiltering:!0},_.parameters={docs:{description:{story:`Inline mode with disabled filtering, suitable for search results where all rows are shown without internal scrolling.`}}},v=e=>n`
    <style>
        .omnitable-container {
            height: calc(80vh - 60px);
            margin-bottom: 60px;
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
            .data=${e.data}
            .allItemsCount=${e.allItemsCount}
            ?enable-select-all=${e.enableSelectAll}
        >
            <cosmoz-omnitable-column
                name="company"
                title="Company"
                value-path="company"
                sort-on="company"
                group-on="company"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="age"
                title="Age"
                value-path="age"
                sort-on="age"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="eyeColor"
                title="Eye Color"
                value-path="eyeColor"
                sort-on="eyeColor"
                group-on="eyeColor"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="balance"
                title="Balance"
                value-path="balance"
                sort-on="balance"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="registered"
                title="Registered"
                value-path="registered"
                sort-on="registered"
            >
            </cosmoz-omnitable-column>

            <button slot="bottom-bar-toolbar">Approve</button>
        </cosmoz-omnitable>
    </div>
`,y=v.bind({}),y.args={data:o(100),allItemsCount:1e4,enableSelectAll:!1},b=v.bind({}),b.args={data:o(100),allItemsCount:1e4,enableSelectAll:!0},x=[`Default`,`Sorting`,`Grouping`,`Loading`,`HideSelectAll`,`DisabledFiltering`,`Inline`,`InlineDisabledFiltering`,`SelectAll`,`BulkSelectAll`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
                margin-bottom: 60px;
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
            [slot="actions"] button {
                background-color: #1d2939;
                color: #ffffff;
                border: 1px solid #1d2939;
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                font-family: inherit;
                line-height: 1.5;
            }
            [slot="actions"] button:hover {
                background-color: #101828;
                border-color: #101828;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                ?enable-select-all=\${args.enableSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?disabled-filtering=\${args.disabledFiltering}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
                margin-bottom: 60px;
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
            [slot="actions"] button {
                background-color: #1d2939;
                color: #ffffff;
                border: 1px solid #1d2939;
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                font-family: inherit;
                line-height: 1.5;
            }
            [slot="actions"] button:hover {
                background-color: #101828;
                border-color: #101828;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                ?enable-select-all=\${args.enableSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?disabled-filtering=\${args.disabledFiltering}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
                margin-bottom: 60px;
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
            [slot="actions"] button {
                background-color: #1d2939;
                color: #ffffff;
                border: 1px solid #1d2939;
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                font-family: inherit;
                line-height: 1.5;
            }
            [slot="actions"] button:hover {
                background-color: #101828;
                border-color: #101828;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                ?enable-select-all=\${args.enableSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?disabled-filtering=\${args.disabledFiltering}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
                margin-bottom: 60px;
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
            [slot="actions"] button {
                background-color: #1d2939;
                color: #ffffff;
                border: 1px solid #1d2939;
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                font-family: inherit;
                line-height: 1.5;
            }
            [slot="actions"] button:hover {
                background-color: #101828;
                border-color: #101828;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                ?enable-select-all=\${args.enableSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?disabled-filtering=\${args.disabledFiltering}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
                margin-bottom: 60px;
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
            [slot="actions"] button {
                background-color: #1d2939;
                color: #ffffff;
                border: 1px solid #1d2939;
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                font-family: inherit;
                line-height: 1.5;
            }
            [slot="actions"] button:hover {
                background-color: #101828;
                border-color: #101828;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                ?enable-select-all=\${args.enableSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?disabled-filtering=\${args.disabledFiltering}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            .omnitable-container {
                height: calc(80vh - 60px);
                display: flex;
                flex-direction: column;
                margin-bottom: 60px;
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
            [slot="actions"] button {
                background-color: #1d2939;
                color: #ffffff;
                border: 1px solid #1d2939;
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                font-family: inherit;
                line-height: 1.5;
            }
            [slot="actions"] button:hover {
                background-color: #101828;
                border-color: #101828;
            }
        </style>
        <div class="omnitable-container">
            <cosmoz-omnitable
                .data=\${demoData}
                hash-param=\${args.hashParam || ''}
                sort-on=\${args.sortOn || ''}
                group-on=\${args.groupOn || ''}
                ?descending=\${args.descending}
                ?group-on-descending=\${args.groupOnDescending}
                ?hide-select-all=\${args.hideSelectAll}
                ?enable-select-all=\${args.enableSelectAll}
                settings-id=\${args.settingsId || ''}
                ?no-local=\${args.noLocal}
                ?no-local-sort=\${args.noLocalSort}
                ?no-local-filter=\${args.noLocalFilter}
                ?disabled-filtering=\${args.disabledFiltering}
                ?loading=\${args.loading}
                mini-breakpoint=\${args.miniBreakpoint || '768px'}
            >
                <cosmoz-omnitable-column
                    name="company"
                    title="Company"
                    value-path="company"
                    sort-on="company"
                    group-on="company"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="age"
                    title="Age"
                    value-path="age"
                    sort-on="age"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="eyeColor"
                    title="Eye Color"
                    value-path="eyeColor"
                    sort-on="eyeColor"
                    group-on="eyeColor"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="balance"
                    title="Balance"
                    value-path="balance"
                    sort-on="balance"
                >
                </cosmoz-omnitable-column>

                <cosmoz-omnitable-column
                    name="registered"
                    title="Registered"
                    value-path="registered"
                    sort-on="registered"
                >
                </cosmoz-omnitable-column>

                <div slot="actions">
                    <button>Export</button>
                    <button>Settings</button>
                </div>
            </cosmoz-omnitable>
        </div>
    \`;
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <cosmoz-omnitable
            .data=\${demoData}
            ?inline=\${true}
            hash-param=\${args.hashParam || ''}
            sort-on=\${args.sortOn || ''}
            group-on=\${args.groupOn || ''}
            ?descending=\${args.descending}
            ?group-on-descending=\${args.groupOnDescending}
            ?hide-select-all=\${args.hideSelectAll}
            settings-id=\${args.settingsId || ''}
            ?no-local=\${args.noLocal}
            ?no-local-sort=\${args.noLocalSort}
            ?no-local-filter=\${args.noLocalFilter}
            ?disabled-filtering=\${args.disabledFiltering}
            ?loading=\${args.loading}
            mini-breakpoint=\${args.miniBreakpoint || '768px'}
        >
            <cosmoz-omnitable-column
                name="company"
                title="Company"
                value-path="company"
                sort-on="company"
                group-on="company"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="age"
                title="Age"
                value-path="age"
                sort-on="age"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="eyeColor"
                title="Eye Color"
                value-path="eyeColor"
                sort-on="eyeColor"
                group-on="eyeColor"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="balance"
                title="Balance"
                value-path="balance"
                sort-on="balance"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="registered"
                title="Registered"
                value-path="registered"
                sort-on="registered"
            >
            </cosmoz-omnitable-column>

            <button slot="bottom-bar-toolbar">Approve</button>
        </cosmoz-omnitable>
    \`;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  return html\`
        <style>
            cosmoz-omnitable-item-row {
                border-bottom: 1px solid #e1e2e5;
            }
            cosmoz-omnitable-header-row {
                border-bottom: 1px solid #e1e2e5;
            }
        </style>
        <cosmoz-omnitable
            .data=\${demoData}
            ?inline=\${true}
            hash-param=\${args.hashParam || ''}
            sort-on=\${args.sortOn || ''}
            group-on=\${args.groupOn || ''}
            ?descending=\${args.descending}
            ?group-on-descending=\${args.groupOnDescending}
            ?hide-select-all=\${args.hideSelectAll}
            settings-id=\${args.settingsId || ''}
            ?no-local=\${args.noLocal}
            ?no-local-sort=\${args.noLocalSort}
            ?no-local-filter=\${args.noLocalFilter}
            ?disabled-filtering=\${args.disabledFiltering}
            ?loading=\${args.loading}
            mini-breakpoint=\${args.miniBreakpoint || '768px'}
        >
            <cosmoz-omnitable-column
                name="company"
                title="Company"
                value-path="company"
                sort-on="company"
                group-on="company"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="age"
                title="Age"
                value-path="age"
                sort-on="age"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="eyeColor"
                title="Eye Color"
                value-path="eyeColor"
                sort-on="eyeColor"
                group-on="eyeColor"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="balance"
                title="Balance"
                value-path="balance"
                sort-on="balance"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="registered"
                title="Registered"
                value-path="registered"
                sort-on="registered"
            >
            </cosmoz-omnitable-column>

            <button slot="bottom-bar-toolbar">Approve</button>
        </cosmoz-omnitable>
    \`;
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => html\`
    <style>
        .omnitable-container {
            height: calc(80vh - 60px);
            margin-bottom: 60px;
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
            .data=\${args.data}
            .allItemsCount=\${args.allItemsCount}
            ?enable-select-all=\${args.enableSelectAll}
        >
            <cosmoz-omnitable-column
                name="company"
                title="Company"
                value-path="company"
                sort-on="company"
                group-on="company"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="age"
                title="Age"
                value-path="age"
                sort-on="age"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="eyeColor"
                title="Eye Color"
                value-path="eyeColor"
                sort-on="eyeColor"
                group-on="eyeColor"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="balance"
                title="Balance"
                value-path="balance"
                sort-on="balance"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="registered"
                title="Registered"
                value-path="registered"
                sort-on="registered"
            >
            </cosmoz-omnitable-column>

            <button slot="bottom-bar-toolbar">Approve</button>
        </cosmoz-omnitable>
    </div>
\``,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => html\`
    <style>
        .omnitable-container {
            height: calc(80vh - 60px);
            margin-bottom: 60px;
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
            .data=\${args.data}
            .allItemsCount=\${args.allItemsCount}
            ?enable-select-all=\${args.enableSelectAll}
        >
            <cosmoz-omnitable-column
                name="company"
                title="Company"
                value-path="company"
                sort-on="company"
                group-on="company"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="age"
                title="Age"
                value-path="age"
                sort-on="age"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="eyeColor"
                title="Eye Color"
                value-path="eyeColor"
                sort-on="eyeColor"
                group-on="eyeColor"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="balance"
                title="Balance"
                value-path="balance"
                sort-on="balance"
            >
            </cosmoz-omnitable-column>

            <cosmoz-omnitable-column
                name="registered"
                title="Registered"
                value-path="registered"
                sort-on="registered"
            >
            </cosmoz-omnitable-column>

            <button slot="bottom-bar-toolbar">Approve</button>
        </cosmoz-omnitable>
    </div>
\``,...b.parameters?.docs?.source}}}})))()}S();export{b as BulkSelectAll,l as Default,m as DisabledFiltering,d as Grouping,p as HideSelectAll,g as Inline,_ as InlineDisabledFiltering,f as Loading,y as SelectAll,u as Sorting,x as __namedExportsOrder,s as default};