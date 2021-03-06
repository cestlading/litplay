import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {"firstName": "Jack",
        "lastName":"Smith",
        "username": "cccMIKE",
        "email": "MIKE@gmail.com",
        "id":"MMM45678"};

    render() {
        return html`
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

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('/api/user')
            .then((response) => response.json())
            .then((bodyRes) => {this.foo=bodyRes});

    }
}
