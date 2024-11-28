import { LionButton } from '@lion/ui/button.js';
import { css } from 'lit';

export class StyledLionButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-block;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          background-color: #362855;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        :host(:hover) {
          background-color: #873999;
        }

        :host(:active) {
          background-color: #873999;
        }

        :host(:focus-visible) {
          outline: none;
          box-shadow: 0 0 0 4px #873999;
        }

        ::slotted(button) {
          background-color: transparent;
          border: none;
          color: inherit;
          font: inherit;
          padding: 0;
          cursor: pointer;
        }
      `,
    ];
  }

  render() {
    return super.render();
  }
}

customElements.define('styled-lion-button', StyledLionButton);
