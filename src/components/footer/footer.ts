import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ui-footer')
export class AppFooter extends LitElement {
  static styles = css`
    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      color: #333;
      font-family: 'Inter', sans-serif;
      width: 100%;
      padding: 20px;
      height: auto;
      text-align: center;
      box-sizing: border-box;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2024 Demo app. All rights reserved.</p>
      </footer>
    `;
  }
}
