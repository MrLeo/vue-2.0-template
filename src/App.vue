<template>
    <div class="app">
        <nav class="flex flex-column__around flex-column app-nav">
            <ul class="flex flex-all__center flex-column">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li><a href="https://segmentfault.com/blog/mr-leo">segmentfault</a></li>
                <li><a href="https://github.com/MrLeo">github</a></li>
                <li><a href="http://www.cnblogs.com/blog-leo">博客园</a></li>
            </ul>
        </nav>

        <transition :name="transitionName">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
    import * as types from './store/mutation-types'
    export default {
        name: 'app',
        components: {},
        data () {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        computed: {
            ...mapState({
                catalogList: state => state.base.catalog,
                articalList: state => state.base.artical
            }),
            ...mapGetters({})
        },
        methods: {
            ...mapActions([
                'getCatalog'
            ]),
            ...mapMutations({})
        },
        created(){
            /**
             * 动态计算 rem 基准大小
             */
            let docEle = document.documentElement,
                evt = "onorientationchange" in window ? "orientationchange" : "resize",
                fn = () => {
                    let width = docEle.clientWidth
                    width && width < 1000 && (docEle.style.fontSize = 20 * (width / 750) + "px")
                }
            window.addEventListener(evt, fn, false)
            document.addEventListener("DOMContentLoaded", fn, false)

            this.getCatalog()
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    /*$ npm i node-sass@4.0.0 --registry=https://registry.npm.taobao.org*/
    @import "assets/css/base";
    @import "assets/css/fun";
    @import "assets/css/vars";
    @import "assets/css/flex";

    .app {
        &-nav {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: $leftNavWidth;
            background-color: $leftNavBgColor;
            color: #666;

            a {
                color: #666;
            }

            ul, li {
                list-style: none;
                padding: 0;
                margin: 0;
            }
        }
    }

    .view {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: $leftNavWidth;
    }
</style>
