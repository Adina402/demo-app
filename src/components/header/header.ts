import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ui-header')
export class AppHeader extends LitElement {
  static styles = css`
    :host {
      min-height: 60px;
      height: fit-content;
      background-color: #362855;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-shrink: 0;
      display: flex;
      width: 100%;
    }

    .brand-logo {
      height: 40px;
      min-width: 128px;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('/assets/logo2.png');
      align-self: center;
    }
  `;

  render() {
    return html`
      <nav class="menu-bar">
        <div class="brand-logo"></div>
      </nav>
    `;
  }
}
