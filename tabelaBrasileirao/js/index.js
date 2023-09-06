var times = [
  {
    id: 1,
    escudo: "img/america-mineiro.png",
    nome: "América Mineiro",
  },
  {
    id: 2,
    escudo: "img/athletico-paranaense.png",
    nome: "Athletico Paranaense",
  },
  {
    id: 3,
    escudo: "img/atletico-mineiro.png",
    nome: "Atlético Mineiro",
  },
  {
    id: 4,
    escudo: "img/bahia.png",
    nome: "Bahia",
  },
  {
    id: 5,
    escudo: "img/botafogo.png",
    nome: "Botafogo",
  },
  {
    id: 6,
    escudo: "img/corinthians.png",
    nome: "Corinthians",
  },
  {
    id: 7,
    escudo: "img/coritiba.png",
    nome: "Coritiba",
  },
  {
    id: 8,
    escudo: "img/cruzeiro.png",
    nome: "Cruzeiro",
  },
  {
    id: 9,
    escudo: "img/cuiaba.png",
    nome: "Cuiabá",
  },
  {
    id: 10,
    escudo: "img/flamengo.png",
    nome: "Flamengo",
  },
  {
    id: 11,
    escudo: "img/fluminense.png",
    nome: "Fluminense",
  },
  {
    id: 12,
    escudo: "img/fortaleza.png",
    nome: "Fortaleza",
  },
  {
    id: 13,
    escudo: "img/goias-esporte-clube.png",
    nome: "Goiás",
  },
  {
    id: 14,
    escudo: "img/gremio.png",
    nome: "Grêmio",
  },
  {
    id: 15,
    escudo: "img/internacional.png",
    nome: "Internacional",
  },
  {
    id: 16,
    escudo: "img/palmeiras.png",
    nome: "Palmeiras",
  },
  {
    id: 17,
    escudo: "img/red-bull-bragantino.png",
    nome: "Red Bull Bragantino",
  },
  {
    id: 18,
    escudo: "img/santos.png",
    nome: "Santos",
  },
  {
    id: 19,
    escudo: "img/sao-paulo.png",
    nome: "São Paulo",
  },
  {
    id: 20,
    escudo: "img/vasco-da-gama.png",
    nome: "Vasco",
  },
];

var dadosTimes = [
  {
    posicao: 1,
    pontos: 51,
    partidas: 22,
    vitorias: 16,
    empates: 3,
    derrotas: 3,
    golsMarcados: 39,
    golsSofridos: 13,
    saldoGols: 26,
  },
  {
    posicao: 2,
    pontos: 41,
    partidas: 22,
    vitorias: 11,
    empates: 8,
    derrotas: 3,
    golsMarcados: 37,
    golsSofridos: 17,
    saldoGols: 20,
  },
  {
    posicao: 3,
    pontos: 39,
    partidas: 21,
    vitorias: 12,
    empates: 3,
    derrotas: 6,
    golsMarcados: 34,
    golsSofridos: 25,
    saldoGols: 9,
  },
  {
    posicao: 4,
    pontos: 39,
    partidas: 22,
    vitorias: 11,
    empates: 6,
    derrotas: 5,
    golsMarcados: 36,
    golsSofridos: 27,
    saldoGols: 9,
  },
  {
    posicao: 5,
    pontos: 38,
    partidas: 22,
    vitorias: 11,
    empates: 5,
    derrotas: 6,
    golsMarcados: 31,
    golsSofridos: 22,
    saldoGols: 9,
  },
  {
    posicao: 6,
    pontos: 36,
    partidas: 22,
    vitorias: 9,
    empates: 9,
    derrotas: 4,
    golsMarcados: 29,
    golsSofridos: 21,
    saldoGols: 8,
  },
  {
    posicao: 7,
    pontos: 34,
    partidas: 22,
    vitorias: 9,
    empates: 7,
    derrotas: 6,
    golsMarcados: 32,
    golsSofridos: 26,
    saldoGols: 6,
  },
  {
    posicao: 8,
    pontos: 32,
    partidas: 22,
    vitorias: 9,
    empates: 5,
    derrotas: 8,
    golsMarcados: 25,
    golsSofridos: 21,
    saldoGols: 4,
  },
  {
    posicao: 9,
    pontos: 31,
    partidas: 22,
    vitorias: 8,
    empates: 7,
    derrotas: 7,
    golsMarcados: 25,
    golsSofridos: 19,
    saldoGols: 6,
  },
  {
    posicao: 10,
    pontos: 28,
    partidas: 22,
    vitorias: 8,
    empates: 4,
    derrotas: 10,
    golsMarcados: 21,
    golsSofridos: 27,
    saldoGols: -6,
  },
  {
    posicao: 11,
    pontos: 28,
    partidas: 21,
    vitorias: 7,
    empates: 7,
    derrotas: 7,
    golsMarcados: 25,
    golsSofridos: 21,
    saldoGols: 4,
  },
  {
    posicao: 12,
    pontos: 26,
    partidas: 22,
    vitorias: 6,
    empates: 8,
    derrotas: 8,
    golsMarcados: 20,
    golsSofridos: 20,
    saldoGols: 0,
  },
  {
    posicao: 13,
    pontos: 26,
    partidas: 21,
    vitorias: 6,
    empates: 8,
    derrotas: 7,
    golsMarcados: 22,
    golsSofridos: 23,
    saldoGols: -1,
  },
  {
    posicao: 14,
    pontos: 26,
    partidas: 22,
    vitorias: 6,
    empates: 8,
    derrotas: 8,
    golsMarcados: 17,
    golsSofridos: 24,
    saldoGols: -7,
  },
  {
    posicao: 15,
    pontos: 25,
    partidas: 22,
    vitorias: 6,
    empates: 7,
    derrotas: 9,
    golsMarcados: 20,
    golsSofridos: 29,
    saldoGols: -9,
  },
  {
    posicao: 16,
    pontos: 22,
    partidas: 22,
    vitorias: 5,
    empates: 7,
    derrotas: 10,
    golsMarcados: 23,
    golsSofridos: 29,
    saldoGols: -6,
  },
  {
    posicao: 17,
    pontos: 21,
    partidas: 22,
    vitorias: 5,
    empates: 6,
    derrotas: 11,
    golsMarcados: 21,
    golsSofridos: 36,
    saldoGols: -15,
  },
  {
    posicao: 18,
    pontos: 17,
    partidas: 21,
    vitorias: 4,
    empates: 5,
    derrotas: 12,
    golsMarcados: 16,
    golsSofridos: 31,
    saldoGols: -15,
  },
  {
    posicao: 19,
    pontos: 16,
    partidas: 21,
    vitorias: 4,
    empates: 4,
    derrotas: 13,
    golsMarcados: 24,
    golsSofridos: 45,
    saldoGols: -21,
  },
  {
    posicao: 20,
    pontos: 14,
    partidas: 21,
    vitorias: 3,
    empates: 5,
    derrotas: 13,
    golsMarcados: 21,
    golsSofridos: 42,
    saldoGols: -21,
  },
];

