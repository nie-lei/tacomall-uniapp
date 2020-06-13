/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:20:26
 * @LastEditTime: 2020-06-13 09:57:31
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: \tacomall-uniapp\store\user\actions.js
 * @Just do what I think it is right
 */ 
import api from '../../api'
import * as types from './mutation-types'

export const actions = {
    getUserInfo: ({commit}) => {
        api.user.info().then(resp => {
            if (resp.ok) {
                commit(types.SET_SYNOPSIS, resp.data)
            }
        })
    }
}
