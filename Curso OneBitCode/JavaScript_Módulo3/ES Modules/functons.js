//Exporte funções, constantes , variaveis etc.
export const name = 'Arthur'

export function label(attributes) {
  const element = document.createElement('label')
  Object.assign(element, attributes)
  return element
}

function input(attributes) {
  const element = document.createElement('input')
  Object.assign(element, attributes)
  return element
}

function br() {
  const element = document.createElement('br')
  return element
}
