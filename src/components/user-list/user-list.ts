import UserList from './user-list.vue';
import { createApp } from 'vue';
import { showBye } from '../../libs/say-something';
// import '@/styles/base.css'

class UserListClass extends HTMLElement {
  constructor() {
    super();

    this?.attachShadow({ mode: 'open' });

    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('href', '/src/components/user-list/user-list.less');

    this.shadowRoot.appendChild(linkEl);

    showBye();
  }

  connectedCallback() {
    const appDiv = document.createElement('div');
    const app = createApp(UserList);
    app.mount(appDiv);
    this.shadowRoot.appendChild(appDiv);
  }
}

customElements.define('user-list', UserListClass);
