class menudeopcao {
    constructor(menu, opcao, opcaolink){
        this.menu = document.querySelector(menu);
        this.opcao = document.querySelector(opcao);
        this.opcaolink = document.querySelectorAll(opcaolink);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.opcaolink.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `opcaolinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    handleClick() {
        this.opcao.classList.toggle(this.activeClass);
        this.menu.classList.toggle(this.activeClass);
        this.animateLinks()
    }

    addClickEvent() {
        this.menu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MenuDeOpcao = new menudeopcao(
    ".menu",
    ".opcao",
    ".opcao li",
)

MenuDeOpcao.init();

$(document).ready(function(){
    var botao = $('.abrir');
    var dropDown = $('.relatorio');
    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
