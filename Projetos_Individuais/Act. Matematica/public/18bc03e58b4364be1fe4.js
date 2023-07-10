const calculate=(e,t)=>e*t,calculateTrapeze=(e,t,n)=>(e+t)*n/2,calculateLozenge=(e,t)=>e*t/2,startArea=async()=>{const e=document.querySelector("#res"),t=document.querySelector("#figure").value;let n=null;if(2==t){const e=Number(document.querySelector("#inputWidth").value),t=Number(document.querySelector("#inputHeight").value);n=t*e/2}else if(3==t){const e=Number(document.querySelector("#inputBase").value),t=Number(document.querySelector("#inputWidth").value),r=Number(document.querySelector("#inputHeight").value);n=calculateTrapeze(e,t,r)}else{const e=Number(document.querySelector("#inputWidth").value),t=Number(document.querySelector("#inputHeight").value);n=calculate(t,e)}if("number"!=typeof n)throw new Error("The values must be numbers to proceede.");if(n<=0)throw e.innerHTML="Tente Novamente com valores válidos!",alert(new Error("ERRO INESPERADO!\nUtilize números válidos para saber a área e o perímetro."));try{setTimeout((()=>{e.innerHTML=`O total da área do ${figureName()} é: <br><span id='value'>${n.toFixed(2)}</span> m².`,document.querySelector("#result").append(e)}),2e3),e.innerHTML="Carregando...",document.querySelector("#result").append(e)}catch(e){console.log(`Erro ${e} -> Restaure a página e insira outro valor.`),alert("ERRO INESPERADO!\nError Code: ",e)}},startPerimeth=()=>{const e=document.querySelector("#res"),t=Number(document.getElementById("sideA").value),n=Number(document.getElementById("sideB").value),r=Number(document.getElementById("sideC").value),a=Number(document.getElementById("sideD").value);if("number"!=typeof t||"number"!=typeof n||"number"!=typeof r||"number"!=typeof a)throw new Error("The values must be numbers to proceede.");const u=t+n+r+a;if(u<=0)throw e.innerHTML="Tente Novamente com valores válidos!",alert(new Error("ERRO INESPERADO!\nUtilize números válidos para saber a área e o perímetro."));try{setTimeout((()=>{e.innerHTML=`O total da perímetro do ${figureName()} é: <br><span id='value'>${u.toFixed(2)}</span> m.`,document.querySelector("#result").append(e)}),2e3),e.innerHTML="Carregando...",document.querySelector("#result").append(e)}catch(e){console.log(`Erro ${e} -> Restaure a página e insira outro valor.`),alert("ERRO INESPERADO!\nError Code: ",e)}};document.getElementById("submit").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector('input[name="opt"]:checked').value;if("0"==t)startArea();else{if("1"!=t)throw new Error("Something's wrong!\nPlease try refreshing the website and put the information again.");startPerimeth()}}));const figureName=()=>{const e=document.querySelector('select[name="chooseFigure"]').value;return 0==e?"Retângulo":1==e?"Quadrado":2==e?"Losango":3==e?"Trapézio":"Paralelogramo"};function addInput(){const e=document.querySelector('input[name="opt"]:checked').value,t=(document.querySelector("form"),document.querySelector("#figure").value),n=document.querySelector('span[id="inputArea"]');if(console.log(t),""!=n&&(n.textContent=""),5==t)return n.textContent="Selecione uma figura para continuar com a aplicação.",!1;if(0==e&&3!=t&&2!=t){const e=document.createElement("input"),t=document.createElement("label");e.type="number",e.name="width",e.required=!0,e.id="inputWidth",e.className="input",t.htmlFor="inputWidth",t.textContent="Digite a base da figura: ",t.append(e);const r=document.createElement("input"),a=document.createElement("label");r.type="number",r.name="height",r.required=!0,r.id="inputHeight",r.className="input",a.htmlFor="inputHeight",a.textContent="Digite a altura da figura: ",a.append(r),n.append(a,t)}else if(0==e&&3==t){const e=document.createElement("input"),t=document.createElement("label");e.type="number",e.name="width",e.required=!0,e.id="inputWidth",e.className="input",t.htmlFor="inputWidth",t.textContent="Digite a base menor da figura: ",t.append(e);const r=document.createElement("input"),a=document.createElement("label");r.type="number",r.name="height",r.required=!0,r.id="inputHeight",r.className="input",a.htmlFor="inputHeight",a.textContent="Digite a altura da figura: ",a.appendChild(r);const u=document.createElement("input"),o=document.createElement("label");u.type="number",u.name="base",u.required=!0,u.id="inputBase",u.className="input",o.textContent="Digite a base maior da figura: ",o.htmlFor="inputBase",o.appendChild(u),n.append(o,t,a)}else if(1==e&&t){const e=document.createElement("input"),t=document.createElement("input"),r=document.createElement("input"),a=document.createElement("input"),u=document.createElement("label"),o=document.createElement("label"),i=document.createElement("label"),l=document.createElement("label");e.type="number",e.name="side",e.required=!0,e.id="sideA",e.className="input",t.name="side",t.type="number",t.required=!0,t.id="sideB",t.className="input",r.type="number",r.name="side",r.required=!0,r.id="sideC",r.className="input",a.type="number",a.name="side",a.required=!0,a.id="sideD",a.className="input",u.htmlFor="sideA",u.textContent="Digite o Lado A da figura: ",o.htmlFor="sideB",o.textContent="Digite o Lado B da figura: ",i.htmlFor="sideC",i.textContent="Digite o Lado C da figura: ",l.htmlFor="sideD",l.textContent="Digite o Lado D da figura: ",u.appendChild(e),o.appendChild(t),i.append(r),l.append(a),n.append(u,o,i,l)}else if(0==e&&2==t){const e=document.createElement("input"),t=document.createElement("label");e.type="number",e.name="width",e.required=!0,e.id="inputWidth",e.className="input",t.htmlFor="inputWidth",t.textContent="Digite a diagonal maior da figura: ",t.append(e);const r=document.createElement("input"),a=document.createElement("label");r.type="number",r.name="height",r.required=!0,r.id="inputHeight",r.className="input",a.htmlFor="inputHeight",a.textContent="Digite a diagonal menor da figura: ",a.append(r),n.append(a,t)}}document.querySelector('select[name="chooseFigure"]').onclick=()=>{document.querySelector('select[name="chooseFigure"]').value,addInput()},document.querySelector('input[name="opt"]').onclick=()=>{addInput()},document.querySelector("#perimeth").onclick=()=>{addInput()};