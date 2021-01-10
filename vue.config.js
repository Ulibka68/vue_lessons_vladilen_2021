const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@comp": path.resolve(__dirname, "./src/components"),
            },
            // extensions: [".js", ".vue", ".ts",".json"],
        },
    }
};