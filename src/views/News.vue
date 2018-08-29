<template>
<div class="news">
  <nav class="nav">
    <div class="ctrls">
      <button :class="isTag || 'grey'" @click="isTag = !isTag">tag</button>
    </div>
    <div class="funcs">
      <button :disabled="!isPenguin" @click="clickFunc">昨日头条</button>
      <button :disabled="isPenguin" @click="clickFunc">企鹅新闻</button>
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
  private isTag = true
  private isPenguin = false
  private clickFunc(): void {
    this.isPenguin = !this.isPenguin
    if (this.isPenguin) this.$router.push('/news/penguin')
    else this.$router.push('/news/yesterday')
  }
}
</script>

<style lang='less'>
.grey {
  color: grey;
}
</style>
