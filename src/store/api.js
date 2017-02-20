/**
 * @Date: 2016/10/22  0022  0:27
 * @Author: lxbin
 *
 * Created with JetBrains WebStorm.
 */

export default {
    getCatalogList(){
        return new Promise(function(resolve,reject){
            const xhr = new XMLHttpRequest()
            xhr.open("GET",'../../static/pages/Catalog.json')
            xhr.onreadystatechange = function(response){
                if(response.target.readyState==4 && response.target.status==200){
                    resolve(JSON.parse(response.target.responseText))
                }
            }
            xhr.onerror=(e)=>{
                reject()
            }
            xhr.send()
        })
    }
}