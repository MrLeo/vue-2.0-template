<template>
    <div class="main">
        <ul class="list">
            <router-link
                    v-for="item in articalList"
                    :to="{name:'articale', params:{title: item.title}}"
                    tag="li">
                {{item.title}}
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
    import * as types from '../store/mutation-types'
    export default {
        name: 'index',
        data () {
            return {}
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
            this.getCatalog()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    @import "../assets/css/fun";

    .list, .list li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
</style>
