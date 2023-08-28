import AnimaNumeros from './anima-numeros.js'

export default function fetchAnimais(url, target) {
    // Cria a div contendo iformações com o total de animais
    function createAnimal(animal) {
        const div = document.createElement('div')
        div.classList.add('numero-animal')
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
        return div
    }


    // Preenche cada aniaml no dom
    const numerosGrid = document.querySelector(target)

    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal)
        numerosGrid.appendChild(divAnimal)
    }

    // anima os numeros de cada aniaml
    function animaAnimaisNumeros() {
        const animaNumero = new AnimaNumeros('[data-numero]', '.numeros', 'ativo')
        animaNumero.init()
    }

    // Puxa os animais atraves de um arquivo json e cria cada niaml utlizando createAnimal
    async function criarAnimais() {
        try {
            // Fetch espera a respota e tranforma em json
            const animaisResponse = await fetch(url)
            const animaisJSON = await animaisResponse.json()

            // Após a transformação de json ativa as funções para preencher e animar os números
            animaisJSON.forEach(animal => preencherAnimais(animal))
            animaAnimaisNumeros()
        } catch (error) {
            console.log(error)
        }
    }

    return criarAnimais()
}
