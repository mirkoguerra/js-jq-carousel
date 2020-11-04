// mettendo tutto qui dentro, sono certo che verrà fatto tutto quando il DOM è già stato caricato
$(document).ready(function(){

  // definizione variabili
  var imgPrima = $("img.first");
  var imgUltima = $("img.last");
  var pallinoPrimo = $("i.first");
  var pallinoUltimo = $("i.last");

  // gestisco il click della freccia sinistra
  $(".prev").click(function(){

    // definizione variabile attiva
    var imgAttiva = $(".slider-wrapper .images img.active");
    var pallinoAttivo = $(".nav > i.active");

    imgAttiva.removeClass("active"); // faccio in modo che al click della freccia rivolta verso sinistra, la classe active, inizialmente presente solo sulla prima immagine, venga tolta, così da rendere il display none
    pallinoAttivo.removeClass("active"); // stessa cosa per il pallino

    if (imgAttiva.hasClass("first")) {
      imgUltima.addClass("active");
      pallinoUltimo.addClass("active");
    } else {
      imgAttiva.prev().addClass("active");
      pallinoAttivo.prev().addClass("active");
    } // se sono sulla prima immagine passo all'ultima, altrimenti passo all'immagine precedente rispetto a quella visualizzata, stessa logica per i pallini
  });

  // gestisco il click della freccia destra
  $(".next").click(function(){

    // definizione variabile attiva
    var imgAttiva = $(".slider-wrapper .images img.active");
    var pallinoAttivo = $(".nav > i.active");

    imgAttiva.removeClass("active"); // faccio in modo che al click della freccia rivolta verso destra, la classe active, inizialmente presente solo sulla prima immagine, venga tolta, così da rendere il display none
    pallinoAttivo.removeClass("active"); // stessa cosa per il pallino

    if (imgAttiva.hasClass("last")) {
      imgPrima.addClass("active");
      pallinoPrimo.addClass("active");
    } else {
      imgAttiva.next().addClass("active");
      pallinoAttivo.next().addClass("active");
    } // se sono sull'ultima immagine passo alla prima, altrimenti passo all'immagine successiva rispetto a quella visualizzata
  });

});

//$(document).keyup(function)(){
//  switch(event.which) {
//    case 37:
//      nomeFunzionePrev();
//      break;
//    case 39:
//      nomeFunzioneNext();
//      break;
//  }
//} per far funzionare le frecce
