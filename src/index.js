import Table from '../packages/table';
import TableColumn from '../packages/table-column';

// 组件
const components = {
  Table,
  TableColumn
};

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否可以安装
  if (install.installed) {
    return;
  }

  for (const component of Object.values(components)) {
    Vue.component(component.name, component);
  }
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.vue) {
  install(window.vue);
}

const Api = {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
};

export default Api;