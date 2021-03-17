import UserInfo from './user-info.vue';
import * as Vue from 'vue';
import { showBye } from '@/libs/say-something';
// import { attributeNames, root } from './root';

class UserInfoClass extends HTMLElement {
  // static get observedAttributes() {
  //   return attributeNames.map((name) => 'e-' + name);
  // }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    // use common code to test code split
    showBye();
  }

  connectedCallback() {
    const app = Vue.createApp(UserInfo);
    app.mount((this.shadowRoot as unknown) as HTMLElement);
  }

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

customElements.define('user-info', UserInfoClass);
