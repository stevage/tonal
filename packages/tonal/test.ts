import * as Tonal from "./index";

describe("tonal", () => {
  test("exported modules and functions", () => {
    const exportedNames = Object.keys(Tonal).sort();
    expect(exportedNames).toEqual([
      "AbcNotation",
      "Array",
      "Chord",
      "ChordDictionary",
      "ChordType",
      "Collection",
      "Core",
      "DurationValue",
      "Interval",
      "Key",
      "Midi",
      "Mode",
      "Note",
      "PcSet", // <- deprecated
      "Pcset",
      "Progression",
      "Range",
      "RomanNumeral",
      "Scale",
      "ScaleDictionary",
      "ScaleType",
      "TimeSignature",
      "Tonal",
      "accToAlt",
      "altToAcc",
      "coordToInterval",
      "coordToNote",
      "decode",
      "deprecate",
      "distance",
      "encode",
      "fillStr",
      "interval",
      "isNamed",
      "isPitch",
      "note",
      "stepToLetter",
      "tokenizeInterval",
      "tokenizeNote",
      "tonicIntervalsTransposer",
      "transpose",
    ]);
  });
  test("Modules exports functions", () => {
    const modNames = Object.keys(Tonal)
      .sort()
      .filter((name) => name[0] === name.toUpperCase()[0]);

    const exportedFunctions = modNames.reduce(
      (exported, modName) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mod = (Tonal as any)[modName];
        exported[modName] = Object.keys(mod).sort();
        return exported;
      },
      {} as Record<string, string[]>,
    );

    expect(exportedFunctions).toEqual({
      AbcNotation: [
        "abcToScientificNotation",
        "distance",
        "scientificToAbcNotation",
        "tokenize",
        "transpose",
      ],
      Array: [
        "compact",
        "permutations",
        "range",
        "rotate",
        "shuffle",
        "sortedNoteNames",
        "sortedUniqNoteNames",
      ],
      Chord: [
        "chord",
        "chordScales",
        "degrees",
        "detect",
        "extended",
        "get",
        "getChord",
        "reduced",
        "steps",
        "tokenize",
        "transpose",
      ],
      ChordDictionary: [
        "add",
        "all",
        "chordType",
        "entries",
        "get",
        "keys",
        "names",
        "removeAll",
        "symbols",
      ],
      ChordType: [
        "add",
        "all",
        "chordType",
        "entries",
        "get",
        "keys",
        "names",
        "removeAll",
        "symbols",
      ],
      Collection: ["compact", "permutations", "range", "rotate", "shuffle"],
      Core: [
        "accToAlt",
        "altToAcc",
        "coordToInterval",
        "coordToNote",
        "decode",
        "deprecate",
        "distance",
        "encode",
        "fillStr",
        "interval",
        "isNamed",
        "isPitch",
        "note",
        "stepToLetter",
        "tokenizeInterval",
        "tokenizeNote",
        "tonicIntervalsTransposer",
        "transpose",
      ],
      DurationValue: ["fraction", "get", "names", "shorthands", "value"],
      Interval: [
        "add",
        "addTo",
        "distance",
        "fromSemitones",
        "get",
        "invert",
        "name",
        "names",
        "num",
        "quality",
        "semitones",
        "simplify",
        "substract",
        "transposeFifths",
      ],
      Key: ["majorKey", "majorTonicFromKeySignature", "minorKey"],
      Midi: [
        "chroma",
        "freqToMidi",
        "isMidi",
        "midiToFreq",
        "midiToNoteName",
        "pcset",
        "pcsetDegrees",
        "pcsetNearest",
        "pcsetSteps",
        "toMidi",
      ],
      Mode: [
        "all",
        "distance",
        "entries",
        "get",
        "mode",
        "names",
        "notes",
        "relativeTonic",
        "seventhChords",
        "triads",
      ],
      Note: [
        "accidentals",
        "ascending",
        "chroma",
        "descending",
        "enharmonic",
        "freq",
        "fromFreq",
        "fromFreqSharps",
        "fromMidi",
        "fromMidiSharps",
        "get",
        "midi",
        "name",
        "names",
        "octave",
        "pitchClass",
        "simplify",
        "sortedNames",
        "sortedUniqNames",
        "tr",
        "trBy",
        "trFifths",
        "trFrom",
        "transpose",
        "transposeBy",
        "transposeFifths",
        "transposeFrom",
        "transposeOctaves",
      ],
      PcSet: [
        "chroma",
        "chromas",
        "filter",
        "get",
        "intervals",
        "isEqual",
        "isNoteIncludedIn",
        "isSubsetOf",
        "isSupersetOf",
        "modes",
        "num",
        "pcset",
      ],
      Pcset: [
        "chroma",
        "chromas",
        "filter",
        "get",
        "intervals",
        "isEqual",
        "isNoteIncludedIn",
        "isSubsetOf",
        "isSupersetOf",
        "modes",
        "num",
        "pcset",
      ],
      Progression: ["fromRomanNumerals", "toRomanNumerals"],
      Range: ["chromatic", "numeric"],
      RomanNumeral: ["get", "names", "romanNumeral"],
      Scale: [
        "degrees",
        "detect",
        "extended",
        "get",
        "modeNames",
        "names",
        "rangeOf",
        "reduced",
        "scale",
        "scaleChords",
        "scaleNotes",
        "steps",
        "tokenize",
      ],
      ScaleDictionary: [
        "add",
        "all",
        "entries",
        "get",
        "keys",
        "names",
        "removeAll",
        "scaleType",
      ],
      ScaleType: [
        "add",
        "all",
        "entries",
        "get",
        "keys",
        "names",
        "removeAll",
        "scaleType",
      ],
      TimeSignature: ["get", "names", "parse"],
      Tonal: [
        "accToAlt",
        "altToAcc",
        "coordToInterval",
        "coordToNote",
        "decode",
        "deprecate",
        "distance",
        "encode",
        "fillStr",
        "interval",
        "isNamed",
        "isPitch",
        "note",
        "stepToLetter",
        "tokenizeInterval",
        "tokenizeNote",
        "tonicIntervalsTransposer",
        "transpose",
      ],
    });
  });
});
