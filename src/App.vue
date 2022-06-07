<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view />
    <h1>黑马头条</h1>
    <div>
      <i class="toutiao toutiao-shipin"></i>
      <van-button type="primary">主要按钮</van-button>
      <div class="box">hello world</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
.box {
  width: 200px;
  height: 100px;
  background-color: pink;
}
</style>
