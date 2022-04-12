export default class AnimacaoScroll {
  constructor(sections) {
    // recebe as sections que terão a animação ao scroll
    this.sections = document.querySelectorAll(sections);
    // distancia para aparecer na tela
    this.windowMetade = window.innerHeight * 0.6;
    // fazendo o bind para no callback em init pegar o objeto e nao o window
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) section.classList.add("ativo");
      else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
  }
}
