const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Configure asset extensions
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
config.resolver.sourceExts.push("svg", "sql"); // Add support for .svg and .sql files

// Configure transformers for SVG files
config.transformer = {
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// Wrap the configuration with NativeWind
const finalConfig = withNativeWind(config, { input: "./global.css" });

module.exports = finalConfig;
