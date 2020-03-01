<<<<<<< HEAD
export const openType = Behavior({
    properties: {
        openType: String
    },
    methods: {
        bindGetUserInfo(event) {
            this.$emit('getuserinfo', event.detail);
        },
        bindContact(event) {
            this.$emit('contact', event.detail);
        },
        bindGetPhoneNumber(event) {
            this.$emit('getphonenumber', event.detail);
        },
        bindError(event) {
            this.$emit('error', event.detail);
        },
        bindLaunchApp(event) {
            this.$emit('launchapp', event.detail);
        },
        bindOpenSetting(event) {
            this.$emit('opensetting', event.detail);
        },
    }
});
=======
export const openType = Behavior({
    properties: {
        openType: String
    },
    methods: {
        bindGetUserInfo(event) {
            this.$emit('getuserinfo', event.detail);
        },
        bindContact(event) {
            this.$emit('contact', event.detail);
        },
        bindGetPhoneNumber(event) {
            this.$emit('getphonenumber', event.detail);
        },
        bindError(event) {
            this.$emit('error', event.detail);
        },
        bindLaunchApp(event) {
            this.$emit('launchapp', event.detail);
        },
        bindOpenSetting(event) {
            this.$emit('opensetting', event.detail);
        },
    }
});
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
