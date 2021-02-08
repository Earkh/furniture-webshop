import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

createApp(App).use(store).use(router).mount('#app')

// import Vue from 'vue' 
// import App from './App.vue' 
// import router from './router' 
// import Store from './store/index'  

// new Vue({   
//     router,   
//     Store,   
//     render: h => h(App) 
// }).$mount('#app')