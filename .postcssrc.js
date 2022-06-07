// postcss配置文件
module.exports = {
  // 配置要使用的postcss插件
  plugins: {
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // pxtorem插件配置
    'postcss-pxtorem': {
      // 根元素的值
      // 函数：可以动态处理返回
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置要转换的css属性 *代表所有属性
      propList: ['*']
    }
  }
}
