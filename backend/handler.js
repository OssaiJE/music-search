'use strict';
const serverless = require('serverless-http');
const app = require('./dist/index');
module.exports.hello = serverless(app.default, { provider: 'aws' });
