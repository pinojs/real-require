'use strict'

const test = require('node:test')
const { realImport } = require('../src')

test('should use dynamic import', async (t) => {
  t.plan(1)

  t.assert.equal(await realImport('../src/index.js'), await import('../src/index.js'))
})
