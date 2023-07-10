

//CÁLCULO:
const calculate =  (height, width) => {
    return (height * width) / 2
}

//AREA PRODUCTION:
const startArea = async () => {
    const p = document.querySelector('#res');
    const width = Number(document.querySelector('#inputWidth').value);
    const height = Number(document.querySelector('#inputHeight').value);
    if(typeof width != 'number' || typeof height != 'number')
        throw new Error('The values must be numbers to proceede.');
    
    const result = calculate(height, width);
    if(result <= 0){
        p.innerHTML = 'Tente Novamente com valores válidos!'
        throw alert(new Error('ERRO INESPERADO!\nUtilize números válidos para saber a área e o perímetro.'))
    }
    try{
        setTimeout(() => {
            p.innerHTML = `O total da área do Triângulo é: <br><span id='value'>${result.toFixed(2)}</span> m².`
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
    const a1 = Number(document.getElementById('sideA').value)
    const a2 = Number(document.getElementById('sideB').value)
    const a3 = Number(document.getElementById('sideC').value)

    if(typeof a1 != 'number' || typeof a2 != 'number' || typeof a3 != 'number')
        throw new Error('The values must be numbers to proceede.');
    
    const result = a1 + a2 + a3
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
        labelWidth.textContent = 'Digite a base do triângulo: '
        labelWidth.append(inputWidth)

        const inputHeight = document.createElement('input')
        const labelHeight = document.createElement('label')
        inputHeight.type = 'number'
        inputHeight.name = 'height'
        inputHeight.required = true
        inputHeight.id = 'inputHeight'
        inputHeight.className = 'input'

        labelHeight.htmlFor = 'inputHeight'
        labelHeight.textContent = 'Digite a altura do triângulo: '
        
        labelHeight.append(inputHeight);
        inputArea.append(labelHeight, labelWidth);
    } else {
        const inputSideA = document.createElement('input');
        const inputSideB = document.createElement('input')
        const inputSideC = document.createElement('input')
        const labelSideA = document.createElement('label')
        const labelSideB = document.createElement('label')
        const labelSideC = document.createElement('label')

        inputSideA.type = 'number'
        inputSideA.name = 'side'
        inputSideA.required = true
        inputSideA.id = 'sideA'
        inputSideA.className = 'input'

        inputSideB.name = 'side'
        inputSideB.type = 'number'
        inputSideB.required = true
        inputSideB.id = 'sideB'
        inputSideB.className = 'input'

        inputSideC.type = 'number'
        inputSideC.name = 'side'
        inputSideC.required = true
        inputSideC.id = 'sideC'
        inputSideC.className = 'input'

        labelSideA.htmlFor ='sideA'
        labelSideA.textContent = 'Digite o Lado A do Triângulo: '

        labelSideB.htmlFor ='sideB'
        labelSideB.textContent = 'Digite o Lado B do Triângulo: '

        labelSideC.htmlFor ='sideC'
        labelSideC.textContent = 'Digite o Lado C do Triângulo: '

        labelSideA.appendChild(inputSideA)
        labelSideB.appendChild(inputSideB)
        labelSideC.append(inputSideC)
        inputArea.append(labelSideA, labelSideB, labelSideC)
    }
}