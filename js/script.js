"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var foo = function(bar) {
  return false;
};

var normalizeText = function(text) {
  var temp_text = text.toLowerCase();
  return temp_text.replace(/[^a-zA-Z0-9]/g, "");

}

var columns = function(text) {
  return Math.floor(Math.sqrt(text.length));
}

var chunkArray = function(text) {
  var cols = columns(text);
  var regex = new RegExp(".{1," + cols + "}", "g");
  var result = text.match(regex);
  return result;
}
