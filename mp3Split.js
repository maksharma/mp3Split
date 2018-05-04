'use strict';

const mp3Split = require('mp3-split');

let options = {input: 'a.mp3', audios: ['[00:13] testFileoutput']}; //input and output file with length
let split = mp3Split(options);
split.parse().then((parsedAudio) => {
  for (let audio of parsedAudio) {
    console.log(audio.name);      // filename
    console.log(audio.start);     // audio start
    console.log(audio.end);       // audio end
    console.log(audio.trackName); // track name
  }
});

