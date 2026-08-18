function cardapio() {

    var numero = Number(prompt("1 - Soma, 2 - Subtração"))

    if (numero == 1) {
        var numeroSoma01 = Number(prompt("Digite o primeiro número da soma:"))
        var numeroSoma02 = Number(prompt("Digite o segundo número da soma:"))
        var resultado = numeroSoma01 + numeroSoma02
        console.log("Resultado da soma é: " + resultado)
        document.querySelector('#resultado').innerText = "Resultado da SOMA: " + resultado
    }

    else {
        var numeroSub01 = Number(prompt("Digite o primeiro número da subtração: "))
        var numeroSub02 = Number(prompt("Digite o segundo número da subtração: "))
        var resultado = numeroSub01 - numeroSub02
        console.log('Resultado da subtração é: ' + resultado)
        document.querySelector('#resultado').innerText = "Resultado da SUBTRAÇÃO: " + resultado
    }
}

function soma() {
    var numeroSoma01 = Number(prompt("Digite o primeiro número da soma:"))
    var numeroSoma02 = Number(prompt("Digite o segundo número da soma:"))
        var resultado = numeroSoma01 + numeroSoma02
    console.log("Resultado da soma é: " + resultado)
    document.querySelector('#resultado').innerText = "Resultado da SOMA: " + resultado
}

function subtracao() {
    var numeroSub01 = Number(prompt("Digite o primeiro número da subtração: "))
    var numeroSub02 = Number(prompt("Digite o segundo número da subtração: "))
    var resultado = numeroSub01 - numeroSub02
    console.log('Resultado da subtração é: ' + resultado)
    document.querySelector('#resultado').innerText = "Resultado da SUBTRAÇÃO: " + resultado
}
