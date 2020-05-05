const merge = require("webpack-merge");
const buildConfig = require("./common.config");

module.exports = buildConfig({
    name: "client",
    target: "web",
});
