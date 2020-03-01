import api from '../../api'
import * as types from './mutation-types'

export const actions = {
    synopsis: ({commit}) => {
        api.user.synopsis().then(resp => {
            if (resp.ok) {
                commit(types.SET_SYNOPSIS, resp.data)
            }
        })
    }
}
