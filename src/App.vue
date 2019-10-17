<template>
<div id="app">
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    /*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
    // background: #1F2D3D;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
}

#app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}

.el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}

.toolbar {
    background: #f2f2f2;
    padding: 10px;
    //border:1px solid #dfe6ec;
    margin: 10px 0;
    .el-form-item {
        margin-bottom: 10px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

/* // 竖向滚动条 */
.el-scrollbar::-webkit-scrollbar,
.is-scroll-left::-webkit-scrollbar,
.is-scroll-right::-webkit-scrollbar {
  width: 4px;
  height: 8px !important;
}

/*滚动条的背景区域的内阴影*/
.el-scrollbar::-webkit-scrollbar-track {
  //  box-shadow:0px 1px 3px rgba(0,0,0,0.3) inset;
  /*滚动条的背景区域的圆角*/
  border-radius: 10px;
  /*滚动条的背景颜色*/
  background-color: #ddd;
}

/*滑块 滚动条的内阴影*/
.el-scrollbar::-webkit-scrollbar-thumb,
.is-scroll-left::-webkit-scrollbar-thumb,
.is-scroll-right::-webkit-scrollbar-thumb {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) inset;
  background-color: #FF6C60;
  border-radius: 4px;
}

/* // 横向滚动条 */
::-webkit-scrollbar:horizontal {
  width: 0;
  height: 10px !important;
}

::-webkit-scrollbar-track:horizontal {
  background-color: #fff;
}

</style>
