const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware("/api/Access/users",{
            target: "https://www.redefinesolutions.com",
            secure: false,
            changeOrigin: true
        })
    );

    app.use(
        createProxyMiddleware("/api/Access/users/add",{
            target: "https://www.redefinesolutions.com",
            secure: false,
            changeOrigin: true
        })
    );
};