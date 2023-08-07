import { Component } from "./Component.js";

export class Form extends Component {
    

    constructor(parent, options){
        super('form', parent, options);
    }
    addElements(...children){
        children.forEach(child => {
            this.getElement().appendChild(child.getElement())
        })
        // this.#element = document.createElement(this.tag);
        // Object.assign(this.#element, this.options);
        // document.querySelector(this.parent).append(this.#element);
    }
}