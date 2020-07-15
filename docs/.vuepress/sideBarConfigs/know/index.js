const js = require("./javascript");
const html = require("./html");
const css = require("./css");
const node = require("./node");
const typescript = require("./typescript");
const webpack = require("./webpack");
const brower = require("./brower");
const vue = require("./vue");
const react = require("./react");
const quickapp = require("./quickapp");
const miniapp = require("./miniapp");
const project = require("./project");
const modules = require("./modules");
const design = require("./design");
const algorithm = require("./algorithm");

//知识库
module.exports = {
  title: "知识库",
  // path: "/知识库/",
  children: [
    js,
    html,
    css,
    node,
    typescript,
    webpack,
    brower,
    vue,
    react,
    quickapp,
    miniapp,
    project,
    modules,
    design,
    algorithm,
  ],
};
