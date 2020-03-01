<script>
    import {mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions(['initApp'])
        },
        onLaunch: function () {
            console.log('App Launch')
        },
        onShow: function () {
            this.initApp()
            console.log('App Show')
        },
        onHide: function () {
            console.log('App Hide')
        }
    }
</script>

<style lang="less">
    @import "./common/less/base";
    @import "./common/less/iconfont";
    @import "./common/less/border-1px";
</style>
