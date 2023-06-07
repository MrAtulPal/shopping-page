const htmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFedrationPlugin =require('webpack/lib/container/ModuleFederationPlugin')

module.exports={
    mode:'development',
    devServer:{
        port:3001
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFedrationPlugin({
            name:'Product',
            filename:'remoteEntry.js',
            exposes:{
                './ProductIndex':'./src/index.js'
            }
        })
    ]
}