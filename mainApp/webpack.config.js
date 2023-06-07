const htmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports={
    mode:'development',
    devServer:{
        port:3000
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                product:'Product@http://localhost:3001/remoteEntry.js',
                cart:'cart@http://localhost:3002/remoteEntry.js'            }
        })
    ]
}