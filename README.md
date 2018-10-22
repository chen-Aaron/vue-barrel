# vue-barrel

> Vue Barrel Layout

## 使用组件
安装npm包
```$xslt
npm install vue-barrel --save
```
引用vue-barrel插件
```$xslt
import VueBarrel from 'vue-barrel';

Vue.use(VueBarrel)

```
在组件中使用
```$xslt
<vue-barrel :list="brands" class="main" ele="vue-barrel">
          
    <div v-for="item in brands" :key="item.brand" class="vue-barrel">
        {{item.brand}}
    </div>

</vue-barrel>

data () {
    return {
      brands: [{
            "brand": "朋客"
        },
        {
            "brand": "三的"
        }];
    }
}
```