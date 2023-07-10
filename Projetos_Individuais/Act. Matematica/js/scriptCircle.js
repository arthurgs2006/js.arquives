

//CÁLCULO:
const calculateCircuferencePerimeth =  (radius) => {
    return 2 * Math.PI * radius;
}
const calculateCircuferenceArea =  (radius) => {
    return Math.PI * (radius * radius);
}

//AREA PRODUCTION:
const startArea = async () => {
    const p = document.querySelector('#res');
    const radius = Number(document.querySelector('#inputWidth').value);
    if(typeof radius != 'number')
        throw new Error('The values must be numbers to proceede.');
    
    const result = calculateCircuferenceArea(radius);
    if(result <= 0){
        p.innerHTML = 'Tente Novamente com valores válidos!'
        throw alert(new Error('ERRO INESPERADO!\nUtilize números válidos para saber a área e o perímetro.'))
    }
    try{
        setTimeout(() => {
            p.innerHTML = `O total da área do Círculo é: <br><span id='value'>${result.toFixed(2)}</span> m².`
            document.querySelector('#result').append(p);
        }, 1000 * 2 )
        p.innerHTML = 'Carregando...'
            document.querySelector('#result').append(p);
    }catch(err){
        console.log(`Erro ${err} -> Restaure a página e insira outro valor.`)
        alert('ERRO INESPERADO!\nError Code: ', err);
    }
}

//PERÍMETRO PRODUCTION:
const startPerimeth = () => {
    const p = document.querySelector('#res');
    const a1 = Number(document.getElementById('inputWidth').value)

    if(typeof a1 != 'number')
        throw new Error('The values must be numbers to proceede.');
    
    const result = calculateCircuferencePerimeth(a1)
    if(result <= 0){
        p.innerHTML = 'Tente Novamente com valores válidos!'
        throw alert(new Error('ERRO INESPERADO!\nUtilize números válidos para saber a área e o perímetro.'))
    }
    try{
        setTimeout(() => {
            p.innerHTML = `O total da perímetro do Triângulo é: <br><span id='value'>${result.toFixed(2)}</span> m.`
            document.querySelector('#result').append(p);
        }, 1000 * 2 )
        p.innerHTML = 'Carregando...'
            document.querySelector('#result').append(p);
    }catch(err){
        console.log(`Erro ${err} -> Restaure a página e insira outro valor.`)
        alert('ERRO INESPERADO!\nError Code: ', err);
    }
}


//Envio do Formulário:
document.getElementById('submit').addEventListener('click', (ev) => {
    ev.preventDefault()
    const select = document.querySelector('input[name="opt"]:checked').value;
    if(select == '0')
        startArea()
    else if (select == '1')
        startPerimeth()
    else
        throw new Error("Something's wrong!\nPlease try refreshing the website and put the information again.")
})


//SELEÇÃO DE PERÍMETRO E ÁREA:
document.querySelector('input[name="opt"]').onclick = () => { //onclick MÉTODO ÚTIL
    addInput()
}

document.querySelector('#perimeth').onclick = () => {
    addInput()
}

function addInput(){
    const select = document.querySelector('input[name="opt"]:checked').value;
    const inputsContainer = document.querySelector('form');
    const inputArea = document.querySelector('span[id="inputArea"]')
    console.log(select)
    if(inputArea != ''){
        inputArea.textContent = ''
    }
    if(select == 0){
        const inputWidth = document.createElement('input')
        const labelWidth = document.createElement('label')
        inputWidth.type = 'number'
        inputWidth.name = 'width'
        inputWidth.required = true
        inputWidth.id = 'inputWidth'
        inputWidth.className = 'input'

        labelWidth.htmlFor = 'inputWidth'
        labelWidth.textContent = 'Digite a raio do círculo: '
        labelWidth.append(inputWidth)
        
        inputArea.append(labelWidth);
    } else {
        const inputWidth = document.createElement('input')
        const labelWidth = document.createElement('label')
        inputWidth.type = 'number'
        inputWidth.name = 'width'
        inputWidth.required = true
        inputWidth.id = 'inputWidth'
        inputWidth.className = 'input'

        labelWidth.htmlFor = 'inputWidth'
        labelWidth.textContent = 'Digite a raio do círculo: '
        labelWidth.append(inputWidth)
        
        inputArea.append(labelWidth);
    }
}