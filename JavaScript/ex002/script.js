function gerarTabuada() {
  let num = Number(document.getElementById("num").value);
  let result = document.getElementById("results");
  let tabuada = 0;

  result.innerHTML = `Tabuada do ${num}: </br>`;

  for (let x = 0; x <= 10; x++) {
    tabuada = num * x;
    result.innerHTML += `${num} x ${x} = ${tabuada} </br>`;
    tabuada = 0;
  }
}
