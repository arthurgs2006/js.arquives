function calculateMedia(a, b){
  const media = (a+b)/2
  return media
}
alert(calculateMedia(2,3));

function product(name, price){
  const info = {
    name,
    price,
    stock: 1
  }
  return info
}

const laptop = product("notebook", 5000.00); // Não é necessário criar uma varíavel, é possível realizar aação diretamente
console.log(laptop);

function areaRectangle(base, height){
  return base * height
}
console.log(areaRectangle(2, 6))

function areaSquare(side1, side2){
  return areaRectangle(side1, side2);
}

function maoridade(age){
  if (age >= 18){
    return "Maior de idade";
  } else{
    return "Menor de idade.";
  }
} // varios returns em uma function

console.log(maoridade(13))