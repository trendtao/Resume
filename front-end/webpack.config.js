const path = require("path")
const htmlwebpackplugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader');

module.exports={
    entry: {
        app: ["babel-polyfill", "./src/main.js"]
    },
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"./dist"),
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins:[
        new htmlwebpackplugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        }),
          // 添加代码2 VueLoaderPlugin
        new VueLoaderPlugin(),
    ],
    module:{
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
            { test: /\.vue$/, use: "vue-loader" },
            { test: /\.(png|jpg|gif|jpeg|bpm)$/, use: "url-loader?limit=27118&name=[hash:8]-[path][name].[ext]" },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: "url-loader?name=fonts/[hash:8]-[name].[ext]" },
        ]
    }
}