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
  /*
  $("div.logo img").addClass("activo");

  $(".navegacion").show();
  //$(".navegacion nav ul li:first").addClass("activo");
  $(".navegacion nav ul li").on("click", function (e) {
    $(".navegacion nav ul li").removeClass("activo");
    e.preventDefault();
    $(this).addClass("activo");
  });
  */
  /*
  $("main").on({
    click: function () {
      $(this).addClass("activo");
    },
    mouseenter: function () {
      $(this).addClass("fondorojo");
    },
    mouseleave: function () {
      $(this).removeClass("activo");
      $(this).removeClass("fondorojo");
    },
  });
  */
  /*
  
  $("#navegacion").show();
  $("main article:first h2").text("Cambiando el texto");
  // $("main article:first").next().html("<h1>nuevo titulo</h1>  ");
  $(".navegacion ul li:first a").attr("href", "https://outlook.com");
  $(".navegacion ul li:first a").attr("target", "_blanck");
  $("article:first img").attr("src", "img/imagen_2.jpg");
  */

  $("main article:first img").on("click", function () {
    $(this).attr("src", "img/imagen_2.jpg");
  });
});
