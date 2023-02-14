var boton = document.getElementById("boton");
var contrapeso = document.getElementById("contraPeso");
var barra = document.getElementById("barra");
var pesoBarra = document.getElementById("pesoBarra");
var calculo = document.getElementById("calculoFisica");
boton.addEventListener("click", function(){
    calculo.innerHTML="";
    var mediaBarra = barra.value/4;
   for (i = 0; i <= barra.value; i++) {
        calculo.innerHTML += `<p class="resultado">${i} cm:</p><p class="resultado">${( (pesoBarra.value * mediaBarra) + ( contrapeso.value * i) - (20 * mediaBarra) ) / mediaBarra}</p>`;      /* peso.value * i + "<br>" */
   }
});