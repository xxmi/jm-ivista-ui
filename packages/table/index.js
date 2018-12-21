// 导入组件
import Table from './src/cn-xxmi-table.vue';

// 为组件提供 install 安装方法，供按需映入
Table.install = function (Vue) {
  Vue.component(Table.name, Table);
};

// 导出默认组件
export default Table;