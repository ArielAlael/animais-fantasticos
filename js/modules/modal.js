export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir)
        this.botaoFechar = document.querySelector(botaoFechar)
        this.containerModal = document.querySelector(containerModal)

        // bind this ao ao callback para fazer referência ao objeto da classe
        this.eventToggleModal = this.eventToggleModal.bind(this)
        this.cliqueForaModal = this.cliqueForaModal.bind(this)
    }

    // abre ou fecha o modal
    toggleModal() {
        this.containerModal.classList.toggle('ativo')
    }

    // adiciona os eventos de toggle do modal
    eventToggleModal(event) {
        event.preventDefault()
        this.toggleModal()
    }

    // fecha o modal ao clilcar do lado de fora
    cliqueForaModal(event) {
        if (event.target === this.containerModal) {
            this.toggleModal(event)
        }
    }

    // adicionar os eventos aos elementos do modal
    addModalEvent() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal)
        this.botaoFechar.addEventListener('click', this.eventToggleModal)
        this.containerModal.addEventListener('click', this.cliqueForaModal)
    }

    init() {
        if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvent()
        }
        return this
    }

}
