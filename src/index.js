import ColumnSortable, { setOptions } from "./vue-column-sortable";

const install = function(Vue, options) {
  if(options) setOptions(options);
  Vue.directive('ColumnSortable', ColumnSortable);
};

if (window.Vue) {
  window.ColumnSortable = ColumnSortable;
  window.ColumnSortable.setOptions = setOptions;
  Vue.use(install);
}
ColumnSortable.install = install;

export default ColumnSortable;