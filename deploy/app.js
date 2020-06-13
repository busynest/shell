var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, property, customElement } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
let ApplicationShell = class ApplicationShell extends LitElement {
    constructor() {
        super();
        this._page = '';
        setPassiveTouchGestures(true);
    }
    firstUpdated() {
        this.shadowRoot.querySelector('.googleSignIn').addEventListener('click', () => { this.google(); });
    }
    google() {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase
            .auth()
            .signInWithRedirect(provider);
        firebase
            .auth()
            .getRedirectResult()
            .then((result) => {
            if (result.credential) { }
        });
    }
    ;
    static get styles() {
        return [
            css `

:host {
  display:                        block;
  box-sizing:                     border-box;
  --app-white:                    #e8e8e8;
  --app-black-color:              #303030;
  --app-green:                    #2b3c44;
  --app-green-2:                  #A8D5BA;
  --green-3:                      #F0FFF0;
  --action-green:                 #6cc04a;
  --blue-2:                       #4C8FBD;
  --blue:                         #2b3c44;
  --app-orange:                   #2b3c44;
}

h1 {
  background-color: var(--app-black-color);
}

        `
        ];
    }
    render() {
        return html `

<h1>Hello World</h1>
<button class="googleSignIn">Firebase Authentication to access Database</button>
    `;
    }
};
__decorate([
    property({ type: String })
], ApplicationShell.prototype, "_page", void 0);
ApplicationShell = __decorate([
    customElement('application-shell')
], ApplicationShell);
export { ApplicationShell };
