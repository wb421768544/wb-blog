module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/getarticlelist/*': {
        target: 'http://wangbing520.club:8080',
        changeOrigin: true,
      }
    }
  }
}