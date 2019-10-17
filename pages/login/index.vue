<template>
    <view class="page login">
        <view class="l-wrap">
            <view class="w-title">
                <text>账号登录</text>
            </view>
            <view class="w-form">
                <view class="f-input">
                    <view class="i-item">
                        <input type="text" placeholder="请输入账号"/>
                    </view>
                    <view class="i-item">
                        <input type="password" placeholder="请输入密码"/>
                    </view>
                </view>
                <view class="f-btn">
                    <text>登录</text>
                </view>
            </view>
            <view class="w-service">
                <view class="s-left">
                    <text>没有账号？</text>
                    <text>注册</text>
                </view>
                <view class="s-right">
                    <text>忘记密码</text>
                </view>
            </view>
            <view class="w-third">
                <view class="t-title">
                    <text>第三方账号登录：</text>
                </view>
                <view class="t-entry">
                    <view class="e-item">
                        <text class="iconfont" style="color:#FF8200;">&#xe61b;</text>
                    </view>
                    <view class="e-item">
                        <text class="iconfont" style="color:#07c160;">&#xe7e5;</text>
                    </view>
                    <view class="e-item">
                        <text class="iconfont" style="color:#007fff;">&#xe64b;</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {}
</script>

<style lang="less">
@import "./index";
</style>
