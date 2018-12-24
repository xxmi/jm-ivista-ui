<template>
    <div id="app">
        <div class="app-table">
            <CnXxmiTable ref="vehicleTable"
                         :data="list">
                <CnXxmiTableColumn
                        label="序号"
                        prop="xh"
                        flex="1 1 .47rem">
                                <span slot-scope="{row,column,$index}">
                                    {{$index+1}}
                                </span>
                </CnXxmiTableColumn>
                <CnXxmiTableColumn
                        label="姓名"
                        prop="name"
                        flex="0 0 1.32rem"
                        width="100rem">
                </CnXxmiTableColumn>
            </CnXxmiTable>
        </div>
    </div>
</template>

<script>


  export default {
    name: 'app',
    components: {},
    data () {
      return {
        list: [
          {name: '张三1'},
          {name: '张三2'},
          {name: '张三3'}
        ]
      };
    }
  };
</script>

<style lang="less">
    html {
        width: 100%;
        height: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .app-table {
        display: flex;
        flex: 1;
        height: 300px;
        border: 1px solid red;
    }
</style>
