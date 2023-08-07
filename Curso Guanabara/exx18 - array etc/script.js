
let n = document.querySelector("input#box")
let list = document.querySelector("select#boxselect")
let res = document.querySelector("div#res")
let valores = []

function isnumber(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
        
    } else {
        return false
    }
}

function islist (nb , ls) {
    if (ls.indexOf(Number(nb)) != -1) {
        return true
    } else {
        return false
    }
}


function add() {
    if (isnumber(n.value) && !islist(n.value , valores)) {
        valores.push(Number(n.value))
        let item = document.createElement("option")
        item.text  = `Valor ${n.value} adicionado.`
        list.appendChild(item)
    } else {
        return window.alert("ERRO! Insira um número válido ou recarregue a página e tente novamente!")
    }
    n.value = ""
    n.focus()
}


function analisar() {
    if (valores.length == 0) {
        window.alert("Adicione os valores para realizar a analise!")

    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }

        }
        media = soma/ tot
        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${tot} elementos...`
        res.innerHTML += `<p>O maior número é ${maior} e o menor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`





    }

} 





