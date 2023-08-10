const distancia = document.querySelector('#distancia')
const economia = document.querySelector('#economia')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#botaoConverter')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click', () => {
    let valor = (distancia.value / economia.value) * preco.value
    resultado.innerHTML = `${valor.toFixed(2)}R$`
})
