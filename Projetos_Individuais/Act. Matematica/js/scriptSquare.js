

//CÁLCULO:
const calculate =  (height, width) => {
  return (height * width)
}
const calculateTrapeze = (bigWidth, smallWidth, height) => {
  return ((bigWidth + smallWidth) * height) / 2;
}
const calculateLozenge = (bigD, smallD) => {
  return (bigD * smallD) / 2;
}

//AREA PRODUCTION:
const startArea = async () => {
  const p = document.querySelector('#res');
  const figureChosen = document.querySelector('#figure').value;
  let result = null;
  if(figureChosen == 2){
    const width = Number(document.querySelector('#inputWidth').value);
    const height = Number(document.querySelector('#inputHeight').value);
    result = calculateLozenge(height, width);
  } else if(figureChosen == 3){
    const bigWidth = Number(document.querySelector('#inputBase').value);
    const smallWidth = Number(document.querySelector('#inputWidth').value);
    const height = Number(document.querySelector('#inputHeight').value);
    result = calculateTrapeze(bigWidth, smallWidth, height);
  } else{
    const width = Number(document.querySelector('#inputWidth').value);
    const height = Number(document.querySelector('#inputHeight').value);
    result = calculate(height, width);
  }
  if(typeof result != 'number')
      throw new Error('The values must be numbers to proceede.');
  
  if(result <= 0){
      p.innerHTML = 'Tente Novamente com valores válidos!'
      throw alert(new Error('ERRO INESPERADO!\nUtilize números válidos para saber a área e o perímetro.'))
  }
  try{
      setTimeout(() => {
          p.innerHTML = `O total da área do ${figureName()} é: <br><span id='value'>${result.toFixed(2)}</span> m².`
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
  const a4 = Number(document.getElementById('sideD').value)

  if(typeof a1 != 'number' || typeof a2 != 'number' || typeof a3 != 'number' || typeof a4 != 'number')
      throw new Error('The values must be numbers to proceede.');
  
  const result = a1 + a2 + a3 + a4;
  if(result <= 0){
      p.innerHTML = 'Tente Novamente com valores válidos!'
      throw alert(new Error('ERRO INESPERADO!\nUtilize números válidos para saber a área e o perímetro.'))
  }
  try{
      setTimeout(() => {
          p.innerHTML = `O total da perímetro do ${figureName()} é: <br><span id='value'>${result.toFixed(2)}</span> m.`
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

//IDENTIFICAÇÃO DA FIGURA:
const figureName = () => {
  const figureOpt = document.querySelector('select[name="chooseFigure"]').value;
  if(figureOpt == 0){
    return 'Retângulo'
  } else if (figureOpt == 1){
    return 'Quadrado';
  } else if (figureOpt == 2){
    return 'Losango'
  } else if (figureOpt == 3){
    return 'Trapézio'
  } else {
    return 'Paralelogramo';
  }
}

//SELEÇÃO DE FIGURA:
document.querySelector('select[name="chooseFigure"]').onclick = () => {
  const opt = document.querySelector('select[name="chooseFigure"]').value;
  addInput()
}

//SELEÇÃO DE PERÍMETRO E ÁREA:
document.querySelector('input[name="opt"]').onclick = () => { //onclick MÉTODO ÚTIL
  addInput()
}

document.querySelector('#perimeth').onclick = () => {
  addInput()
}

function addInput(){
  const select = document.querySelector('input[name="opt"]:checked').value;
  const inputsContainer = document.querySelector('form')
  const figureChosen = document.querySelector('#figure').value;
  const inputArea = document.querySelector('span[id="inputArea"]')
  console.log(figureChosen)
  if(inputArea != ''){
      inputArea.textContent = '';
  }
  if(figureChosen == 5){
    inputArea.textContent = 'Selecione uma figura para continuar com a aplicação.';
    return false;
  }
  if(select == 0 && figureChosen != 3 && figureChosen != 2){
      const inputWidth = document.createElement('input')
      const labelWidth = document.createElement('label')
      inputWidth.type = 'number'
      inputWidth.name = 'width'
      inputWidth.required = true
      inputWidth.id = 'inputWidth'
      inputWidth.className = 'input'

      labelWidth.htmlFor = 'inputWidth'
      labelWidth.textContent = `Digite a base da figura: `;
      labelWidth.append(inputWidth)

      const inputHeight = document.createElement('input')
      const labelHeight = document.createElement('label')
      inputHeight.type = 'number'
      inputHeight.name = 'height'
      inputHeight.required = true
      inputHeight.id = 'inputHeight'
      inputHeight.className = 'input'

      labelHeight.htmlFor = 'inputHeight'
      labelHeight.textContent = `Digite a altura da figura: `
      
      labelHeight.append(inputHeight);
      inputArea.append(labelHeight, labelWidth);
  } else if (select == 0 && figureChosen == 3) {
      const inputWidth = document.createElement('input')
      const labelWidth = document.createElement('label')
      
      inputWidth.type = 'number'
      inputWidth.name = 'width'
      inputWidth.required = true
      inputWidth.id = 'inputWidth'
      inputWidth.className = 'input'

      labelWidth.htmlFor = 'inputWidth'
      labelWidth.textContent = `Digite a base menor da figura: `
      labelWidth.append(inputWidth);

      const inputHeight = document.createElement('input')
      const labelHeight = document.createElement('label')
      inputHeight.type = 'number'
      inputHeight.name = 'height'
      inputHeight.required = true
      inputHeight.id = 'inputHeight'
      inputHeight.className = 'input'

      labelHeight.htmlFor = 'inputHeight'
      labelHeight.textContent = `Digite a altura da figura: `
      labelHeight.appendChild(inputHeight);

      const inputBase = document.createElement('input');
      const labelBase = document.createElement('label');
      inputBase.type = 'number'
      inputBase.name = 'base'
      inputBase.required = true
      inputBase.id = 'inputBase'
      inputBase.className = 'input'

      labelBase.textContent = `Digite a base maior da figura: `
      labelBase.htmlFor = 'inputBase'    
      labelBase.appendChild(inputBase);

      inputArea.append(labelBase, labelWidth, labelHeight);
  } else if (select == 1 && figureChosen ) {
      const inputSideA = document.createElement('input');
      const inputSideB = document.createElement('input')
      const inputSideC = document.createElement('input')
      const inputSideD = document.createElement('input')
      const labelSideA = document.createElement('label')
      const labelSideB = document.createElement('label')
      const labelSideC = document.createElement('label')
      const labelSideD = document.createElement('label')

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

      inputSideD.type = 'number'
      inputSideD.name = 'side'
      inputSideD.required = true;
      inputSideD.id = 'sideD'
      inputSideD.className = 'input'

      labelSideA.htmlFor ='sideA'
      labelSideA.textContent = 'Digite o Lado A da figura: '

      labelSideB.htmlFor ='sideB'
      labelSideB.textContent = 'Digite o Lado B da figura: '

      labelSideC.htmlFor ='sideC'
      labelSideC.textContent = 'Digite o Lado C da figura: '

      labelSideD.htmlFor ='sideD'
      labelSideD.textContent = 'Digite o Lado D da figura: '

      labelSideA.appendChild(inputSideA)
      labelSideB.appendChild(inputSideB)
      labelSideC.append(inputSideC)
      labelSideD.append(inputSideD)
      inputArea.append(labelSideA, labelSideB, labelSideC, labelSideD)
  } else if (select == 0 && figureChosen == 2){
      const inputWidth = document.createElement('input')
      const labelWidth = document.createElement('label')
      inputWidth.type = 'number'
      inputWidth.name = 'width'
      inputWidth.required = true
      inputWidth.id = 'inputWidth'
      inputWidth.className = 'input'

      labelWidth.htmlFor = 'inputWidth'
      labelWidth.textContent = `Digite a diagonal maior da figura: `;
      labelWidth.append(inputWidth)

      const inputHeight = document.createElement('input')
      const labelHeight = document.createElement('label')
      inputHeight.type = 'number'
      inputHeight.name = 'height'
      inputHeight.required = true
      inputHeight.id = 'inputHeight'
      inputHeight.className = 'input'

      labelHeight.htmlFor = 'inputHeight'
      labelHeight.textContent = `Digite a diagonal menor da figura: `
      
      labelHeight.append(inputHeight);
      inputArea.append(labelHeight, labelWidth);
  }
}