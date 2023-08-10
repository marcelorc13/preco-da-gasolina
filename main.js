const distancia = document.querySelector('#distancia')
const economia = document.querySelector('#economia')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#botaoConverter')
const resultadoDiv = document.querySelector('#resultadoDiv')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click', () => {
    let valor = (distancia.value / economia.value) * preco.value
    if (valor > 0 && valor != Infinity) {
        resultadoDiv.classList.remove('hidden')
        resultado.innerHTML = `${valor.toFixed(2)}R$`
    }
    else {
        resultadoDiv.classList.remove('hidden')
        resultado.innerHTML = `Preencha todos os dados`
    } 
})
