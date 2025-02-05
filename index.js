var altura = document.getElementById("height");
var peso = document.getElementById("weight");
var button = document.getElementById("calculate-imc");

var valorImc = document.getElementById("imc-value");
var resultado = document.getElementById("message");

button.addEventListener("click", (event) => {
  event.preventDefault();

  var imc = Number(peso.value) / Number(altura.value * altura.value);

  valorImc.innerText = imc.toFixed(2);

  if (imc < 18.5) {
    resultado.textContent = "Abaixo do Peso";
  } else if (imc >= 18.5 && imc < 25) {
    resultado.textContent = "Peso Normal";
  } else if (imc >= 25 && imc < 30) {
    resultado.textContent = "Sobrepeso";
  } else {
    resultado.textContent = "Obesidade Morbida";
  }
});
