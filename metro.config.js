const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push("sql");

// Wrap the configuration with NativeWind
const finalConfig = withNativeWind(config, { input: "./global.css" });

module.exports = finalConfig;
