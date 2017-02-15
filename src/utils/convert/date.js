/**
 * --- 日期格式化 ---
 * @param {DateString} date 被格式化的日期
 * @param {String} fmt 转换格式，eg.yyyy-MM-dd
 *
 * @Author: lxbin
 * @Date: 2016/9/20  0020
 * @Time: 10:31
 * Created with JetBrains WebStorm.
 */

/**
 * --- ConvertDate ---
 * @param {DateString} date 被格式化的日期
 * @param {String} fmt 转换格式，eg.yyyy-MM-dd
 */
export default class ConvertDate {
    constructor(date = new Date(), fmt = "yyyy/MM/dd HH:mm:ss") {
        this.date = date
        this.fmt = fmt
    }

    /**
     * ---- 日期格式化 ----
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     * @param {DateString} date 被格式化的日期
     * @param {String} fmt 转换格式，eg.yyyy-MM-dd
     * @return {DateString} fmt 转换后的日期
     */
    DateFormat() {
        this.date = /^\d{4}[-|\/|年]\d{1,2}[-|\/|月]\d{1,2}日?\s\d{1,2}:\d{1,2}(:\d{1,2})?$/.test(this.date) ? this.date.replace(/-/g, '/') : this.date
        let d = new Date(this.date)
        let o = {
            "M+": d.getMonth() + 1, //月份
            "d+": d.getDate(), //日
            "h+": d.getHours(), //小时
            "m+": d.getMinutes(), //分
            "s+": d.getSeconds(), //秒
            "q+": Math.floor((d.getMonth() + 3) / 3), //季度
            "S": d.getMilliseconds() //毫秒
        }
        if (/(y+)/.test(this.fmt)) this.fmt = this.fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length))
        for (let k in o)
            if (new RegExp("(" + k + ")").test(this.fmt)) this.fmt = this.fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
        return this.fmt
    }
}

/**
 * ---- 时间戳 ----
 * http://www.cnblogs.com/yjf512/p/3796229.html
 * @param {Object} date 日期字符串
 */
export class Timestamp extends ConvertDate {
    /**
     * ---- 日期转时间戳 ----
     * @returns {number}
     * @constructor
     */
    GetTimestamp() {
        if (!/^\d{4}[-|\/|年]\d{1,2}[-|\/|月]\d{1,2}日?\s\d{1,2}:\d{1,2}(:\d{1,2})?$/.test(this.date)) {
            return 0
        }
        let dateStrArr = this.date.replace(/[\/|年|月]/g, '-').replace(/日/, "").split((/-|\:|\ /))
        let date = new Date(dateStrArr[0], dateStrArr[1] - 1, dateStrArr[2], dateStrArr[3], dateStrArr[4], dateStrArr[5])
        return Date.parse(date)
    }

    /**
     * ---- 时间戳转换日期 ----
     * http://www.cnblogs.com/yjf512/p/3796229.html
     * @example getLocalTime(1439136000000)
     */
    GetLocalTime() {
        this.date = parseInt(this.date)
        if (isNaN(this.date)) {
            return 0
        }
        return new Date(this.date).toLocaleString().replace(/:\d{1,2}$/, ' ')
    }
}

/**
 * 获取月份
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
export class GetMonth {
    constructor(date) {
        this.date = date

        this.arr = date.split('-')
        this.year = arr[0] //获取当前日期的年份
        this.month = arr[1] //获取当前日期的月份
        this.day = arr[2] //获取当前日期的日
        this.days = new Date(this.year, this.month, 0)
        this.days = this.days.getDate() //获取当前日期中月的天数
        this.year2 = this.year
    }

    /**
     * 获取上一个月
     */
    Pre() {
        this.month2 = parseInt(this.month) - 1
        if (this.month2 == 0) {
            this.year2 = parseInt(this.year2) - 1
            this.month2 = 12
        }
        this.day2 = this.day
        this.days2 = new Date(this.year2, this.month2, 0)
        this.days2 = this.days2.getDate()
        if (this.day2 > this.days2) {
            this.day2 = this.days2
        }
        if (this.month2 < 10) {
            this.month2 = '0' + this.month2
        }
        return `${this.year2}-${this.month2}-${this.day2}`
    }

    /**
     * 获取下一个月
     */
    Next() {
        this.month2 = parseInt(this.month) + 1
        if (this.month2 == 13) {
            this.year2 = parseInt(this.year2) + 1
            this.month2 = 1
        }
        this.day2 = this.day
        this.days2 = new Date(this.year2, this.month2, 0)
        this.days2 = this.days2.getDate()
        if (this.day2 > this.days2) {
            this.day2 = this.days2
        }
        if (this.month2 < 10) {
            this.month2 = '0' + this.month2
        }
        return `${this.year2}-${this.month2}-${this.day2}`
    }
}
/**
 * 获取上一个月
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
export class GetPreMonth extends GetMonth {
    Pre() {
        super.Pre()
    }
}
/**
 * 获取下一个月
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
export class GetNextMonth extends GetMonth {
    Next() {
        super.Next()
    }
}

