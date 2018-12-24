import BSLayout from '../packages/big-screen/layout';
import BSModuleLayout from '../packages/big-screen/module-layout';
import BSIndexHeader from '../packages/big-screen/index-header';
import BSLabelTitle from '../packages/big-screen/label-title';
import BSSearchInput from '../packages/big-screen/search-input';
import BSTable from '../packages/big-screen/table';
import BSTableColumn from '../packages/big-screen/table-column';

// 组件
const components = {
  BSLayout,
  BSModuleLayout,
  BSIndexHeader,
  BSLabelTitle,
  BSSearchInput,
  BSTable,
  BSTableColumn
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