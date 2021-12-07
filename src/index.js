/* eslint-disable no-new-func, camelcase */
/* globals __non_webpack__require__ */

const realImport = typeof process === "undefined" ? new Function('modulePath', 'return import(modulePath)') : async () => {
  if(modulePath.startsWith('file://')){
    return realRequire(modulePath.replace(modulePath[9] === ":" ? 'file:///' : 'file://', ''))
  }else{
    return realRequire(modulePath)
  }
}

function realRequire(modulePath) {
  if (typeof __non_webpack__require__ === 'function') {
    return __non_webpack__require__(modulePath)
  }

  return require(modulePath)
}

module.exports = { realImport, realRequire }
