
function calculate(event){
    let bill = document.querySelector("input#bill").value;
    let select = document.getElementById("serviceQual").value;
    let people = document.getElementsByName("people").value;
    let res = document.getElementsByName("result");

    if(bill == "" | select == 0 ){
        alert("Por favor! Preencha os valores necessários!");
        return;
    }

    if (people <= 1 | people == ""){
        people = 1
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }

    let result = ( bill * select ) / people
    result.toFixed(2);
    document.getElementById("tip").innerHTML = result;
    document.getElementById("each").style.display = "block";
}

document.getElementById("result").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsform").addEventListener("submit", calculate)

