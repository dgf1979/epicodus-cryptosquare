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

  return text.replace(/[^a-zA-Z0-9]/g, "");

}