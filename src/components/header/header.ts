import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ui-header')
export class AppHeader extends LitElement {
  @property({ type: String }) currentView: string = '';

  static styles = css`
    :host {
      min-height: 70px;
      height: fit-content;
      width: 100%;
    }

    .menu-bar {
      background-color: #362855;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      height: 70px;
    }

    .brand-logo {
      height: 30px;
      min-width: 128px;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('/assets/logo2.png');
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .logout-container {
      display: flex;
      justify-content: flex-end;
    }

    .logout-container.hidden {
      display: none;
    }
  `;

  render() {
    return html`
      <nav class="menu-bar">
        <div></div>
        <div class="brand-logo"></div>
        <div
          class="logout-container ${this.currentView !== 'userInfo'
            ? 'hidden'
            : ''}"
        >
          <styled-lion-button class="logout" @click=${this.handleLogout}>
            Logout
          </styled-lion-button>
        </div>
      </nav>
    `;
  }

  private handleLogout() {
    this.dispatchEvent(
      new CustomEvent('navigate', {
        detail: 'login',
        bubbles: true,
        composed: true,
      }),
    );
  }
}
