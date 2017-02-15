/**
 * @Date: 2016/10/22  0022  0:27
 * @Author: lxbin
 *
 * Created with JetBrains WebStorm.
 */
import Fetch from '../utils/Fetch'
export default {
    getCatalogList(){
        return Fetch('../../static/pages/Catalog.json')
    }
}