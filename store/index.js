import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

import {token} from '../utils/token'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    },
    state: {
        isLogin: false
    },
    mutations: {
        SET_IS_LOGIN(b) {
            this.isLogin = b
        }
    },
    actions: {
        initApp({commit}) {
            token.get() && commit('SET_IS_LOGIN', true)
        }
    }
})

export default store
