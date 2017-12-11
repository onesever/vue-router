import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import HistoryIndex from '@/components/history/index'
import HistoryList from '@/components/history/list'
import HistoryDetail from '@/components/history/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/history',
      name: 'HistoryIndex',
      component: HistoryIndex
    },
    {
      path: '/history/list',
      name: 'HistoryList',
      component: HistoryList,
      meta: {scrollToTop: true}
    },
    {
      path: '/history/detail',
      name: 'HistoryDetail',
      component: HistoryDetail,
      meta: {scrollToTop: true}
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
      console.log(to)
      if (savedPosition) {
        console.log('通过过浏览器的 前进/后退 按钮触发',savedPosition)
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
  }
})
