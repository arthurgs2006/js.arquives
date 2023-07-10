

// async function getCountries(){
//     const response = await fetch('https://dummyjson.com/products');

//     console.log(response);
//     const products = await response.json() 
//     console.log(products[33]);
// }

async function getCountries() { //ao trabalhar com API, geralmente é usado funções async
    const response = await fetch('https://restcountries.com/v3.1/all')
        //funções fetch() para chamar uma def http.
    const countries = await response.json() //retornando aspectos do json junto ao conteudo
  
    console.log(countries[55])

    countries.forEach(createCountryCard)
}
  
getCountries()

function createCountryCard(country){
    const card = document.createElement('div');
    card.classList.add('country')

    const countryName = country.name.common //-> formato que a A.P.I utiliza
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    Float32Array.alt = countryName;
    card.append(flag, name);
    document.querySelector("#countries").append(card);

}