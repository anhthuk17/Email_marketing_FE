import Vuex from 'vuex'
import Vue from 'vue'
import customer from './customer.store'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        customer
    }
})