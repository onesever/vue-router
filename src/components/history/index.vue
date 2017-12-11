<template>
   <div class="history-index">
     <div>history模式</div>
     <ul>
       <li ><router-link :to="'/history/list'">点击进入列表页</router-link></li>
     </ul>
     <div>
            总结:scrollBehavior 方法接收 to 和 from 路由对象。
            第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
            但是： 我们要的效果是切换路由能触发savedPosition，而不是要通过导航按钮。当用到导航按钮的时候，就不需要用savedPosition了
     </div>
   </div>
</template>

<script>
</script>

<style scoped="scoped">
</style>