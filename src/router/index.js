import Vue from 'vue'
import Router from 'vue-router'
import HomePagelist from "../components/picturelist/HomePagelist";
import BasicLayout from '../view/BasicLayout';
import Helloword from '../components/HelloWorld';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home/all',
    },

    {
      path: '/Home',
      component: BasicLayout,
      children: [
        {
          path: 'all',
          component: HomePagelist,
        },

        {
          path: 'searchByKeywords/:type/:keyword',
          name: 'searchKeywords',
          component: HomePagelist,
        }
      ]
    },

    // {
    //   path: '/Helloworld',
    //   component: Helloword,
    // }
  ]
})
