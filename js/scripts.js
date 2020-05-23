$(document).ready(function () {
  "use strict";
  /*
  $("main article:first").hide();
  /*
  var articuloFinal = $("main article:last").clone();
  $("main").append(articuloFinal);
  $("main").prepend(articuloFinal);

  // usando appendTo y prependTo
  var articuloFinal = $("main article:last").clone();
  //$(articuloFinal).prependTo("main");
  $(articuloFinal).appendTo("main");
  */
  $("div.logo img").on("click", function () {
    console.log("has echo click en el logo");
  });
});
