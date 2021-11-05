'use strict'

const { test } = require('tap')
const { realRequire } = require('../src')

test('should use webpack fallback require if available', (t) => {
  t.plan(1)

  // eslint-disable-next-line camelcase
  globalThis.__non_webpack__require__ = function (arg) {
    return arg
  }

  t.equal(realRequire('foobar'), 'foobar')
})

test('should use regular require when nothing else is available', (t) => {
  t.plan(1)

  globalThis.__non_webpack__require__ = undefined
  t.strictSame(require('../src'), realRequire('../src'))
})
