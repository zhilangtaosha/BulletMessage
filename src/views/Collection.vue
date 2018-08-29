<template>
<div class="collection">
  <nav class="nav">
    <div class="funcs">收藏流</div>
    <button class="more">...</button>
  </nav>
  this is collection.
</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({

})
export default class Talk extends Vue {

}
</script>

<style lang='less'>
.funcs {
  color: white;
  font-size: 18px;
}
</style>
