/**
 * @Date: 2016/11/1  0001  23:46
 * @Author: lxbin
 *
 * Created with JetBrains WebStorm.
 */
import Vue from 'vue'

const ToastConstructor = Vue.extend(require('./alert.vue'))
let toastPool = []

let getAnInstance = () => {
    if (toastPool.length > 0) {
        let instance = toastPool[0]
        toastPool.splice(0, 1)
        return instance
    }
    return new ToastConstructor().$mount(document.createElement('div'))
}

let returnAnInstance = instance => {
    if (instance) {
        toastPool.push(instance)
    }
}

let removeDom = event => {
    console.log('[Leo] => 销毁提示窗')
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target)
    }
}

ToastConstructor.prototype.close = function () {
    this.visible = false
    this.$el.addEventListener('transitionend', removeDom)
    this.closed = true
    returnAnInstance(this)
}

let Alert = (options = {}) => {
    let duration = options.duration || 5000

    let instance = getAnInstance()
    instance.closed = false
    clearTimeout(instance.timer)
    instance.message = typeof options === 'string' ? options : options.message

    document.body.appendChild(instance.$el)
    Vue.nextTick(function () {
        instance.visible = true
        instance.$el.removeEventListener('transitionend', removeDom)
        instance.$watch('visible', function (val) {
            if (!val)
                instance.$el.addEventListener('transitionend', removeDom)
        })
        instance.timer = setTimeout(function () {
            console.log('[Leo] => ', instance.closed)
            if (instance.closed) return
            instance.close()
        }, duration)
    })
    return instance
}

export default Alert