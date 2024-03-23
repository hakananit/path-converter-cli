#!/usr/bin/env node
'use strict';
//c
//c1
// a
// a1
// a2
//a3
//a4
//a5
//a6
//d
//d1
// a7
//a8
//a9
//a10
//a11

const MAX_PATH_LENGTH = 260;

let result;

const isWindows = function() {
  return process.platform === 'win32';
};

const isPathLengthSafe = function(path) {
  return path.length < MAX_PATH_LENGTH;
};

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
