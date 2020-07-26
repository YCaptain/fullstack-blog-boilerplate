module.exports = (phase, { defaultConfig }) => {

  return ({
    webpack: function (config) {
      config.module.rules.push(
        {
          test: /\.ya?ml$/,
          use: 'js-yaml-loader',
        },
      )
      return config
    }
  })
}
