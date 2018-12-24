import {getPropByPath} from '../../../../src/utils/el-util.js';

export default {
  name: 'bs-table-column',
  props: {
    label: String,
    flex: {
      type: String,
      default: '1'
    },
    property: String,
    prop: String,
    width: String,
    showOverflowTooltip: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    owner () {
      let parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    }
  },
  created () {
    const _self = this;
    this.$options.render = h => h('div', this.$slots.default);
    const column = {
      label: this.label || '',
      flex: this.flex,
      width: this.width,
      property: this.prop || this.property,
      showOverflowTooltip: this.showOverflowTooltip,
      renderCell: null
    };

    let renderCell = column.renderCell;
    column.renderCell = function (h, data) {
      if (_self.$scopedSlots.default) {
        renderCell = () => _self.$scopedSlots.default(data);
      }
      if (!renderCell) {
        renderCell = (h, {row, column, $index}) => {
          const property = column.property;
          const value = property && getPropByPath(row, property).v;
          if (column && column.formatter) {
            return column.formatter(row, column, value, $index);
          }
          return value;
        };
      }
      return renderCell(h, data);
    };
    this.columnConfig = column;
  },
  mounted () {
    const owner = this.owner;
    owner.store.insertColumn(this.columnConfig);
  }
};