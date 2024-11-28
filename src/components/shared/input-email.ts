import { LionInputEmail } from '@lion/ui/input-email.js';
import { css } from 'lit';
import { loadDefaultFeedbackMessages } from '@lion/ui/validate-messages.js';

loadDefaultFeedbackMessages();

export class StyledLionInputEmail extends LionInputEmail {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          width: 100%;
          margin: 10px 5px;
        }

        .form-field__label {
          margin-bottom: 6px;
          font-size: 17px;
          text-align: left;
          color: #71397c;
        }

        .form-field__feedback {
          color: #ff383b;
        }

        :host ::slotted(input) {
          margin: 20px 0;
          background-color: #ffffff;
          border: 2px solid #e8e8e8;
          border-radius: 4px;
          padding: 3px 3px 3px 10px;
          font-size: 17px;
          height: 40px;
          color: #202124;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        :host ::slotted(input:focus) {
          outline: none;
          border-color: #873999;
        }

        :host ::slotted(input::placeholder) {
          color: #9aa0a6;
        }
      `,
    ];
  }

  render() {
    return super.render();
  }
}

customElements.define('styled-lion-input-email', StyledLionInputEmail);
