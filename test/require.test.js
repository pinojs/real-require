'use strict'

const test = require('node:test')
const { realRequire } = require('../src')

test('should use webpack fallback require if available', (t) => {
  t.plan(1)

  globalThis.__non_webpack__require__ = function (arg) {
    return arg
  }

  t.assert.equal(realRequire('foobar'), 'foobar')
})

test('should use regular require when nothing else is available', (t) => {
  t.plan(1)

  globalThis.__non_webpack__require__ = undefined
  t.assert.deepStrictEqual(require('../src'), realRequire('../src'))
})
