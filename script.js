$(document).ready(function(){

  var botonPonerAdorno = $("#botonPonerAdorno");
  var botonMoverArbol = $("#botonMoverArbol");
  var contBolasCreadas = $("#bolasCreadas");
  var contBolasEliminadas = $("#bolasEliminadas");
  var arbol = $("#arbol");
  var imagenArbol = $("#imagenArbol");

  botonMoverArbol.click(tirarBolas);

  botonPonerAdorno.click(crearBolas);

  var cont = 0;
  var contBolasPuestas = 0;
  var contBolasTiradas = 0;


  //Función crearBolas()
  function crearBolas(){

    console.clear();

    cont++;
    contBolasPuestas++;

    contBolasCreadas.text(contBolasPuestas);

    arbol.append("<div id ='bola" + cont + "' class='bolas'></div>");

    let bola = document.getElementById("bola" + cont);

    let top = numeroAleatorio(0, 320);

    let min = calcularMinimo(top);
    let max = calcularMaximo(top);

    let left = numeroAleatorio(min, max);

    console.log("Left = " + left);

    bola.style.top = top + "px";
    bola.style.left = left + "px";
    bola.style.backgroundColor = "rgb(" + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + ")";
    bola.style.background = "linear-gradient(180deg, rgba(" + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + ", 1) 0%, rgba(" + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + "," + numeroAleatorio(0, 255) + ") 100%)";


    function numeroAleatorio(min, max) {

      return Math.round(Math.random() * (max - min) + min);
    }
  
  
    function calcularMinimo(top) {
  
      var hipotenusa = top * 350 / 320;
  
      var aux = Math.pow(hipotenusa, 2) - Math.pow(top, 2);
  
      return 185 - (Math.sqrt(aux));
    }
  
  
    function calcularMaximo(top) {
  
      var hipotenusa = top * 350 / 320;
  
      var aux = Math.pow(hipotenusa, 2) - Math.pow(top, 2);
  
      return 185 + (Math.sqrt(aux));
    }
  }


  
  //Función tirarBolas()
  function tirarBolas() {

    contBolasTiradas += contBolasPuestas;
    contBolasPuestas = 0;

    contBolasEliminadas.text(contBolasTiradas);
    contBolasCreadas.text(contBolasPuestas);

    let bolas = $(".bolas");

    for(let i = 0; i <= 4; i++){

      imagenArbol.animate({left: "7px"}, 60);
      imagenArbol.animate({left: "-7px"}, 60);
      imagenArbol.animate({left: "0px"}, 60);

    }

    for (let i = 0; i < bolas.length; i++) {
      
      $("#bola"+(i+1)).delay(400).animate({ "top": "370px" }, 800 );

    }
    
  }

});