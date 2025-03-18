//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function sortear() {
  let input = document.getElementById("nomes").value;
  let nomes = input
    .split(",")
    .map((nome) => nome.trim())
    .filter((nome) => nome !== "");
  if (nomes.length < 2) {
    document.getElementById("resultado").innerText =
      "Adicione pelo menos dois nomes.";
    return;
  }
  let sorteio = [...nomes];
  do {
    sorteio = nomes.slice().sort(() => Math.random() - 0.5);
  } while (sorteio.some((nome, i) => nome === nomes[i]));

  let resultado = "<h3>Resultado:</h3><ul>";
  for (let i = 0; i < nomes.length; i++) {
    resultado += `<li>${nomes[i]} → ${sorteio[i]}</li>`;
  }
  resultado += "</ul>";
  document.getElementById("resultado").innerHTML = resultado;
}
