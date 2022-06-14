import dayjs from 'dayjs'
// dayjs默认是 英文
// 加载中文
import 'dayjs/locale/zh-cn'
// 加载 相对时间插件
import relativeTime from 'dayjs/plugin/relativeTime'
import Vue from 'vue'
// 配置使用处理相对时间插件
dayjs.extend(relativeTime)
// 全局使用
dayjs.locale('zh-cn')
// 获取当前最新时间
// 定义全局过滤器
Vue.filter('relativeTime', value => {
  return dayjs().to(dayjs(value))
})
