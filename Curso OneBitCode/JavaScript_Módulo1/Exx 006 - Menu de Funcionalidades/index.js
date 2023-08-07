let menu = ""
do{
  menu = prompt(
    "Selecione sua opção do menu interativo:\n1. Opção 1\n2. Opção 2\n3. Opção 3\n4. Opção 4\n5. Opção 5\n0. Encerrar")
  alert(`A opção selecionada foi ${menu}.`)
} while(menu !== "0");