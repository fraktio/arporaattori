const path = require("path");
const util = require("util");
const {
  pipe,
  empty,
  defaultFeatures,
  defaultPaths,
  defaultBaseConfig,
  mergeOptions,
  addFeatures,
  compile,
  override,
  run,
  toJS
} = require("@dr-kobros/broilerplate");

const postCssFeature = require("@dr-kobros/broilerplate-postcss");
const nodeExternalsFeature = require("@dr-kobros/broilerplate/lib/features/nodeExternalsFeature");
const externalCssFeature = require("@dr-kobros/broilerplate/lib/features/externalCssFeature");
const extractCssFeature = require("@dr-kobros/broilerplate-mini-css-extract");
const emotionFeature = require("./src/config/emotion");

const dotenv = require("dotenv");
dotenv.config();

const { Map } = require("immutable");

module.exports = target => {
  const env = process.env.NODE_ENV;

  const config = pipe(
    empty,
    defaultPaths(env, target, __dirname),
    defaultBaseConfig(env, target),
    mergeOptions(
      Map({
        debug: env === "development" ? true : false
      })
    ),
    defaultFeatures,
    addFeatures(
      postCssFeature(),
      emotionFeature(),
      externalCssFeature(),
      extractCssFeature(),
      nodeExternalsFeature({
        whitelist: []
      })
    ),
    build => {
      if (env === "production") {
        return build;
      }
      return build.setIn(["base", "devtool"], "cheap-module-eval-source-map");
    },
    compile(env, target),
    override(path.join(__dirname, "./src/config/overrides")),
    run,
    toJS
  )(Map());

  // console.log("config", util.inspect(config, { depth: 666 }));
  // process.exit();

  return config;
};
