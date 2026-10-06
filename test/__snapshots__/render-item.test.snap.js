/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots['render-item renderers renderItem'] = `<div>
  <div
    class="itemRow"
    part="itemRow itemRow-7 custom-part"
    selected=""
  >
    <div
      class="itemRow-wrapper"
      part="itemRow-wrapper"
    >
      <input
        class="checkbox"
        part="checkbox"
        type="checkbox"
      >
      <cosmoz-omnitable-item-row part="itemRow-inner">
        <div
          align="left"
          class="cell itemRow-cell"
          name="name"
          part="cell itemRow-cell cell-name itemRow-cell-name"
          title="Name"
        >
          <span>
            Foo #7
          </span>
        </div>
      </cosmoz-omnitable-item-row>
      <button class="expand">
      </button>
    </div>
    <div
      class="itemRow-minis"
      part="item-minis"
    >
      <div
        class="itemRow-mini"
        part="item-mini item-mini-name"
      >
        <span>
          Foo #7
        </span>
      </div>
    </div>
  </div>
  <cosmoz-omnitable-item-expand
    part="item-expand"
    selected=""
  >
    <cosmoz-omnitable-item-expand-line exportparts="item-expand-label, item-expand-value">
      <span>
        Foo #
      </span>
    </cosmoz-omnitable-item-expand-line>
  </cosmoz-omnitable-item-expand>
</div>
`;
/* end snapshot render-item renderers renderItem */

snapshots['render-item renderers renderGroup'] = `<div>
  <div
    class="groupRow"
    part="groupRow groupRow-2"
  >
    <input
      class="checkbox"
      type="checkbox"
    >
    <h3 class="groupRow-label">
      <div>
        <span>
          Name
        </span>
        :
      </div>
      <cosmoz-omnitable-group-row>
        <span>
          Foo #
        </span>
      </cosmoz-omnitable-group-row>
    </h3>
    <div class="groupRow-badge">
      1
    </div>
    <button class="expand">
    </button>
  </div>
</div>
`;
/* end snapshot render-item renderers renderGroup */
