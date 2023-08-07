import { Component } from "./Component.js";
import {Input} from "./Input.js";
import {Label} from "./Label.js";
import {Form} from "./Form.js";


const element = new Component('h1', 'body', {textContent: "Olá, mundo!"});
element.render()// renderizar o elemento
console.log(element)

element.tag = 'h2'
element.build().render()

const form = new Form('body')
const label = new Label('Insira uma frase:', form, {htmlFor: 'nameInput'});
const input = new Input(form, {id: 'nameInput', name: 'name'})

form.render()
label.render()
form.addElements(input)

form.addElements(
    new Component('br'),
    new Component('br'),
    new Label("Data de Nascimento: ",form, {htmlFor: 'input2'}),
    new Input(form, {id: 'input2', type: 'date'})
)