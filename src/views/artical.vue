<template>
    <div class="main">
        <div id="toc"></div>
        <vue-markdown class="full-height"
                      :watches="['source','show','html','breaks','linkify','emoji','typographer','toc']"
                      :source="source"
                      :show="show"
                      :html="html"
                      :breaks="breaks"
                      :linkify="linkify"
                      :emoji="emoji"
                      :typographer="typographer"
                      :toc="toc"
                      v-on:rendered="allRight"
                      v-on:toc-rendered="tocAllRight"
                      toc-id="toc"></vue-markdown>
        <article v-cloak="">{{renderedMarkdown}}</article>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
    import * as types from '../store/mutation-types'
    import VueMarkdown from 'vue-markdown'
    export default {
        name: 'artical',
        components: {
            "vue-markdown": VueMarkdown
        },
        data () {
            return {
                source: 'i am a ~~tast~~ **test**.',
                show: true,
                html: false,
                breaks: true,
                linkify: false,
                emoji: true,
                typographer: true,
                toc: false,
                renderedMarkdown: ''
            }
        },
        computed: {
            ...mapState({
                articalList: state => state.base.artical
            }),
            ...mapGetters({})
        },
        methods: {
            ...mapActions([]),
            ...mapMutations({}),
            allRight (htmlStr) {
                console.log("markdown is parsed !");
            },
            tocAllRight (tocHtmlStr) {
                console.log("toc is parsed :", tocHtmlStr);
            }
        },
        created(){
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../assets/css/fun";

    .full-height {
        height: 100%
    }
</style>
