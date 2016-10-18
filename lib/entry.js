'use strict';


var TextToSpeechV1 = require('../node_modules/watson-developer-cloud/text-to-speech/v1.js');
var fs = require('fs');

var something = function() {
  return TextToSpeechV1;
};

window.something = something;

console.log('fuck');
