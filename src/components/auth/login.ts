import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';
import '../shared/input.js';
import '../shared/button.js';

@customElement('ui-login-component')
export class LoginComponent extends LitElement {
  @property({ type: String }) emailAddress: string = '';

  @property({ type: String }) password: string = '';

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      padding: 80px 40px;
      border-radius: 16px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
      background-color: #fff;
      min-height: 60vh;
      width: 100%;
    }

    @media (max-width: 768px) {
      :host {
        padding: 20px 20px;
      }
    }

    .container {
      display: flex;
      flex-direction: row;
      gap: 40px;
      width: 100%;
      align-items: center;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
    }

    a {
      color: #873999;
      text-decoration: none;
    }

    .form-container {
      flex: 1;
      width: 100%;
    }

    .form-container h2 {
      text-align: center;
      color: #774181;
      font-size: 48px;
      font-weight: bold;
    }

    .image-container {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .separator-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 100%;
      height: 100%;
      position: relative;
      padding-top: 30px;
    }

    .separator-container__separator {
      width: 20px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccd1d2;
      position: absolute;
      background: #ffffff;
      color: #99a3a4;
      font-size: 12px;
      z-index: 999;
    }

    .separator-container__custom-hr {
      display: block;
      width: 100%;
      height: 1px;
      background-color: #ccd1d2;
      margin: 20px 0;
    }

    .form-footer {
      display: flex;
      justify-content: center;
      padding-top: 3rem;
      gap: 0.25rem;
    }

    .button-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    .form-footer .footer-link {
      font-size: 14px;
    }

    .form-footer .footer-text {
      color: #001a1c;
      font-size: 14px;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      img {
        max-width: 70%;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="form-container">
          <lion-form>
            <form>
              <h2>Login</h2>
              <styled-lion-input
                name="emailAddress"
                label="Email address"
                @input=${(e: Event) => this.updateField(e, 'emailAddress')}
              ></styled-lion-input>
              <styled-lion-input
                name="password"
                label="Password"
                type="password"
                @input=${(e: Event) => this.updateField(e, 'password')}
              ></styled-lion-input>
              <div class="button-container">
                <styled-lion-button @click=${this.handleLogin}
                  >Sign in</styled-lion-button
                >
              </div>

              <div class="separator-container">
                <span class="separator-container__custom-hr"></span>
                <div class="separator-container__separator">
                  <span>OR</span>
                </div>
              </div>

              <div class="form-footer">
                <div class="footer-text">Don't have an account?</div>
                <a
                  href="https://www.google.com"
                  target="_self"
                  class="footer-link"
                >
                  Register
                </a>
              </div>
            </form>
          </lion-form>
        </div>
        <div class="image-container">
          <img
            src="https://rawcdn.githack.com/harivilasp/Interview-Video-Analysis/master/frontend/src/media/graphics.png"
            alt="test"
          />
        </div>
      </div>
    `;
  }

  private updateField(e: Event, field: 'emailAddress' | 'password'): void {
    const input = e.target as HTMLInputElement;
    this[field] = input.value;
  }

  private handleLogin(): void {
    console.log('Logging in with:', this.emailAddress, this.password);
  }
}
