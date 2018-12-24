import IndexHeader from './src/index-header.vue';

IndexHeader.install = function (Vue) {
  Vue.component(IndexHeader.name, IndexHeader);
};

export default IndexHeader;