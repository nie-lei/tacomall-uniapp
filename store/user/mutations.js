import * as types from './mutation-types'

export const mutations = {
    [types.SET_SYNOPSIS](state, o) {
        state.synopsis = o
    }
}
