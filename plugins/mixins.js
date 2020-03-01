<<<<<<< HEAD
import Vue from 'vue'

Vue.mixin({
    methods: {
        red: (url) => {
            uni.redirectTo({
                url: url
            })
        },
        nav: (url) => {
            uni.navigateTo({
                url: url
            })
        },
        back: () => {
            uni.navigateBack({
                delta: 1
            })
        },
        toast (s) {
            uni.showToast({
                title: s,
                icon: 'none',
                duration: 2000
            })
        }
    }
})
=======
import Vue from 'vue'

Vue.mixin({
    methods: {
        red: (url) => {
            uni.redirectTo({
                url: url
            })
        },
        nav: (url) => {
            uni.navigateTo({
                url: url
            })
        },
        back: () => {
            uni.navigateBack({
                delta: 1
            })
        },
        toast (s) {
            uni.showToast({
                title: s,
                icon: 'none',
                duration: 2000
            })
        }
    }
})
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
