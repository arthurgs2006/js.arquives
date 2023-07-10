
function processar() {
    let num = document.querySelector("input#box1")
    let tab = document.querySelector("select#tabuada")
    if (num.value == 0) {
        window.alert("ERRO!Insira um número válido!")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""
        for (c = 1; c <= 10;c++){
            let item = document.createElement("option")
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}