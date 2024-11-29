module.exports = {
    preset: "react-native",
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "node_modules/(?!(react-native|@react-native|react-clone-referenced-element|native-base|@native-base|react-navigation|@react-navigation)/)",
    ],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  };
  