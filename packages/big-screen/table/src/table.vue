<template>
    <div class="cn-xxmi-table">
        <div class="hidden-columns">
            <slot></slot>
        </div>
        <div class="cx-table-header" :class="store.overflowY ? 'overflowY':''">
            <div class="header-th"
                 v-for="(column,index) in columns"
                 :key="'th'+index"
                 :style="{'flex': column.flex}">
                <div class="cell" :style="{width: column.width}">{{column.label}}</div>
            </div>
        </div>
        <TableBody :class="store.overflowY ? 'overflowY':''" :store="store"></TableBody>
    </div>
</template>

<script>
  import TableBody from './table-body.js';

  export default {
    name: 'bs-table',
    components: {
      TableBody
    },
    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data () {
      const _this = this;
      return {
        tableId: `table_id_${Math.ceil(Math.random() * 99999)}`,
        store: {
          overflowY: false, // 是否有滚动条
          data: [],
          columns: [],
          currentRow: null, // 当前选中的行
          insertColumn (data) {
            this.columns.push(data);
          },
          setCurrentRow (event, row) {
            const oldCurrentRow = this.currentRow;
            this.currentRow = row;
            if (oldCurrentRow !== row) {
              _this.$emit('current-change', event, row, oldCurrentRow);
            }
          }
        }
      };
    },
    watch: {
      data: {
        immediate: true,
        handler () {
          this.store.data = [];
          this.store.data = this.data;
        }
      }
    },
    computed: {
      columns () {
        return this.store.columns;
      }
    },
    created () {
      this.store.data = this.data;
    },
    methods: {
      /**
       * 选中某一行
       * @param event
       * @param row
       */
      selectedRow (event = null, row = null) {
        this.store.setCurrentRow(event, row);
      }
    }
  };
</script>
<style lang="less">
    @import "../../../../src/assets/css/global.less";

    .cn-xxmi-table {
        display: flex;
        flex: 1;
        flex-direction: column;
        box-sizing: border-box;

        .hidden-columns {
            visibility: hidden;
            position: absolute;
            z-index: -1;
        }

        .th-td-padding {
            padding: 0 .08rem;
        }

        .cx-table-header {
            display: flex;
            flex: 0 0 .28rem;
            flex-direction: row;
            box-sizing: border-box;
            border: 1px solid transparent;
            background-color: #142a58;

            &.overflowY {
                padding-right: .12rem;
            }

            > div.header-th {
                display: flex;
                color: #7eadef;
                font-size: .14rem;
                align-items: center;
                box-sizing: border-box;

                > div.cell {
                    .th-td-padding;
                    box-sizing: border-box;
                    .ellipsis;
                }
            }
        }

        .cx-table-body {
            display: flex;
            flex: 1;
            flex-direction: column;
            position: relative;

            > div.body-box {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                overflow-y: hidden;

                // 滚动条凹槽的颜色，还可以设置边框属性
                &::-webkit-scrollbar-track-piece {
                    background-color: #192e5e;
                }

                // 滚动条的宽度
                &::-webkit-scrollbar {
                    width: .12rem;
                    height: .12rem;
                }

                // 滚动条的设置
                &::-webkit-scrollbar-thumb {
                    background-color: transparent;
                    background-clip: padding-box;
                    min-height: .28rem;
                }

                // 滚动条:hover
                &::-webkit-scrollbar-thumb:hover {
                    background-color: white;
                }

                > div.row {
                    display: flex;
                    flex: 0 0 .28rem;
                    box-sizing: border-box;
                    border: 1px solid transparent;
                    /*border: 1px solid red;*/

                    > div.column {
                        display: flex;
                        box-sizing: border-box;
                        align-items: center;
                        background-color: #192e5e;
                        color: #cce3ff;
                        font-size: .14rem;

                        > div.cell {
                            .th-td-padding;
                            box-sizing: border-box;
                            .ellipsis;
                        }
                    }

                    &.active,
                    &:hover {
                        border-color: #00a0e9;
                        cursor: pointer;

                        > div.column {
                            background-color: #1e3f87;
                        }
                    }

                    &.active {
                        margin: 0.02rem 0;
                    }
                }
            }

            &.overflowY {
                div.body-box {
                    overflow-y: auto;
                }
            }
        }
    }
</style>