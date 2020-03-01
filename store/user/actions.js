<<<<<<< HEAD
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
=======
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
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
