import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import colorSelector from '@/components/color-selector'
import select from '@/components/select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/colorSelector',
      name: 'colorSelector',
      component: colorSelector
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },


  ]
})
