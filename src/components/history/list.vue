<template>
   <div class="history-index">
     <div>列表页</div>
     <ul>
       <li v-for="list, index in 10"><router-link :to="'/history/detail'">{{index}}{{item}}</router-link></li>
     </ul>
   </div>
</template>

<script>
  export default {
    data () {
      return {
        item: '点击进入详情页'
      }
    },
    methods: {
      forward () {
        window.history.forward()
      }
    }
  }
</script>

<style scoped="scoped">
  .history-index ul li{
    height: 500px
  }
</style>