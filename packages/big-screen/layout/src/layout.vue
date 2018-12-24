<template>
    <section class="big-screen">
        <slot></slot>
    </section>
</template>

<script>
  export default {
    name: 'bs-layout',
    mounted () {
      this.$nextTick(async () => {
        const standardWidth = 1920; // 标准宽
        const standardHeight = 1080; // 标注高
        const standardFontSize = 100; // 标准字体大小

        const computedDeviceWidth = () => {
          const elHtml = document.getElementsByTagName('html')[0];
          // 浏览器（可视区域）：宽
          const width = document.documentElement.clientWidth || document.body.clientWidth;
          // 浏览器（可视区域）：高
          const height = document.documentElement.clientHeight || document.body.clientHeight;
          // width/standardWidth = 浏览器的宽与标准宽的比例
          const widthScale = width / standardWidth;
          // height/standardHeight = 浏览器的高与标准高的比例
          const heightScale = height / standardHeight;

          // 取最小的比例
          const scale = widthScale > heightScale ? heightScale : widthScale;
          const fontSize = Math.floor(standardFontSize * scale * 1000) / 1000;
          elHtml.setAttribute('style', `font-size: ${fontSize}px`);
        };
        computedDeviceWidth();
        window.onresize = () => {
          computedDeviceWidth();
        };
      });
    }
  };
</script>

<style lang="less" src="./assets/css/big-screen.less"></style>