//创建Vue根实例
import Vue from 'vue'

// 导入App组件
import App from './App.vue'

new Vue({
    el: '#app',
    components: {
        // 组件名：组件对象
        App: App
    },
    template: '<App/>'
})