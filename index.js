'use strict';
const treeify = require('treeify');
const set = require('lodash.set');

const ki = function ki(inputs) {
  const tree = ki.getTree(inputs);
  return treeify.asTree(tree);
};

ki.getTree = inputs => {
  const tree = {};
  for (const input of inputs) {
    set(tree, input, null);
  }
  return tree;
};

module.exports = ki;
