#!/usr/bin/env node
const cli = require('meow')();
const ki = require('..');

const tree = ki(cli.input);
console.log(tree);
