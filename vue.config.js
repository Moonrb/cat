module.exports = {
  devServer: {
    // port:8000, //随便改端口号
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        host: 'm.maoyan.com',
        changeOrigin: true
        // pathRewrite: {
        //     '^/v4/api
        //     ': '/v4/api'
        //   }
      }
    }
  }
}
