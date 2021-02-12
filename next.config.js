const path = require('path')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

const pathPrefix = () => {
  const config = {
    enable: true,
    subDir: '/next-light-starter'
  }
  if (!config.enable) return
  return { basePath: config.subDir, assetPrefix: `${config.subDir}/` }
}

module.exports = {
  // TODO: webpack @5.2*.** update is going to change a lot of things. ( CopyWebpackPlugin API etc.. )
  // Temporary hold the next.js version 'latest' to '10.0.5' for now on package.json
  // feature: { webpack5: true },
  webpack: (config, option) => {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /(node_modules)$/,
      use: 'eslint-loader'
    })

    option.isServer &&
      config.plugins.push(
        new ForkTsChecker({
          typescript: {
            diagnosticOptions: {
              semantic: true,
              syntactic: true
            }
          }
        }),
        new StylelintPlugin({
          files: 'src/styles/**/*.(s(c|a)ss|css)',
          fix: true
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: '*.{png,jpg,jpeg,gif}',
              context: path.resolve(__dirname, 'src', 'toWebps'),
              to: path.resolve(__dirname, 'public', 'webps'),
              noErrorOnMissing: true
            },
            {
              from: '**/*.{png,jpg,jpeg,gif}',
              context: path.resolve(__dirname, 'src', 'markdowns'),
              to: path.resolve(__dirname, 'public', 'webps'),
              flatten: true,
              noErrorOnMissing: true
            }
          ]
        }),
        new ImageminWebpWebpackPlugin({
          config: [
            {
              test: /\.(jpe?g|png)$/i,
              options: {
                quality: 60
              }
            }
          ],
          detailedLogs: false,
          silent: false
        }),
        new WebpackBuildNotifierPlugin({ title: 'Next.js Build 🏄‍', suppressSuccess: 'initial' })
      )
    return config
  },

  ...pathPrefix()
}
