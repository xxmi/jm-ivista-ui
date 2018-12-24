import SearchInput from './src/search-input.vue';

SearchInput.install = function (Vue) {
  Vue.component(SearchInput.name, SearchInput);
};

export default SearchInput;