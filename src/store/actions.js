import * as types from './mutation-types'
import api from './api'
export const getCatalog = ({ commit, state }) => {
    api.getCatalogList().then(res => {
        const catalogSet = new Set()
        const articalSet = new Set()

        for (let catalog of res) {
            catalogSet.add(catalog.classification)
            catalog.articls.filter(item => {
                item['catalog'] = catalog.classification
                articalSet.add(item)
            })
        }

        //添加分类
        commit(types.SET_CATALOG, [...catalogSet] || [])

        //添加文章列表
        commit(types.SET_ARTICAL, [...articalSet] || [])
    })
}