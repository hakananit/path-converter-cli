#!/usr/bin/env node
'use strict';
//a
//d
//e
//f
//m
//2
//4
//5
const MAX_PATH_LENGTH = 260;
//3
let result;

const isWindows = function() {
  return process.platform === 'win32';
};

const isPathLengthSafe = function(path) {
  return path.length < MAX_PATH_LENGTH;
};
//2
const replaceSlashForwardToBackward = function(string) {
  return string.replace(/\//g, '\\');
};

const replaceSlashBackwardToForward = function(string) {
  return string.replace(/\\/g, '/');
};

const convert = function(path) {
  try {
    if (isPathLengthSafe(path)) {
      if (isWindows()) {
        return replaceSlashForwardToBackward(path);
      }
      return replaceSlashBackwardToForward(path);
    } else {
      throw 'Windows supports path length <260 characters!';
    }
  } catch (e) {
    console.error(e);
  }
};

const main = function() {
  result = convert(process.argv.slice(2).toString());
  console.log(result);
  return result;
};

main();

module.exports = {
  isWindows,
  isPathLengthSafe,
  replaceSlashBackwardToForward,
  replaceSlashForwardToBackward
};
