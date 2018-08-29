import Vue from 'vue';
import Router from 'vue-router';
import Talk from './views/Talk.vue';
import All from './components/talk/All.vue';
import Late from './components/talk/Late.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'talk',
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
      name: 'friend',
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
      name: 'news',
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
      name: 'collection',
      component: () => import(/* webpackChunkName: "collection" */ './views/Collection.vue'),
    },
    {
      path: '/center',
      name: 'center',
      component: () => import(/* webpackChunkName: "center" */ './views/Center.vue'),
    },
  ],
});
