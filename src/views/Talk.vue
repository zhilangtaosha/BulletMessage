<template>
<div class="talk">
  <nav class="nav">
    <div class="ctrls">
      <button :disabled="!isVoice" @click="isVoice = !isVoice">文字</button>
      <button :disabled="isVoice" @click="isVoice = !isVoice">语音</button>
    </div>
    <div class="funcs">
      <button :disabled="!beLate" @click="clickFunc">所有消息</button>
      <button :disabled="beLate" @click="clickFunc">稍后处理</button>
    </div>
    <button class="more">...</button>
  </nav>
  <div class="search">
    <input class="search-input" type="text" placeholder="搜搜精日分子">
  </div>
  <div class="device">
    <button class="manager">多端登录管理</button>
  </div>
  <router-view></router-view>
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Talk extends Vue {
  private isVoice = false
  private beLate = false
  private clickFunc(): void {
    this.beLate = !this.beLate
    if (this.beLate) this.$router.push('/talk/late')
    else this.$router.push('/talk/all')
  }
}
</script>

<style lang='less' scoped>
</style>
