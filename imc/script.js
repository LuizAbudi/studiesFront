function calcular() {
  var peso = Number(document.getElementById("peso").value);
  var altura = Number(document.getElementById("altura").value);
  var resultado = document.querySelector("div#results");

  if (altura < 1.4 || altura > 2.5 || peso < 0 || peso > 300) {
    alert("Dados inválidos! Digite novamente");
  } else {
    let imc = 0;
    let classificacao;
    imc = peso / (altura * altura);
    resultado.innerHTML = "";

    if (imc < 18.5) {
      classificacao = "Magreza";
      resultado.innerHTML += `IMC considerado ${classificacao}`;
    } else if (imc > 18.5 && imc < 24.9) {
      classificacao = "Normal";
      resultado.innerHTML += `IMC considerado ${classificacao}`;
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
      resultado.innerHTML += `IMC considerado ${classificacao}`;
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = "Obesidade grau I";
      resultado.innerHTML += `IMC considerado ${classificacao}`;
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = "Obesidade grau II";
      resultado.innerHTML += `IMC considerado ${classificacao}`;
    } else if (imc >= 40) {
      classificacao = "Obesidade grau III";
      resultado.innerHTML += `IMC considerado ${classificacao}`;
    }
    resultado.innerHTML += "<br> <br>";
    resultado.innerHTML += `O imc é ${parseFloat(imc.toFixed(2))}`;
  }
}