var dadosFinais = [];

const imagens = ["img/vitoria.svg", "img/derrota.svg", "img/empate.svg"];

function jogos(times, dadosTimes) {
  let tmp;
  let randomNumber;

  //embaralhando os times
  for (let i = times.length - 1; i > 0; i--) {
    randomNumber = Math.floor(Math.random() * (i + 1));
    tmp = times[randomNumber];
    times[randomNumber] = times[i];
    times[i] = tmp;
  }

  //passando as posicoes de cada time e fazendo um merge com os dados
  for (let i = 0; i < times.length; i++) {
    let resultado = Object.assign({}, times[i], dadosTimes[i]);
    dadosFinais.push(resultado);
  }
}

function addTable(dados) {
  const tabelaCorpo = document.getElementById("tabelaCorpo");

  for (let i = 0; i < dados.length; i++) {
    let linha = tabelaCorpo.insertRow();

    let posicaoNome = linha.insertCell(0);

    let posicaoTexto = document.createTextNode(`${i + 1} `);
    posicaoNome.appendChild(posicaoTexto);

    let escudo = document.createElement("img");
    escudo.src = dados[i].escudo;
    escudo.alt = `${dados[i].nome} Escudo`; // Defina um alt text adequado
    escudo.width = 24; // Ajuste o tamanho conforme necessário
    escudo.height = 24; // Ajuste o tamanho conforme necessário
    posicaoNome.appendChild(escudo);

    let nomeTexto = document.createTextNode(` ${dados[i].nome}`);
    posicaoNome.appendChild(nomeTexto);

    let pontos = linha.insertCell(1);
    pontos.textContent = dados[i].pontos;

    let partidas = linha.insertCell(2);
    partidas.textContent = dados[i].partidas;

    let vitorias = linha.insertCell(3);
    vitorias.textContent = dados[i].vitorias;

    let empates = linha.insertCell(4);
    empates.textContent = dados[i].empates;

    let derrotas = linha.insertCell(5);
    derrotas.textContent = dados[i].derrotas;

    let golsMarcados = linha.insertCell(6);
    golsMarcados.textContent = dados[i].golsMarcados;

    let golsSofridos = linha.insertCell(7);
    golsSofridos.textContent = dados[i].golsSofridos;

    let saldoGols = linha.insertCell(8);
    saldoGols.textContent = dados[i].saldoGols;

    let colunaImagens = linha.insertCell(9);
    colunaImagens.style.width = "110px";
    colunaImagens.style.height = "38px";

    for (let j = 0; j < 5; j++) {
      // repetir 5 vezes
      let imagemSorteadaSrc =
        imagens[Math.floor(Math.random() * imagens.length)];
      let imagemSorteada = document.createElement("img");
      imagemSorteada.src = imagemSorteadaSrc;
      imagemSorteada.alt = "D/v/e";
      imagemSorteada.style.width = "16px";
      imagemSorteada.style.height = "16px";
      imagemSorteada.style.padding = "1px";
      colunaImagens.appendChild(imagemSorteada);
    }
  }
}

jogos(times, dadosTimes);
addTable(dadosFinais);
 for (let i = 0; i < dadosFinais.length; i++) {
   console.log(i + 1,"º", dadosFinais[i].nome);
}
