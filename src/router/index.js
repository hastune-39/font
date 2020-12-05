import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../view/main/HomePage';
import BasicLayout from '../view/BasicLayout';
import UserCollection from '../view/main/UserCollection';
import UserFollow from '../view/main/UserFollow';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Main/all/1',
    },

    {
      path: '/Main',
      component: BasicLayout,
      children: [
        {
          path: 'all/:random',
          name: 'HomePage',
          component: HomePage,
        },

        {
          path: 'searchByKeywords/:type/:keyword',
          name: 'searchKeywords',
          component: HomePage,
        },
        {
          path: 'User/Collection/:random',
          name: 'userCollection',
          component: UserCollection,
        },
        {
          path: 'User/Follow/:random',
          name: 'userFollow',
          component: UserFollow,
        },
      ]
    },

    {
      path: '/User'
    },



    // {
    //   path: '/Helloworld',
    //   component: Helloword,
    // }
  ]
})
