const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin, EnvironmentPlugin } = require("webpack");

const cwd = process.cwd();
const outputPath = path.join(cwd, "build");

module.exports = {
  context: path.resolve(cwd, "./"),
  entry: ["./src/index.tsx"],
  output: {
    path: outputPath,
    publicPath: "/",
    pathinfo: false,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".mjs"],
    alias: {
      ...resolveTsconfigPathsToAlias({
        tsconfigPath: "./tsconfig.path.json", // Using custom path
      }),
      process: "process/browser",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: [/node_modules/],
        use: ["babel-loader?cacheDirectory"],
      },
      {
        test: /\.(sass|less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#1DA57A",
                  "link-color": "#1DA57A",
                  "border-radius-base": "2px",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|json)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
    ],
  },
  plugins: [
    // new TsconfigPathsPlugin({
    //     configFile: path.resolve(__dirname,'tsconfig.path.json')
    // }),
    new EnvironmentPlugin({
      REACT_APP_BASE_URL: "https://server.missatvegan.ir/graphql",
    }),
    new ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

function resolveTsconfigPathsToAlias({
  tsconfigPath = "./tsconfig.json",
  webpackConfigBasePath = __dirname + "/src",
} = {}) {
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace("/*", "");
    const value = path.resolve(
      webpackConfigBasePath,
      paths[item][0].replace("/*", "").replace("*", "")
    );

    aliases[key] = value;
  });

  return aliases;
}
