$(document).ready(function () {
  ("use strict");
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
  // evento click
  /*
  $("div.logo img").on("click", function () {
    console.log("has echo click en el logo");
    $(this).remove();
    });
    */
  // mouseenter || hover
  /*
  $("div.logo img").on("mouseenter", function () {
    console.log("has echo hover en el logo");
  });

  $("div.logo img").on("mouseleave", function () {
    console.log("saliendo del logo");
  });
  */
  // metodo show()
  /*
  $("#menu").on("click", function () {
    $("#navegacion").show();
  });
  */
  // agregando clases desde jquery
  $("div.logo img").addClass("activo");

  $(".navegacion").show();
  //$(".navegacion nav ul li:first").addClass("activo");
  $(".navegacion nav ul li").on("click", function (e) {
    $(".navegacion nav ul li").removeClass("activo");
    e.preventDefault();
    $(this).addClass("activo");
  });
});
