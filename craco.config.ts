 const path = require("path");
const CracoLessPlugin = require("craco-less");
const {  loaderByName } = require("@craco/craco");
module.exports = {
    // antd按需加载
    // babel: {
    //     plugins: [
    //         [
    //             "import",
    //             {
		// 							"libraryName": "@material-ui/core",
		// 							"libraryDirectory": "", // default: lib
		// 							"camel2DashComponentName": false, // default: true
		// 						 }
    //         ]
    //     ]
    // },
    // antd插件配置，使用less并定义主题
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' }, //主题色
                        javascriptEnabled: true,
                    },
                },
                // 配置module.less
                modifyLessRule(lessRule:any, context:any) {
                    lessRule.exclude = /\.(module)\.(less)$/;
                    return lessRule
                },
                modifyLessModuleRule(lessModuleRule:any, context:any) {
                    lessModuleRule.test = /\.(module)\.(less)$/;
                    const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'))
                    cssLoader.options.modules = {
                        localIdentName: '[local]_[hash:base64:5]'
                    }
                    return lessModuleRule
                }
            },
        },
    ],

    //配置src路径
    webpack: {
        alias: {
            "@": path.resolve("src"),
        },
    },
}
