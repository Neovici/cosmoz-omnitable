/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots['render-list error'] = `<div
  class="tableContent"
  id="tableContent"
>
  <div class="overlay tableContent-empty">
    <div class="tableContent-empty-message">
      <h3>
        Error loading data
      </h3>
      <p>
        An error occurred
      </p>
    </div>
  </div>
  <div
    class="tableContent-scroller"
    id="scroller"
    part="scroller"
  >
    <cosmoz-grouped-list id="groupedList">
    </cosmoz-grouped-list>
    <slot name="extraContent">
    </slot>
  </div>
</div>
`;
/* end snapshot render-list error */
