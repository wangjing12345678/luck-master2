const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
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
  },
};
