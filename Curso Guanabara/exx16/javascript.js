


function contar() {
    let ini = document.querySelector("input#box_inicio")
    let fim = document.querySelector("input#box_fim")
    let pas = document.querySelector("input#box_passos")
    let res = document.getElementById("res")
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length ==  0) {
        window.alert("É necessário que você insira as informações necesárias para continuar o programa...")

    } else {
        res.innerHTML = "Contando <br>"
            if (pas <= 0) {
                alert("ERRO!<br>Esse valor como passo não é válido...")
            }
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(pas.value)
            if (i < f) {
                for(let c = i; c <= f; c+= p) {
                    res.innerHTML += `${c} \u{1F449} `
                }
                
            } else {
                for(let c = i; c >= f; c-= p) {
                    res.innerHTML += `${c} \u{1F449} `
            }
            }
            res.innerHTML += `\u{1F4A3}`
        }
    }