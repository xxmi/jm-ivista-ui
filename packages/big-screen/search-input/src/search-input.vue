<template>
    <div class="bs-search-input">
        <div class="box">
            <div class="text">
                <input type="text" :value="value"
                       @input="$emit('input',$event.target.value)"
                       @keyup.enter="$emit('click')"
                       placeholder="搜索">
            </div>
            <div class="si-icon" @click="$emit('click')"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bs-search-input',
    props: ['value']
  };
</script>

<style lang="less" scoped>
    .bs-search-input {
        display: flex;
        flex: 1;
        flex-direction: row-reverse;
        align-items: center;

        .box {
            position: relative;
            display: flex;
            width: 1.82rem;
            height: .27rem;
            border-left: 1px solid #2e457f;
            border-right: 1px solid #2e457f;

            &:before,
            &:after {
                display: block;
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                width: .03rem;
                border-top: 1px solid #2e457f;
                border-bottom: 1px solid #2e457f;;
            }

            &:before {
                left: 0;
            }

            &:after {
                right: 0;
            }

            > div.text,
            > div.si-icon {
                display: flex;
                box-sizing: border-box;

                &.text {
                    flex: 1;

                    > input {
                        width: 100%;
                        height: 100%;
                        padding: 0 .1rem;
                        border: transparent;
                        background: transparent;
                        color: #7eade5;
                        font-size: .14rem;
                        outline: transparent;

                        &:hover, &:focus, &:active {
                            border: transparent;
                        }

                        &::placeholder {
                            color: #7eade5;
                        }
                    }
                }

                &.si-icon {
                    flex: 0 0 .29rem;
                    background: url("./assets/images/search-icon.png") center center no-repeat;
                    background-size: .16rem .16rem;
                    cursor: pointer;
                }
            }
        }
    }
</style>