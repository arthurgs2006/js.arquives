export const CATEGORIES = [
  'Games',
  'Books',
  'Toys',
  'Acessories'
]

export default class {
  constructor({name, description, quantity, price, category}){
    this.id = Math.floor(Math.random() * 10000000)
    this.name = name,
    this.description = description,
    this.quantity = +quantity,
    this.price = +price,
    this.category = category,
    this.createdAt = new Date(),
    this.updateAt = new Date()
    this.#validate()
  }
  #validate(){
    const validName = typeof this.name === 'string'
    const validDescription = typeof this.description === 'string'
    const validQuantity = typeof this.quantity === 'number' && Number.isInteger(this.quantity)
    const validPrice = typeof this.price === 'number'
    const validCategory = CATEGORIES.includes(this.category)
    if(!(
      validName &&
      validCategory &&
      validDescription &&
      validPrice && 
      validQuantity
    )){
      throw new Error('Invalid item!')
    }
  }
}