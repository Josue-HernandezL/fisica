var boton = document.getElementById("boton");
var contrapeso = document.getElementById("contraPeso");
var barra = document.getElementById("barra");
var pesoBarra = document.getElementById("pesoBarra");
var calculo = document.getElementById("calculoFisica");
var pesoCesta = document.getElementById("pesoCesta");
boton.addEventListener("click", function(){
    calculo.innerHTML="";
    var mediaBarra = barra.value/4;
    var barraDistancia = mediaBarra *3;
   for (i = 0; i <= barraDistancia; i++) {
        calculo.innerHTML += `<p class="resultado">${i} cm:</p><p class="resultado color1">${( (pesoBarra.value * mediaBarra) + ( contrapeso.value * i) - (pesoCesta.value * mediaBarra) ) / mediaBarra} g</p>`;      /* peso.value * i + "<br>" */
   }
});