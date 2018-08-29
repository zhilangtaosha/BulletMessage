<template>
<div class="talk">
  <nav class="nav">
    <div class="ctrls">
      <button :disabled="!isVoice" @click="isVoice = !isVoice">文字</button>
      <button :disabled="isVoice" @click="isVoice = !isVoice">语音</button>
    </div>
    <div class="funcs">
      <button :disabled="type === 0" @click="clickFunc(0)">全部</button>
      <button :disabled="type === 1" @click="clickFunc(1)">星标</button>
      <button :disabled="type === 2" @click="clickFunc(2)">新朋友</button>
    </div>
    <button class="more">...</button>
  </nav>
  <div class="search">
    <input class="search-input" type="text" placeholder="搜搜精日分子">
  </div>
  <router-view></router-view>
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({

})
export default class Talk extends Vue {
  private isVoice = false
  private type = 0
  private clickFunc(type: number): void {
    this.type = type
    switch(type) {
      case 0: this.$router.push('/friend/all')
        break
      case 1: this.$router.push('/friend/star')
        break
      case 2: this.$router.push('/friend/new')
        break
      default: this.$router.push('/friend')
    }
  }
}
</script>

<style lang='less'>

</style>
