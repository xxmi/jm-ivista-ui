<template>
    <section class="bs-label-title">
        <div class="lt-title">{{title}}</div>
        <div class="lt-right" v-if="showRight">
            <slot></slot>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'bs-label-title',
    props: {
      title: {
        type: String,
        default: ''
      },
      showRight: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style lang="less" scoped>
    .bs-label-title {
        display: flex;
        flex: 0 0 .38rem;
        box-sizing: border-box;
        margin: 0 .18rem;
        z-index: 1;
        background: url("./assets/images/split-line.png") left bottom no-repeat;
        background-size: 100% .01rem;

        > div {
            display: flex;
            flex: 1;
            box-sizing: border-box;

            &.lt-title {
                align-items: center;
                color: #91bdf2;
                font-size: .16rem;
                font-weight: bold;
            }

            &.lt-right {
                flex: 1;
            }
        }
    }
</style>