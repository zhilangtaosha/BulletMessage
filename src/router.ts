import Vue from 'vue';
import Router from 'vue-router';
import Talk from './views/Talk.vue';
import All from './components/All.vue';
import Late from './components/Late.vue';
import Friend from './views/Friend.vue';
import News from './views/News.vue';
import Collection from './views/Collection.vue';
import Center from './views/Center.vue';

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
          name: 'all',
          alias: 'all',
          component: All,
        },
        {
          path: 'late',
          name: 'late',
          component: Late,
        },
      ],
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import(/* webpackChunkName: "friend" */ './views/Friend.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "news" */ './views/News.vue'),
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
