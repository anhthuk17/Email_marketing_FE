import 'core-js/stable'
import Vue from 'vue'

import { createApp } from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from '../store'
import CKEditor from '@ckeditor/ckeditor5-vue2';
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)
Vue.use(CKEditor);
Vue.use(Vuex);
// createApp(App).use(store).use(router).mount('#app');
new Vue({
    el: '#app',
    store,
    router,
    icons,
    template: '<App/>',
    components: {
        App
    }
})


// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// import 'jquery/dist/jquery.min.js';
// import { VueMeta } from 'vue-meta'



// createApp(App).use(store).use(router).use(VueMeta).use(VueSweetalert2).mount('#app');