module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'alav',
      externals: {
        react: 'React'
      }
    }
  }
}
