// const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const env = process.env.NODE_ENV;

module.exports = {
  publicPath: env === 'production' ? './' : '/',  // 部署应用时的基本 URL
	outputDir: 'dist', //build时文件输出的目录
	assetsDir: 'static', //build时生成的相对于outputDir的静态资源的目录（js、css、img、font）
	lintOnSave: false, //是否开启eslint保存检测，有效值：true、false、error
	productionSourceMap: true, //是否在构建生产包时生成sourceMap文件，false将提高构建速度
	// 本地服务器，所有 webpack-dev-server 的选项都支持
	devServer:{
		open: true, // npm run serve后自动打开页面
		host: '0.0.0.0', // 匹配本机IP地址(默认是0.0.0.0)
		port: 8080, //端口号
		https: false,
		hot: true, //热加载"
		// proxy: "http://localhost:1000/"
	},
	// css的处理
	css:{
		extract: true, // 是否使用css分离插件 ExtractTextPlugin采用独立样式文件载入，不采用<style>方式内联至html文件中
	},
  configureWebpack: {
    plugins: [
      AutoImport({
    		resolvers: [ElementPlusResolver()],
    	}),
    	Components({
    	  resolvers: [ElementPlusResolver()],
    	}),
    ],
  },
}
