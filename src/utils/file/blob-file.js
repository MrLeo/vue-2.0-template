/**
 * @Date: 2016/11/7  0007
 * @Time: 9:44
 * @Author: lxbin
 *
 * Created with JetBrains WebStorm.
 */

/**
 * 将符合字节流的string转化成Blob对象
 * @param {String} data
 * @return {Blob}
 * @api public
 */
export function binaryToBlob(data) {
    var bb = new BlobBuilder()
    var arr = new Uint8Array(data.length)
    for (var i = 0, l = data.length; i < l; i++) {
        arr[i] = data.charCodeAt(i)
    }
    bb.append(arr.buffer)
    return bb.getBlob()
}

/**
 * 根据URL获取图片的Blob对象
 * @param {String} url
 * @return {Blob}
 * @api public
 */
export function getImageBlob(url) {
    var r = new XMLHttpRequest()
    r.open("GET", url, false)
    // 详细请查看: https://developer.mozilla.org/En/XMLHttpRequest/Using_XMLHttpRequest#Receiving_binary_data
    // XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
    r.overrideMimeType('text/plain charset=x-user-defined')
    r.send(null)
    var blob = binaryToBlob(r.responseText)
    blob.name = blob.fileName = url.substring(url.lastIndexOf('/') + 1)
    blob.fileType = "image/jpeg" //"image/octet-stream"
    return blob
}

/**
 * 将dataUrl转化成Blob对象
 * @param {String} dataurl data:image/jpegbase64,xxxxxx
 * @return {Blob}
 * @api public
 */
export function dataUrlToBlob(dataurl) {
    // data:image/jpegbase64,xxxxxx
    var datas = dataurl.split(',', 2)
    var blob = binaryToBlob(atob(datas[1]))
    blob.fileType = datas[0].split('')[0].split(':')[1]
    blob.name = blob.fileName = 'pic.' + blob.fileType.split('/')[1]
    return blob
}