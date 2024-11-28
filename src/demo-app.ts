import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/footer/footer.js';
import './components/header/header.js';
import './components/auth/login.js';
import './components/auth/register.js';
import './components/auth/user-details.js';

@customElement('demo-app')
export class DemoApp extends LitElement {
  static styles = css`
    main {
      width: 60%;
      margin: 40px auto;
    }
  `;

  render() {
    return html`
      <ui-header></ui-header>

      <main>
        <!--                        <ui-login-component></ui-login-component>-->
        <!--        <ui-register-component></ui-register-component>-->
        <user-info-card></user-info-card>
      </main>

      <ui-footer></ui-footer>
    `;
  }
}
