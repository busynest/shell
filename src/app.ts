/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

// LIBRARY ELEMENTS
import { LitElement, html, css, property, customElement }       from 'lit-element';
import { setPassiveTouchGestures }     from '@polymer/polymer/lib/utils/settings';

@customElement('application-shell')
export class ApplicationShell extends LitElement {

  @property({type: String}) private _page:any = '';

  constructor() {
    super();
    setPassiveTouchGestures(true);
  }

  protected firstUpdated() {
    // EVENT LISTENERS
    this.shadowRoot!.querySelector('.googleSignIn')!.addEventListener('click', () => { this.google() } );
  }

private google() {
    // @ts-ignore
    const provider:any = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    // @ts-ignore
    firebase
      .auth()
      .signInWithRedirect(provider);
    // @ts-ignore 
    firebase
      .auth()
      .getRedirectResult()
      .then( (result: any) => {
      if (result.credential) { /*Access Token to access Google API const token = result.credential.accessToken; console.log("Google Token"); */ }
      // The signed-in user info.
      // const firebaseUser = result.firebaseUser;
    })
  };

  static get styles() {
    return [
      css`

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

protected render() {
    return html`

<h1>Hello World</h1>
<button class="googleSignIn">Firebase Authentication to access Database</button>
    `;
  }
  
}