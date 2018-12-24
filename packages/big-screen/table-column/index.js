// 导入组件
import TableColumn from './src/table-column';

// 为组件提供 install 安装方法，供按需映入
TableColumn.install = function (Vue) {
  Vue.component(TableColumn.name, TableColumn);
};

// 导出默认组件
export default TableColumn;