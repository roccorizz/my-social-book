module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },


  // webpack(config) {
  //   const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
  //   fileLoaderRule.exclude = /\.svg$/
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     loader: require.resolve('@svgr/webpack')
  //   })
  //   return config
  // }
}

