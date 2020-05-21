$(document).ready(function () {
  "use strict";
  $("main article:first").hide();
  var articuloFinal = $("main article:last").clone();
  $("main").append(articuloFinal);
  $("main").prepend(articuloFinal);
});
