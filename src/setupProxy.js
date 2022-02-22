const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{
            target:"http://10.13.46.31:8888",
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        })
    )
}