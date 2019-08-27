const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
  if (!env || !env.MODE) {
    throw new Error("webpack --env.MODE option is not specified");
  }

  const isDevMode = env.MODE === "dev";
  const webpackMode = env.MODE === "dev" ? "development" : "production";

  const optimization_dev = {
    minimize: false
  };
  const optimization_prod = {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      }),
      new CompressionPlugin({
        test: /\.(html|css|js)(\?.*)?$/i
      }),
      new ImageminPlugin({
        test: "./public/images/**",
        gifsicle: {
          optimizationLevel: 9
        },
        pngquant: {
          quality: "75"
        },
        plugins: [
          imageminMozjpeg({
            quality: "75"
          })
        ]
      }),
      new CopyWebpackPlugin([{ from: "./client/static/favicon.png" }])
    ]
  };
  const optimization = isDevMode ? optimization_dev : optimization_prod;
  return {
    mode: webpackMode,
    devtool: isDevMode ? "inline-source-map" : "source-map",
    entry: "./client/index.js",
    output: {
      filename: "js/app.js",
      path: path.resolve(__dirname, "public"),
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.s?css$/,
          exclude: /\.module\.scss$/,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true }
            },
            {
              loader: "postcss-loader",
              options: { sourceMap: true }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ]
        },
        {
          test: /\.module\.scss$/,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: "_[local]_[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: { sourceMap: true }
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ]
        },
        isDevMode
          ? {
              test: /\.(jpe?g|png|gif|svg)$/,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    outputPath: "images/",
                    publicPath: "images/"
                  }
                }
              ]
            }
          : {
              test: /\.(jpe?g|png|gif|svg)$/,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    name: "[name].[ext]",
                    outputPath: "images/",
                    publicPath: "images/"
                  }
                },
                {
                  loader: "image-webpack-loader",
                  options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 65
                    },
                    optipng: {
                      enabled: false
                    },
                    pngquant: {
                      quality: "65-90",
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false
                    },
                    webp: {
                      quality: 75
                    }
                  }
                }
              ]
            },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
                publicPath: "fonts/"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: { ["~"]: path.resolve(__dirname, "client/") },
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          "**/*",
          "!.htaccess*",
          "!index.php*",
          "!robots.txt*",
          "!web.config*"
        ]
      }),
      new MiniCssExtractPlugin({
        filename: "css/app.css"
      })
    ],
    optimization
  };
};
