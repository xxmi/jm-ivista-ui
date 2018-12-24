import ModuleLayout from './src/module-layout.vue';

ModuleLayout.install = function (Vue) {
  Vue.component(ModuleLayout.name, ModuleLayout);
};

export default ModuleLayout;