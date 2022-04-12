import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // pega a div que irá conter os numeros dos animais
  const numerosGrid = document.querySelector(target);

  // cria a div contendo informações do animal
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // função assincrona que puxa os animais de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // fetch e espera a resposta
      const animaisResponse = await fetch(url);
      // após a resposta ele converte a resposta para json
      const animaisJSON = await animaisResponse.json();

      // faz um forEach em cada objeto do arquivo json e roda a função preencherAnimais
      // e animar os numeros
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
