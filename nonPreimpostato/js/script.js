// mettendo tutto qui dentro, sono certo che verrà fatto tutto quando il DOM è già stato caricato
$(document).ready(function(){

  // dichiaro le variabili relative alle frecce
  var frecciaSinistra = $("section.container div.sub-container .prev");
  var frecciaDestra = $("section.container div.sub-container .next");

  // dichiaro le variabili relative alla prima e all'ultima immagine
  var primaImg = $("section.container div.sub-container div.images img.first");
  var ultimaImg = $("section.container div.sub-container div.images img.last");

  // gestisco il click della freccia rivolta a sinistra
  frecciaSinistra.click(function(){

    // dichiaro la variabile relativa all'immagine che ha la classe active, ovvero che è visibile
    var imgAttiva = $("section.container div.sub-container div.images img.active");

    // al click, rendo la classe visibile non visibile, togliendole la classe active
    imgAttiva.removeClass("active");

    // se l'immagine attiva è la prima, al click vado all'ultima immagine, altrimenti vado all'immagine precedente a quella attiva
    if (imgAttiva.hasClass("first")) {
      ultimaImg.addClass("active");
    } else {
      imgAttiva.prev().addClass("active");
    }
  });

  // gestisco il click della freccia rivolta a destra
  frecciaDestra.click(function(){

    // dichiaro la variabile relativa all'immagine che ha la classe active, ovvero che è visibile
    var imgAttiva = $("section.container div.sub-container div.images img.active");

    // al click, rendo la classe visibile non visibile, togliendole la classe active
    imgAttiva.removeClass("active");

    // se l'immagine attiva è l'ultima, al click vado alla prima immagine, altrimenti vado all'immagine successiva a quella attiva
    if (imgAttiva.hasClass("last")) {
      primaImg.addClass("active");
    } else {
      imgAttiva.next().addClass("active");
    }
  });

});
