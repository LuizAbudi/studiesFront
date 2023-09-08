var numero = document.querySelector("input#fnum");
var lista = document.querySelector("select#flista");

let resultado = document.querySelector("div#results");
let valores = [];

function isNumero(num) {
  if (Number(num) >= 1 && Number(num) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(num, list) {
  if (list.indexOf(Number(num)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = document.createElement("option");
    item.text = `Valor ${numero.value} adicionado`;
    lista.appendChild(item);
    resultado.innerHTML = "";
  } else {
    alert("Valor digitado é inválido ou já está na lista");
  }
  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Não há valores!!");
  } else {
    let total = valores.length;

    resultado.innerHTML = "";
    resultado.innerHTML += `O total de números digitados foi de ${total} <br><br>`;

    let maiorValor = valores[0];
    let menorValor = valores[0];
    let soma = 0;
    let media = 0;

    valores.sort(comparar);

    for (let i in valores) {
      if (i == valores.length - 1) {
        maiorValor = valores[i];
      }
    }
    menorValor = valores[0];

    media = soma / total;

    resultado.innerHTML += `O maior número digitado foi ${maiorValor}<br><br>`;
    resultado.innerHTML += `O menor número digitado foi ${menorValor}<br><br>`;
    resultado.innerHTML += `A soma de todos os números digitados foi ${soma}<br><br>`;
    resultado.innerHTML += `A media dos números digitados foi ${media}<br><br>`;

    resultado.innerHTML += `Os números digitados foram [${valores}]<br><br>`;
  }
}

function comparar(a, b) {
  return a - b;
}
