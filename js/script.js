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

var encrypt = function(text) {
  var arr1 = chunkArray(text);
  var new_string = "";
  for (var col = 0; col < columns(text); col++) {
    for (var row = 0; row < arr1.length; row++) {
      new_string += arr1[row].substring(col, col + 1);
    }
  }
  var regex = new RegExp(".{1,5}", "g");
  console.log(new_string.match(regex));
  return new_string.match(regex).join(" ");
}
