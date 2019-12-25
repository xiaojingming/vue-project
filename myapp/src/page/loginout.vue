<template>
  <div class="loginout" style="background:#F0F0F0">
    <van-nav-bar title="用户管理" left-arrow @click-left="onClickLeft" />
    <div class="header">
      <van-cell title="账户管理" is-link />
      <van-cell title="新消息通知" is-link />
      <van-cell title="清除图片缓存" is-link />
      <van-cell title="竞拍浮标设置" is-link />
    </div>
    <div class="footer" style="margin-top:0.2rem;background:#fff">
      <van-cell title="意见反馈" is-link />
      <van-cell title="检查更新" is-link value="当前版本2.9.3" />
      <van-cell title="关于我们" is-link />
      <div class="btn" style="padding:0 0.5rem; background:#fff;margin-top:1.5rem;">
        <van-button type="danger" size="large" @click="loginout()">退出登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push('/mine')
    },
    loginout(){
    localStorage.removeItem('Authorization');
    this.$router.push('/login'); 
    }
  }
};
</script>

<style lang="scss" scoped>
</style>