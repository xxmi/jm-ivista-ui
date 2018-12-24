<template>
    <section class="bs-index-header">
        <div :class="logoClazz"/>
    </section>
</template>

<script>
  export default {
    name: 'bs-index-header',
    props: {
      logoClass: {
        type: String,
        default: ''
      }
    },
    computed: {
      logoClazz () {
        const clazz = ['big-logo'];
        clazz.push(this.logoClass ? this.logoClass : 'default-logo');
        return clazz;
      }
    }
  };
</script>

<style lang="less" scoped>
    .bs-index-header {
        display: flex;
        flex: 0 0 1.11rem;
        position: relative;
        background: url("./assets/images/big_header_bg.png") repeat-x;
        background-size: contain;

        &:before,
        &:after {
            display: block;
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 2.03rem;
        }

        &:before {
            left: 0;
            background: url("./assets/images/big_header_bg_left.png") no-repeat;
            background-size: 100% 100%;
            background-color: #0F162B;
        }

        &:after {
            right: 0;
            background: url("./assets/images/big_header_bg_right.png") no-repeat;
            background-size: 100% 100%;
            background-color: #0F162B;
        }

        > div.big-logo {
            display: flex;
            flex: 1;
            z-index: 1;

            &.default-logo {
                background: url("./assets/images/big_logo.png") center center no-repeat;
                background-size: 5.37rem .6rem;
            }
        }
    }
</style>