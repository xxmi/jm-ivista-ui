import {getStyle, hasClass} from '../../../src/utils/el-dom';
import {debounce} from 'throttle-debounce';

export default {
  name: 'CnXxmiTableBody',
  props: {
    store: {
      required: true
    }
  },
  components: {
    // ElTooltip
  },
  data () {
    return {tooltipContent: '', bodyId: `body_id_${Math.ceil(Math.random() * 99999999)}`};
  },
  watch: {
    'store.data' () {
      this.handlerOverlayY();
    }
  },
  create () {
    this.activateTooltip = debounce(50, tooltip => tooltip.handleShowPopper());
  },
  render (createElement) {
    // const data = this.data;
    return (
      <div class="cx-table-body">
        <div class="body-box" id={this.bodyId}>
          {
            this._l(this.data, (row, $index) =>
              [<div class={[this.getRowClass(row, $index)]}
                    on-click={($event) => this.handleClick($event, row)}>
                {
                  this._l(this.columns, (column) => {
                    return (
                      <div class="column el-tooltip" style={{'flex': column.flex}}
                           on-mouseenter={($event) => this.handleCellMouseEnter($event, row)}
                           on-mouseleave={this.handleCellMouseLeave}>
                        <div class="cell" style={{'width': column.width}}>
                          {
                            column.renderCell.call(this._renderProxy, createElement, {
                              row,
                              column,
                              $index,
                              store: this.store
                            })
                          }
                        </div>
                      </div>
                    );
                  })
                }
              </div>
              ]
            ).concat(
              <el-tooltip effect={this.table.tooltipEffect} placement="top" ref="tooltip"
                          content={this.tooltipContent}></el-tooltip>
            )
          }
        </div>
      </div>);
  },
  computed: {
    table () {
      return this.$parent;
    },
    data () {
      return this.store.data;
    },
    columns () {
      return this.store.columns;
    },
    columnsCount () {
      return this.store.columns.length;
    }
  },
  mounted () {
  },
  methods: {
    handlerOverlayY () {
      this.$nextTick(() => {
        window.setTimeout(() => {
          const el = document.getElementById(this.bodyId);
          this.store.overflowY = el.scrollHeight > el.clientHeight || el.offsetHeight > el.clientHeight;
        }, 100);
      });
    },
    handleClick (event, row) {
      this.store.setCurrentRow(event, row);
    },
    getRowClass (row) {
      const currentRow = this.store.currentRow;
      return ['row', currentRow === row ? 'active' : ''];
    },
    handleCellMouseEnter (event) {
      // 判断是否text-overflow, 如果是就显示tooltip
      const cellChild = event.target.querySelector('.cell');
      if (!(hasClass(event.target, 'el-tooltip') && cellChild.childNodes.length)) {
        return;
      }
      // use range width instead of scrollWidth to determine whether the text is overflowing
      // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
      const range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      const padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) +
        (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0);
      if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
        const tooltip = this.$refs.tooltip;
        // TODO 会引起整个 Table 的重新渲染，需要优化
        this.tooltipContent = cellChild.innerText || cellChild.textContent;
        tooltip.referenceElm = cellChild;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        window.setTimeout(() => {
          tooltip.handleShowPopper();
        }, 50);
      }
    },
    handleCellMouseLeave () {
      const tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
    }
  }
};