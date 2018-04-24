<template>
    <span class="alter">歌曲暂时不能播放,请稍后重试</span>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
    .alter{
        position: fixed;
        bottom: 30%;
        left: 50%;
        z-index: 999;
        /* width: 180px; */
        height: 60px;
        /* margin-left: -90px; */
        transform: translateX(-50%);
        line-height: 30px;
        text-align: center;
        color: black;
        font-size: 1.2rem;
        background: rgba(0, 255, 255, 0.7) ;
    }
</style>