import UserList from './user-list.vue';
import { createApp } from 'vue';
import { attributeNames, root } from './root';
import { showBye } from '../../libs/test';
// import '@/styles/base.css'

class UserListClass extends HTMLElement {
  static get observedAttributes() {
    return attributeNames.map((name) => 'e-' + name);
  }

  appDiv: HTMLElement;

  constructor() {
    super();

    this?.attachShadow({ mode: 'open' });
    showBye()
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('href', '/assets/base-css1.css');
    this.shadowRoot.appendChild(linkEl);

    this.appDiv = document.createElement('div');
    this.shadowRoot.appendChild(this.appDiv);
  }

  connectedCallback() {
    const app = createApp(UserList);
    app.mount(this.appDiv);
  }

  // attributeChangedCallback(name: string, oldValue: attrType, newValue: attrType) {
  //   if (name.startsWith('e-') && oldValue !== newValue) {
  //     const propName = camelCase(name.substring(2));
  //     console.log(propName, newValue);
  //     root.props[propName] = newValue;
  //   }
  // }

  get root() {
    return root;
  }
}

customElements.define('user-list', UserListClass);
