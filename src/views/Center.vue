<template>
<div class="center">
  <nav class="nav">
    <div class="funcs">个人中心</div>
    <button class="more">...</button>
  </nav>
  <ul>
    <li @click="go('account')">账号</li>
  </ul>
  <ul>
    <li @click="go('safe')">账号与安全</li>
    <li @click="go('noti')">通知管理</li>
    <li @click="go('chat')">聊天管理</li>
    <li @click="go('send')">快捷发送消息设置</li>
  </ul>
  <ul>
    <li @click="go('setting')">设置</li>
  </ul>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</div>
</template>

<script lang='ts'>
import { Component, Watch, Vue } from 'vue-property-decorator'

@Component({
})
export default class Talk extends Vue {
  private transitionName: string = 'pop'
  @Watch('$route')
  onPathChanged(to: { path: string }, from: { path: string }) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    if(to.path === '/') this.transitionName = 'pop'
    else if(from.path === '/') this.transitionName = 'push'
    else this.transitionName = toDepth > fromDepth ? 'push' : 'pop'
  }
  private go(path: string): void {
    console.log(path)
    this.$router.push(`/center/${path}`)
  }

}
</script>

<style lang='less'>
.funcs {
  color: white;
  font-size: 18px;
}
ul {
  list-style: none;
  width: calc(100% - 16px);
  padding: 0;
  margin-left: 8px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 4px 0 black;
  box-sizing: border-box;

  li {
    position: relative;
    padding-left: 8px;
    line-height: 64px;
    border-bottom: 1px solid #999;

    &:last-child {
      border-bottom: 0;
    }

    &:after {
      content: '>';
      position: absolute;
      top: 0;
      right: 20px;
      width: 0;
      height: 0;
    }
  }
}
</style>
