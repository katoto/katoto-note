# webpack中CSS文件的处理

## loader的应用

使用 loader 要注意顺序

```js
//webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  plugins: {
    new MiniCssExtractPlugin({
    	filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
  	})
  },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
          DEV ? 'style-loader' : MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader',
          'less-loader'
        ],
			},
		]
	}
}
//postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

## CSS-in-JS

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'astroturf/loader'],
      }
    ]
  }
}
```

