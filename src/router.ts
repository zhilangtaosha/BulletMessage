import Vue from 'vue';
import Router from 'vue-router';
import Talk from './views/Talk.vue';
import Empty from './views/Empty.vue';
import All from './components/talk/All.vue';
import Late from './components/talk/Late.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      alias: '/talk',
      component: Talk,
      children: [
        {
          path: '',
          name: 'talk-all',
          alias: 'all',
          component: All,
        },
        {
          path: 'late',
          name: 'talk-late',
          component: Late,
        },
      ],
    },
    {
      path: '/friend',
      component: () => import(/* webpackChunkName: "friend" */ './views/Friend.vue'),
      children: [
        {
          path: '',
          name: 'friend-all',
          alias: 'all',
          component: () => import(/* webpackChunkName: "friend-all" */ './components/friend/All.vue'),
        },
        {
          path: 'star',
          name: 'friend-star',
          component: () => import(/* webpackChunkName: "friend-late" */ './components/friend/Star.vue'),
        },
        {
          path: 'new',
          name: 'friend-new',
          component: () => import(/* webpackChunkName: "friend-new" */ './components/friend/New.vue'),
        },
      ]
    },
    {
      path: '/news',
      component: () => import(/* webpackChunkName: "news" */ './views/News.vue'),
      children: [
        {
          path: '',
          name: 'news-yesterday',
          alias: 'yesterday',
          component: () => import(/* webpackChunkName: "news-yesterday" */ './components/news/Yesterday.vue'),
        },
        {
          path: 'penguin',
          name: 'news-penguin',
          component: () => import(/* webpackChunkName: "news-penguin" */ './components/news/Penguin.vue'),
        },
      ],
    },
    {
      path: '/collection',
      component: () => import(/* webpackChunkName: "collection" */ './views/Collection.vue'),
    },
    {
      path: '/center',
      component: () => import(/* webpackChunkName: "center" */ './views/Center.vue'),
      children: [
        {
          path: '',
          name: 'center-empty',
          component: Empty,
        },
        {
          path: 'account',
          name: 'center-account',
          component: () => import(/* webpackChunkName: "center-account" */ './views/center/Account.vue'),
        },
        {
          path: 'safe',
          name: 'center-safe',
          component: () => import(/* webpackChunkName: "center-safe" */ './views/center/Safe.vue'),
        },
        {
          path: 'noti',
          name: 'center-noti',
          component: () => import(/* webpackChunkName: "center-noti" */ './views/center/Noti.vue'),
        },
        {
          path: 'chat',
          name: 'center-chat',
          component: () => import(/* webpackChunkName: "center-chat" */ './views/center/Chat.vue'),
        },
        {
          path: 'send',
          name: 'center-send',
          component: () => import(/* webpackChunkName: "center-send" */ './views/center/Send.vue'),
        },
        {
          path: 'setting',
          name: 'center-setting',
          component: () => import(/* webpackChunkName: "center-setting" */ './views/center/Setting.vue'),
        },
      ]
    },
  ],
});
