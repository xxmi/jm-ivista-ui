<template>
    <section :class="['module-layout',customClass]">
        <slot></slot>
    </section>
</template>

<script>
  export default {
    name: 'bs-module-layout',
    props: {
      customClass: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="less" scoped>
    @borderColor: #3263ab;
    // 4个角的图片
    .module-layout {
        display: flex;
        flex: 1;
        flex-direction: column;
        position: relative;
        background: url("./assets/images/module-bg.png") repeat-x;
        background-size: contain;
        border: 1px solid @borderColor;

        &:before {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: block;
            content: '';
            z-index: 0;
            background: url("./assets/images/left-top-corner.png") left top no-repeat,
            url("./assets/images/left-bottom-corner.png") left bottom no-repeat,
            url("./assets/images/right-top-corner.png") right top no-repeat,
            url("./assets/images/right-bottom-corner.png") right bottom no-repeat;
            background-size: .16rem;
        }
    }
</style>