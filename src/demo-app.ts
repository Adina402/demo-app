import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './components/footer/footer.js';
import './components/header/header.js';
import './components/auth/login.js';
import './components/auth/register.js';
import './components/auth/user-details.js';

type ViewType = 'login' | 'register' | 'userInfo';

@customElement('demo-app')
export class DemoApp extends LitElement {
  @property({ type: String }) currentView: ViewType = 'login';

  static styles = css`
    main {
      width: 60%;
      margin: 40px auto;
    }

    @media (max-width: 768px) {
      main {
        width: 80%;
        margin: 20px 20px;
      }
    }
  `;

  render() {
    return html`
      <ui-header
        .currentView=${this.currentView}
        @navigate=${this.handleNavigation}
      ></ui-header>

      <main>${this.renderCurrentView()}</main>

      <ui-footer></ui-footer>
    `;
  }

  private renderCurrentView() {
    switch (this.currentView) {
      case 'login':
        return html`<ui-login-component
          @navigate=${this.handleNavigation}
        ></ui-login-component>`;
      case 'register':
        return html`<ui-register-component
          @navigate=${this.handleNavigation}
        ></ui-register-component>`;
      case 'userInfo':
        return html`<user-info-card></user-info-card>`;
      default:
        return html`<ui-register-component></ui-register-component>`;
    }
  }

  private handleNavigation(e: CustomEvent<ViewType>) {
    this.currentView = e.detail;
  }
}
