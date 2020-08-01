'use strict';
const fs = jest.createMockFromModule('fs');

function createWriteStream(directoryPath) {
  return {
    "_writableState": {
      "objectMode": false,
      "highWaterMark": 16384,
      "finalCalled": false,
      "needDrain": false,
      "ending": false,
      "ended": false,
      "finished": false,
      "destroyed": false,
      "decodeStrings": true,
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
    "writable": true,
    "_events": {},
    "_eventsCount": 0,
    "path": directoryPath || '',
    "fd": null,
    "flags": "w",
    "mode": 438,
    "autoClose": true,
    "bytesWritten": 0,
    "closed": false,
    "write": () => true,
    "end": () => true,
  }
}

fs.createWriteStream = createWriteStream;

module.exports = fs;