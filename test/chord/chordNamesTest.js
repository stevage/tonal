var vows = require('vows')
var assert = require('assert')
var chordNames = require('../../lib/chord/chordNames')
var chord = require('../../lib/chord/chord')

vows.describe('chord/chordNames').addBatch({
  'all chord names': function () {
    assert.equal(chordNames().length, 229)
    // from chords.json
    assert(chordNames().indexOf('Mb5') > 0)
    // from chord-aliases.json
    assert(chordNames().indexOf('M7') > 0)

    chordNames().forEach(function (name) {
      assert(chord(name) !== null, 'Chord ' + name + ' exists.')
    })
  }
}).export(module)