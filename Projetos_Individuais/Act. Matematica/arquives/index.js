function calculate() {
  var shapeSelect = document.getElementById("shape-select");
  var shape = shapeSelect.value;

  var calculationSelect = document.getElementById("calculation-select");
  var calculation = calculationSelect.value;

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  switch (shape) {
    case "triangle":
      resultDiv.innerHTML = "Triângulo: Um polígono de três lados.";
      calculateTriangle(calculation);
      break;
    case "square":
      resultDiv.innerHTML = "Quadrado: Um polígono de quatro lados iguais.";
      calculateSquare(calculation);
      break;
    case "rectangle":
      resultDiv.innerHTML = "Retângulo: Um polígono de quatro lados com ângulos retos.";
      calculateRectangle(calculation);
      break;
    case "parallelogram":
      resultDiv.innerHTML = "Paralelogramo: Um polígono de quatro lados opostos paralelos.";
      calculateParallelogram(calculation);
      break;
    case "trapezoid":
      resultDiv.innerHTML = "Trapézio: Um polígono de quatro lados com dois lados paralelos.";
      calculateTrapezoid(calculation);
      break;
    case "rhombus":
      resultDiv.innerHTML = "Losango: Um polígono de quatro lados com lados iguais.";
      calculateRhombus(calculation);
      break;
    case "circle":
      resultDiv.innerHTML = "Círculo: Uma figura plana em forma de disco.";
      calculateCircle(calculation);
      break;
    default:
      resultDiv.innerHTML = "Figura não encontrada.";
      break;
  }
}

function calculateTriangle(calculation) {
  if (calculation === "area") {
    // Lógica para calcular a área do triângulo
    var base = parseFloat(prompt("Informe a base do triângulo:"));
    var height = parseFloat(prompt("Informe a altura do triângulo:"));
    var area = (base * height) / 2;

    displayResult(area);
  } else if (calculation === "perimeter") {
    // Lógica para calcular o perímetro do triângulo
    var side1 = parseFloat(prompt("Informe o valor do primeiro lado do triângulo:"));
    var side2 = parseFloat(prompt("Informe o valor do segundo lado do triângulo:"));
    var side3 = parseFloat(prompt("Informe o valor do terceiro lado do triângulo:"));
    var perimeter = side1 + side2 + side3;

    displayResult(perimeter);
  }
}

function calculateSquare(calculation) {
  if (calculation === "area") {
    // Lógica para calcular a área do quadrado
    var side = parseFloat(prompt("Informe o valor do lado do quadrado:"));
    var area = side * side;

    displayResult(area);
  } else if (calculation === "perimeter") {
    // Lógica para calcular o perímetro do quadrado
    var side = parseFloat(prompt("Informe o valor do lado do quadrado:"));
    var perimeter = 4 * side;

    displayResult(perimeter);
  }
}

function calculateRectangle(calculation) {
  if (calculation === "area") {
    // Lógica para calcular a área do retângulo
    var width = parseFloat(prompt("Informe a largura do retângulo:"));
    var height = parseFloat(prompt("Informe a altura do retângulo:"));
    var area = width * height;

    displayResult(area);
  } else if (calculation === "perimeter") {
    // Lógica para calcular o perímetro do retângulo
    var width = parseFloat(prompt("Informe a largura do retângulo:"));
    var height = parseFloat(prompt("Informe a altura do retângulo:"));
    var perimeter = 2 * (width + height);

    displayResult(perimeter);
  }
}

function calculateParallelogram(calculation) {
  if (calculation === "area") {
    // Lógica para calcular a área do paralelogramo
    var base = parseFloat(prompt("Informe a base do paralelogramo:"));
    var height = parseFloat(prompt("Informe a altura do paralelogramo:"));
    var area = base * height;

    displayResult(area);
  } else if (calculation === "perimeter") {
    // Lógica para calcular o perímetro do paralelogramo
    var side = parseFloat(prompt("Informe o valor do lado do paralelogramo:"));
    var perimeter = 4 * side;

    displayResult(perimeter);
  }
}

function calculateTrapezoid(calculation) {
  if (calculation === "area") {
    // Lógica para calcular a área do trapézio
    var base1 = parseFloat(prompt("Informe a primeira base do trapézio:"));
    var base2 = parseFloat(prompt("Informe a segunda base do trapézio:"));
    var height = parseFloat(prompt("Informe a altura do trapézio:"));
    var area = ((base1 + base2) * height) / 2;

    displayResult(area);
  } else if (calculation === "perimeter") {
    // Lógica para calcular o perímetro do trapézio
    var side1 = parseFloat(prompt("Informe o valor do primeiro lado do trapézio:"));
    var side2 = parseFloat(prompt("Informe o valor do segundo lado do trapézio:"));
    var side3 = parseFloat(prompt("Informe o valor do terceiro lado do trapézio:"));
    var side4 = parseFloat(prompt("Informe o valor do quarto lado do trapézio:"));
    var perimeter = side1 + side2 + side3 + side4;

    displayResult(perimeter);
  }
}

function calculateRhombus(calculation) {
  if (calculation === "area") {
    // Lógica para calcular a área do losango
    var diagonal1 = parseFloat(prompt("Informe o valor da primeira diagonal do losango:"));
    var diagonal2 = parseFloat(prompt("Informe o valor da segunda diagonal do losango:"));
    var area = (diagonal1 * diagonal2) / 2;

    displayResult(area);
  } else if (calculation === "perimeter") {
    // Lógica para calcular o perímetro do losango
    var side = parseFloat(prompt("Informe o valor do lado do losango:"));
    var perimeter = 4 * side;

    displayResult(perimeter);
  }
}

function calculateCircle(calculation) {
  if (calculation === "area") {
    // Lógica para calcular a área do círculo
    var radius = parseFloat(prompt("Informe o valor do raio do círculo:"));
    var area = Math.PI * radius * radius;

    displayResult(area);
  } else if (calculation === "perimeter") {
    // Lógica para calcular o perímetro do círculo
    var radius = parseFloat(prompt("Informe o valor do raio do círculo:"));
    var perimeter = 2 * Math.PI * radius;

    displayResult(perimeter);
  }
}

function displayResult(result) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Resultado: " + result;
}
