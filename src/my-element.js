var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.foo = { "firstName": "Jack",
            "lastName": "Smith",
            "username": "cccMIKE",
            "email": "MIKE@gmail.com",
            "id": "MMM45678" };
    }
    render() {
        return html `
        <style>
      .s1{
        color:red;
        font-size:24px;
      }
      .s2{
        color:green;
      }
      </style>
        <h1 class="s1">${this.foo.firstName}</h1>
        <h2>${this.foo.lastName}</h2>
        `;
    }
    firstUpdated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('/api/user')
            .then((response) => response.json())
            .then((bodyRes) => { this.foo = bodyRes; });
    }
};
__decorate([
    property()
], MyElement.prototype, "foo", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
