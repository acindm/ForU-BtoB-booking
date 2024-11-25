const path = require("path")
const CracoLessPlugin = require('craco-less');

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
// less配置，配置完成后可以使用less类型
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  //别名配置
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}
