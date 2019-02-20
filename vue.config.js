module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/list/*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    }
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
}