alert(
  "Vamos jogar?\nInsira as informações entre os personagens para descobrir quem venceria numa batalha!"
);
// let character1_name = prompt("Digite o nome do primeiro personagem:");
let character1_powerattack = prompt(
  "Digite o poder de ataque do primeiro personagem:"
);
// let character2_name = prompt("Digite o nome do segundo personagem:");
let character2_life = prompt("Digite a vida total do segundo personagem:");
let character2_powerdefense = prompt(
  "Digite o poder de defesa do segundo personagem:"
);
const character2_shield = confirm("Seu personagem terá escudo de defesa?");

character1_powerattack = Number(character1_powerattack);
character2_life = Number(character2_life);
character2_powerdefense = Number(character2_powerdefense);

if (
  character1_powerattack > character2_powerdefense &&
  character2_shield === false
) {
  character2_life =
    character2_life - (character1_powerattack - character2_powerdefense);
  alert(`O poder de ataque foi maior que a defesa pudesse aguentar!
  \nA vida do personagem 2 é ${character2_life}.
  \nDefesa: ${character2_powerdefense}
  \nAtaque: ${character1_powerattack}`);
} else if (
  character1_powerattack < character2_powerdefense &&
  character2_shield === false
) {
  alert(`O poder de ataque foi menor que o poder da defesa, por isso não afetou o personagem 2.
  \nA vida do personagem 2 é ${character2_life}.
  \nDefesa: ${character2_powerdefense}
  \nAtaque: ${character1_powerattack}`);
} else if (
  character1_powerattack > character2_powerdefense &&
  character2_shield === true
) {
  character2_life =
    character2_life - (character1_powerattack - character2_powerdefense) / 2;
  alert(`O poder de ataque foi abafado pelo escudo, porém atingiu o adversário.
  \nA vida do personagem 2 é ${character2_life}.
  \nDefesa: ${character2_powerdefense}
  \nAtaque: ${character1_powerattack}`);
} else if (
  character1_powerattack <= character2_powerdefense &&
  character2_shield === true
) {
  alert(`O poder de ataque foi menor que a defesa, por isso o adversário não foi atingido!
  \nA vida do personagem 2 é ${character2_life}.
  \nDefesa: ${character2_powerdefense}
  \nAtaque: ${character1_powerattack}`);
} else {
  alert("Algo deu errado!\nTente Novamente mais tarde...");
}
