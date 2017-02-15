import Vue from 'vue'
import * as types from '../mutation-types'

const state = {
    catalog: [],
    artical: []
}

const mutations = {
    [types.SET_CATALOG](state, list){
        Vue.set(state, 'catalog', list)
    },
    [types.SET_ARTICAL](state, list){
        Vue.set(state, 'artical', list)
    }
}

export default {
    state,
    mutations
}
