const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@comp": path.resolve(__dirname, "./src/components"),
        "@auth": path.resolve(__dirname, "./src/components/auth"),
        "@pages": path.resolve(__dirname, "./src/pages"),
      },
      // extensions: [".js", ".vue", ".ts",".json"],
    },
  },
};
