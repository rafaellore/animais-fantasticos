export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // NOTA: ele vai ativar de acordo com o index, por isso é importante colocar o conteudo na ordem das tab
  activeTab(index) {
    // remove a classe ativo dos contents sempre que uma é ativada
    this.tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    // pega o valor do dataset e alem do ativo adiciona essa valor como classe, que faz a animacao
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add("ativo", direcao);
  }

  // adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativa o primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
