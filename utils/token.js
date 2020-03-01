<<<<<<< HEAD
import {appConfig} from '../config'

export const token = {
    set: (s) => {
        uni.setStorageSync(appConfig.tokenKey, s)
    },
    get: () => {
        return uni.getStorageSync(appConfig.tokenKey)
    },
    clear: () => {
        uni.removeStorageSync(appConfig.tokenKey)
    }
}
=======
import {appConfig} from '../config'

export const token = {
    set: (s) => {
        uni.setStorageSync(appConfig.tokenKey, s)
    },
    get: () => {
        return uni.getStorageSync(appConfig.tokenKey)
    },
    clear: () => {
        uni.removeStorageSync(appConfig.tokenKey)
    }
}
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
