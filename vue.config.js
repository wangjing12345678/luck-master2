const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: "./kkk/dist",
  assetsDir: "./static",
  productionSourceMap: false,
  // configureWebpack: config => {
  //     config.externals = {
  //         vue:'Vue',
  //         'element-ui': 'ElementUI'
  //     }
  // }
  devServer: {
    port: 8090,
    proxy: {
      '/admin': {
        target: 'http://112.111.20.89:9980/psp-gateway/psp-gateway',
        ws: false, // 如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changOrigin: true, // 是否跨域
        pathRewrite: {
          [`/admin`]: "/admin",
        },
      },
    },
  },
  configureWebpack: {
    output: {
      library: `aaa`,
    },
  },
};
