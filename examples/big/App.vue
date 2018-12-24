<template>
    <bs-layout>
        <section class="up-container">
            <section class="uc-left-container">
                <bs-module-layout>
                    <bs-label-title title="预约测试申请数"
                                    show-right>
                        <bs-search-input v-model="name"/>
                    </bs-label-title>
                    <bs-table
                            :data="tableData">
                        <bs-table-column
                                label="序号"
                                prop="xh"
                                flex="1 1 .47rem">
                                <span slot-scope="{row,column,$index}">
                                    {{$index+1}}
                                </span>
                        </bs-table-column>
                        <bs-table-column
                                label="姓名"
                                prop="name"
                                flex="0 0 1.32rem"
                                width="1.32rem">
                        </bs-table-column>
                    </bs-table>
                </bs-module-layout>
            </section>
            <section class="uc-middle-container">
                <bs-index-header/>
            </section>
            <section class="uc-right-container"></section>
        </section>

        <section class="down-container">

        </section>
    </bs-layout>
</template>

<script>


  export default {
    name: 'app',
    components: {},
    data () {
      return {
        name: '',
        tableData: [
          {name: '张三1'},
          {name: '张三2'},
          {name: '张三3'}
        ]
      };
    },
    mounted () {
    }
  };
</script>

<style lang="less" src="./assets/css/big-screen.less"></style>
