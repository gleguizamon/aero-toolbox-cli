#!/usr/bin/env node
const argv = require('../lib/config/yargs');
const inputFormatter = require('../lib/utils/input-formatter');
const getWxFromCode = require('../lib/commands/getWxFromCode');

getWxFromCode(argv.metar, argv.decode);
