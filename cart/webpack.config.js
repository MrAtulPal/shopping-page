const htmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports={
    mode:'development',
    devServer:{
        port:3002
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'cart',
            filename:'remoteEntry.js',
            exposes:{
                './cartIndex':'./src/index.js'
            }
        })
    ]
}