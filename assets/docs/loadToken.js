const yaml = require("js-yaml");
const fs = require("fs"); // eslint-disable-line import/no-extraneous-dependencies
const path = require("path"); // eslint-disable-line import/no-extraneous-dependencies

let data;

module.exports = function loadToken(token) {
  const tokenPath = `../../design/${token}.yml`;

  const absPath = path.resolve(__dirname, tokenPath);

  const file = fs.readFileSync(absPath, "utf8");

  data = yaml.safeLoad(file);

  return data;
};
