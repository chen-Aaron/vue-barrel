<template>
  <div id="app">
    <h1>{{ msg }}</h1>

      <vue-barrel class="main" ele="vue-barrel">
          
            <div v-for="item in brands" :key="item.brand" class="vue-barrel">
                {{item.brand}}
            </div>

      </vue-barrel>
  </div>
</template>

<script>
const brands = [{
            "brand": "joyoung/九阳"
        },
        {
            "brand": "chigo/志高"
        },
        {
            "brand": "herpusi"
        },
        {
            "brand": "braun/博朗"
        },
        {
            "brand": "midea/美的"
        },
        {
            "brand": "bear/小熊"
        },
        {
            "brand": "hyundai/现代"
        },
        {
            "brand": "vitamix/维他美仕"
        },
        {
            "brand": "格明"
        },
        {
            "brand": "超级妈咪"
        },
        {
            "brand": "金正"
        },
        {
            "brand": "deass/德氏"
        },
        {
            "brand": "panasonic/松下"
        },
        {
            "brand": "supor/苏泊尔"
        },
        {
            "brand": "haier/海尔"
        },
        {
            "brand": "delrex/德瑞仕"
        },
        {
            "brand": "ashton/阿诗顿"
        },
        {
            "brand": "kitchenaid"
        },
        {
            "brand": "philips/飞利浦"
        },
        {
            "brand": "ranbem/瑞本"
        },
        {
            "brand": "谷格"
        },
        {
            "brand": "喜贡"
        },
        {
            "brand": "墨氏"
        },
        {
            "brand": "keabo/凯博"
        },
        {
            "brand": "bamix"
        },
        {
            "brand": "fornonr/方奈优品"
        },
        {
            "brand": "sansui/山水"
        },
        {
            "brand": "凯云"
        },
        {
            "brand": "蒙达"
        },
        {
            "brand": "福菱"
        },
        {
            "brand": "meichen/美星晨"
        },
        {
            "brand": "iperfect"
        },
        {
            "brand": "royalstar/荣事达"
        },
        {
            "brand": "水花"
        },
        {
            "brand": "嘉和"
        },
        {
            "brand": "朋客"
        },
        {
            "brand": "三的"
        }];

// import VueBarrel from './lib/vueBarrel.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      brands: []
    }
  },
//   components: {
//     VueBarrel
//   },
  mounted(){
      let that = this;
      setTimeout(function(){

          that.brands = brands

      }, 1000)
  }
}
</script>

<style>

.main{
  width: 1000px;
  margin: 0 auto;
  text-align: left;
  overflow: hidden;
}
.vue-barrel{
  padding: 10px 15px;
  display: inline-block;
  background-color: #367c77;
  color: #fff;
  margin: 0 0 10px 10px;
  box-sizing: inherit;
}
</style>
