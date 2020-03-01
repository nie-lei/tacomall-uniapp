<<<<<<< HEAD
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
        SET_IS_LOGIN(state, b) {
            state.isLogin = b
        }
    },
    actions: {
        initApp({dispatch, commit}) {
            token.get() && commit('SET_IS_LOGIN', true)
            token.get() && dispatch('user/synopsis')
        }
    }
})

export default store
=======
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
        SET_IS_LOGIN(state, b) {
            state.isLogin = b
        }
    },
    actions: {
        initApp({dispatch, commit}) {
            token.get() && commit('SET_IS_LOGIN', true)
            token.get() && dispatch('user/synopsis')
        }
    }
})

export default store
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
