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
html,
body,
#app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eee;

  @navHeight: 64px;

  & > div {
    height: calc(100% - @navHeight);
  }

  #nav {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    height: 64px;
    background: white;
    a {
      line-height: @navHeight;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .nav {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 64px;
    background: blue;

    .row-position {
      grid-row: e('2 / 3');
    }

    .ctrls {
      grid-column: e('1 / 4');
      .row-position;
    }
    .funcs {
      grid-column: e('4 / 8');
      .row-position;
    }
    .more {
      grid-column: e('9 / 11');
      .row-position;
    }
  }

  .search {
    height: 40px;
    background: grey;

    .search-input {
      position: relative;
      width: 90%;
      height: 32px;
    }
  }

  .device {
    .manager {
      width: 100%;
      margin: auto 0;
      height: 40px;
    }
  }

  .sub-page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #eee;

    .back {
      grid-column: e('1 / 3');
      grid-row: e('2 / 3');
    }
  }
}

.push-enter {
  transform: translateX(100%);
}
.push-enter-active {
  transition: transform 0.3s ease;
}
.push-enter-to,
.push-leave {
  transform: translateX(0);
  opacity: 1;
}
.push-leave-to {
  transform: translateX(-100%);
  opacity: 0.8;
}
.push-leave-active {
  transition: transform 0.3s ease;
}
.pop-enter {
  transform: translateX(-100%);
}
.pop-enter-active {
  transition: transform 0.3s ease;
}
.pop-enter-to,
.pop-leave {
  transform: translateX(0);
  opacity: 1;
}
.pop-leave-to {
  transform: translateX(100%);
  opacity: 0.8;
}

.pop-leave-active {
  transition: transform 0.3s ease;
}
</style>
