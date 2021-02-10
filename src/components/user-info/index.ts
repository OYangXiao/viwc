import { showHi } from '../../libs/test';
// import { attributeNames, root } from './root';

class UserListClass extends HTMLElement {
  // static get observedAttributes() {
  //   return attributeNames.map((name) => 'e-' + name);
  // }

  appDiv: HTMLElement;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.appDiv = document.createElement('div');
    this.appDiv.append(JSON.stringify(showHi));
    this.shadowRoot.appendChild(this.appDiv);
  }

  connectedCallback() {}

  // attributeChangedCallback(name: string, oldValue: attrType, newValue: attrType) {
  //   if (name.startsWith('e-') && oldValue !== newValue) {
  //     const propName = camelCase(name.substring(2));
  //     console.log(propName, newValue);
  //     root.props[propName] = newValue;
  //   }
  // }

  // get root() {
  //   return root;
  // }
}

customElements.define('user-list', UserListClass);
