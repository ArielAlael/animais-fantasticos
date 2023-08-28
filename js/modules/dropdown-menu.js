import outsideClick from "./outsideclick.js"

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus)

        // define touchstart e clique como argumentos de events caso o usuario nao defina
        if (events === undefined) this.events = ['touchstart', 'click']
        else this.events = events

        this.activeClass = 'active'
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
    }

    // Ativa o dropdowmenu e adiciona a função que observa o clique fora dele
    activeDropdownMenu(event) {
        event.preventDefault()
        const element = event.currentTarget
        element.classList.add(this.activeClass)
        outsideClick(element, this.events,() => {
            this.classList.remove(this.activeClass)
        })
    } 
    
    addDropdownsMenusEvent() {
        this.dropdownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu)
            })
        })   
    }

    init() {
        if(this.dropdownMenus.length) {
            this.addDropdownsMenusEvent()
        }
        return this
    }  
}
