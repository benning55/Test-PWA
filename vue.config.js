const {
    GenerateSW
} = require("workbox-webpack-plugin");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/promptpay-pwa/' :
        '/',
    runtimeCompiler: true,
    configureWebpack: {
        plugins: [new GenerateSW()]
    }
}