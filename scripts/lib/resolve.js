const path = require('path'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = (subPath) => path.resolve(process.env.PWD, subPath);
