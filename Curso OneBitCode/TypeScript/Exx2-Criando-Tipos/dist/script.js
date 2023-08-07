const planets = [];
const savePlanet = (name, coordinates, situation, satellites) => {
    planets.push({ name, coordinates, situation, satellites: [] });
    alert(`O planeta ${name}, foi adicionado com sucesso!`);
};
const findPlanets = (name) => {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
};
const updatePlanets = (situation, planet) => {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
};
const updateSituation = () => {
    const situation = prompt("Digite a condição que o planeta se encontra atualmente: ");
    const planet = prompt("Digite o planeta em que quer atualizar sua situação: ");
    if (findPlanets(planet) && valueSituation(situation)) {
        const find = findPlanets(planet);
        const status = valueSituation(situation);
        updatePlanets(status, find);
    }
    else {
        throw new Error("Invalid term found between " + planet + " and " + situation);
    }
};
const addSatellites = (name, planet) => {
    planet.satellites.push(name);
    alert(`Foi adicionado o satélite ${name} para o planeta ${planet.name}.`);
};
const addSatellitesOpt = () => {
    const planet = prompt("Digite o nome do planeta: ");
    const satellites = prompt("Digite o nome do satélite para adicionar: ");
    if (findPlanets(planet)) {
        const find = findPlanets(planet);
        addSatellites(satellites, find);
    }
    else {
        throw new Error("This planet does not exist!");
    }
};
const removeSatellites = (name, planet) => {
    planet.satellites = planet.satellites.filter(s => s !== name);
    alert(`O satélite ${name}, foi removido do planeta ${planet.name}.`);
};
const removeSatellitesOpt = () => {
    const planet = prompt("Digite o nome do planeta: ");
    const satellites = prompt("Digite o nome do satélite para adicionar: ");
    if (findPlanets(planet)) {
        const find = findPlanets(planet);
        removeSatellites(satellites, find);
    }
    else {
        throw new Error("This planet does not exist!");
    }
};
const viewPlanets = () => {
    planets.forEach(planet => {
        alert(`Planet ${planet.name}` + '\n');
    });
};
const valueSituation = (situation) => {
    let planet;
    if (situation == "Habitable") {
        planet = "Habitable";
        return planet;
    }
    else if (situation == "Has Life") {
        return planet = "Has Life";
    }
    else if (situation == "Unnexplored") {
        return planet = "Unnexplored";
    }
    else if (situation == "Unhabitable") {
        return planet = "Unhabitable";
    }
    else {
        throw new Error("Unable to find the condition of the planet");
    }
};
const addPlanets = () => {
    const name = prompt("Digite o nome do planeta: ");
    const situation = prompt("Digite a condição que o planeta se encontra atualmente: ");
    if (!valueSituation(situation)) {
        return false;
    }
    const status = valueSituation(situation);
    const cordinateA = Number(prompt("Digite a primeira cordenada: "));
    const cordinateB = Number(prompt("Digite a segunda cordenada: "));
    const cordinateC = Number(prompt("Digite a terceira cordenada: "));
    const cordinateD = Number(prompt("Digite a quarta cordenada: "));
    const cordinates = [cordinateA, cordinateB, cordinateC, cordinateD];
    // const confirm = confirm(`Quer adicionar ${name} ao ecossistema de planetas? `)
    savePlanet(name, cordinates, status, []);
};
const menu = () => {
    const opt = Number(prompt("MENU\n1.Visualizar planetas;\n2.Adicionar Planetas;\n3.Atualizar situação dos Planetas;\n4.Adicionar satélites aos planetas;\n5.Remover satélites aos planetas;"));
    switch (opt) {
        case 1:
            viewPlanets();
            break;
        case 2:
            addPlanets();
            break;
        case 3:
            updateSituation();
            break;
        case 4:
            addSatellitesOpt();
            break;
        case 5:
            removeSatellitesOpt();
            break;
        default:
            break;
    }
};
