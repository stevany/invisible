'use strict';
const fs = jest.createMockFromModule('fs');

function createInterface(directoryPath) {
  return {
    "_sawReturnAt": 1596262351786,
    "isCompletionEnabled": true,
    "_sawKeyPress": true,
    "_previousKey": {
      "sequence": "\r",
      "name": "return",
      "ctrl": false,
      "meta": false,
      "shift": false
    },
    "escapeCodeTimeout": 500,
    "_events": {
      "close": [
        null,
        null
      ]
    },
    "_eventsCount": 2,
    "output": {
      "connecting": false,
      "_hadError": false,
      "_parent": null,
      "_host": null,
      "_readableState": {
        "objectMode": false,
        "highWaterMark": 16384,
        "buffer": {
          "head": null,
          "tail": null,
          "length": 0
        },
        "length": 0,
        "pipes": null,
        "pipesCount": 0,
        "flowing": null,
        "ended": false,
        "endEmitted": false,
        "reading": false,
        "sync": true,
        "needReadable": false,
        "emittedReadable": false,
        "readableListening": false,
        "resumeScheduled": false,
        "paused": true,
        "emitClose": false,
        "autoDestroy": false,
        "destroyed": false,
        "defaultEncoding": "utf8",
        "awaitDrain": 0,
        "readingMore": false,
        "decoder": null,
        "encoding": null
      },
      "readable": false,
      "_events": {},
      "_eventsCount": 2,
      "_writableState": {
        "objectMode": false,
        "highWaterMark": 16384,
        "finalCalled": false,
        "needDrain": false,
        "ending": false,
        "ended": false,
        "finished": false,
        "destroyed": false,
        "decodeStrings": false,
        "defaultEncoding": "utf8",
        "length": 0,
        "writing": false,
        "corked": 0,
        "sync": false,
        "bufferProcessing": false,
        "writecb": null,
        "writelen": 0,
        "bufferedRequest": null,
        "lastBufferedRequest": null,
        "pendingcb": 1,
        "prefinished": false,
        "errorEmitted": false,
        "emitClose": false,
        "autoDestroy": false,
        "bufferedRequestCount": 0,
        "corkedRequestsFree": {
          "next": null,
          "entry": null
        }
      },
      "writable": true,
      "allowHalfOpen": false,
      "_sockname": null,
      "_pendingData": null,
      "_pendingEncoding": "",
      "server": null,
      "_server": null,
      "columns": 188,
      "rows": 11,
      "_type": "tty",
      "fd": 1,
      "_isStdio": true
    },
    "input": {
      "connecting": false,
      "_hadError": false,
      "_parent": null,
      "_host": null,
      "_readableState": {
        "objectMode": false,
        "highWaterMark": 0,
        "buffer": {
          "head": null,
          "tail": null,
          "length": 0
        },
        "length": 0,
        "pipes": null,
        "pipesCount": 0,
        "flowing": true,
        "ended": false,
        "endEmitted": false,
        "reading": true,
        "sync": false,
        "needReadable": true,
        "emittedReadable": false,
        "readableListening": false,
        "resumeScheduled": false,
        "paused": false,
        "emitClose": false,
        "autoDestroy": false,
        "destroyed": false,
        "defaultEncoding": "utf8",
        "awaitDrain": 0,
        "readingMore": false,
        "decoder": null,
        "encoding": null
      },
      "readable": true,
      "_events": {
        "end": [
          null,
          null
        ]
      },
      "_eventsCount": 4,
      "_writableState": {
        "objectMode": false,
        "highWaterMark": 0,
        "finalCalled": false,
        "needDrain": false,
        "ending": false,
        "ended": false,
        "finished": false,
        "destroyed": false,
        "decodeStrings": false,
        "defaultEncoding": "utf8",
        "length": 0,
        "writing": false,
        "corked": 0,
        "sync": true,
        "bufferProcessing": false,
        "writecb": null,
        "writelen": 0,
        "bufferedRequest": null,
        "lastBufferedRequest": null,
        "pendingcb": 0,
        "prefinished": false,
        "errorEmitted": false,
        "emitClose": false,
        "autoDestroy": false,
        "bufferedRequestCount": 0,
        "corkedRequestsFree": {
          "next": null,
          "entry": null
        }
      },
      "writable": false,
      "allowHalfOpen": false,
      "_sockname": null,
      "_pendingData": null,
      "_pendingEncoding": "",
      "server": null,
      "_server": null,
      "isRaw": true,
      "isTTY": true,
      "fd": 0
    },
    "historySize": 30,
    "removeHistoryDuplicates": false,
    "crlfDelay": 100,
    "_prompt": "> ",
    "terminal": true,
    "line": "",
    "cursor": 0,
    "history": [
      directoryPath
    ],
    "historyIndex": -1,
    "prevRows": 0
  }
}

fs.createInterface = createInterface;

module.exports = fs;