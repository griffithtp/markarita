const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins")

// module.exports = withSass({
//   cssModules: true
// });
// const withSassExport = withSass({
//   cssModules: true
// });
// const withCssExport = withCSS({
//   cssLoaderOptions: {
//     url: false
//   },
// })
// console.log(withSassExport, withCssExport)
// module.exports = withSassExport;

// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   },
// })

module.exports = withPlugins([
  [
    withCSS,
    {
        cssLoaderOptions: {
          url: false
        },
      // webpack: function(config) {
      //   config.module.rules.push({
      //     test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      //     use: {
      //       loader: "url-loader",
      //       options: {
      //         limit: 100000,
      //         name: "[name].[ext]",
      //       },
      //     },
      //   })
      //   return config
      // },
    },
  ],
  [
    withSass,
    {
      cssModules: true,
      // cssLoaderOptions: {
      //   importLoaders: 1,
      //   localIdentName: "[local]___[hash:base64:5]",
      // },
    },
  ],
])