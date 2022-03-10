const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{
            target:"http://10.13.46.31:8888",
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        }),
        createProxyMiddleware('/testApi',{
            target:"https://f3d74934-cfcc-44dc-ba5f-b313c4b7e81d.mock.pstmn.io",
            changeOrigin:true,
            pathRewrite:{'^/testApi':''}
        })
    )
}