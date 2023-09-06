function contar() {
  let inicio = Number(document.getElementById("inicio").value);
  let fim = Number(document.getElementById("fim").value);
  let passo = Number(document.getElementById("passo").value);
  let result = document.getElementById("results");

  if (inicio == null || fim == null || passo == 0 || passo == null) {
    window.alert("[ERRO] valor inválido!");
  } else {
    result.innerHTML = "Contando: ";

    if (passo <= 0) {
      window.alert("Passo Inválido! Considerando passo = 1.");
    }

    if (inicio < fim) {
      for (inicio; inicio <= fim; inicio += passo) {
        result.innerHTML += `${inicio} `;
      }
    } else {
      for (inicio; inicio >= fim; inicio -= passo) {
        result.innerHTML += `${inicio} `;
      }
    }
  }
}
