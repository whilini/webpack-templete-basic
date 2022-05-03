// import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입접 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"), // __dirname은 현재 파일이 있는 경로를 지칭
    // filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // .scss 혹은 .css로 끝나는 확장자를 찾는 정규식
        use: [
          "style-loader", // 순서대로 적어야 함
          "css-loader", // 먼저 해석되는건 css-loader
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "static" }, // 'static'이라는 폴더에서 복사하여 'dist'에 삽입하기
      ],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
