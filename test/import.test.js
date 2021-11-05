'use strict'

const { test } = require('tap')
const { realImport } = require('../src')

test('should use dynamic import', async (t) => {
  t.plan(1)

  t.equal(await realImport('../src/index.js'), await import('../src/index.js'))
})
