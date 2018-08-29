<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/talk">对话流</router-link>
      <router-link to="/friend">通讯录</router-link>
      <router-link to="/news">资讯流</router-link>
      <router-link to="/collection">收藏流</router-link>
      <router-link to="/center">个人中心</router-link>
    </div>
  </div>
</template>

<style lang="less">
html, body, #app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  &>div {
    height: calc(100% - 40px);
  }
}
#nav {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  a {
    line-height: 40px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
