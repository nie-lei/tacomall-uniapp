<<<<<<< HEAD
let cache = null;
function getSafeArea() {
    return new Promise((resolve, reject) => {
        if (cache != null) {
            resolve(cache);
        }
        else {
            wx.getSystemInfo({
                success: ({ model, screenHeight, statusBarHeight }) => {
                    const iphoneX = /iphone x/i.test(model);
                    const iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
                    cache = {
                        isIPhoneX: iphoneX || iphoneNew,
                        statusBarHeight
                    };
                    resolve(cache);
                },
                fail: reject
            });
        }
    });
}
export const safeArea = ({ safeAreaInsetBottom = true, safeAreaInsetTop = false } = {}) => Behavior({
    properties: {
        safeAreaInsetTop: {
            type: Boolean,
            value: safeAreaInsetTop
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: safeAreaInsetBottom
        }
    },
    created() {
        getSafeArea().then(({ isIPhoneX, statusBarHeight }) => {
            this.set({ isIPhoneX, statusBarHeight });
        });
    }
});
=======
let cache = null;
function getSafeArea() {
    return new Promise((resolve, reject) => {
        if (cache != null) {
            resolve(cache);
        }
        else {
            wx.getSystemInfo({
                success: ({ model, screenHeight, statusBarHeight }) => {
                    const iphoneX = /iphone x/i.test(model);
                    const iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
                    cache = {
                        isIPhoneX: iphoneX || iphoneNew,
                        statusBarHeight
                    };
                    resolve(cache);
                },
                fail: reject
            });
        }
    });
}
export const safeArea = ({ safeAreaInsetBottom = true, safeAreaInsetTop = false } = {}) => Behavior({
    properties: {
        safeAreaInsetTop: {
            type: Boolean,
            value: safeAreaInsetTop
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: safeAreaInsetBottom
        }
    },
    created() {
        getSafeArea().then(({ isIPhoneX, statusBarHeight }) => {
            this.set({ isIPhoneX, statusBarHeight });
        });
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
