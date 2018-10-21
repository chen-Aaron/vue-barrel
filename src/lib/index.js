import vue_barrel from './vueBarrel.vue';

const vueBarrel = {

    install(Vue, options) {

        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }

        console.log(vue_barrel.name)

        Vue.component(vue_barrel.name, vue_barrel)
    }

}

export default vueBarrel 