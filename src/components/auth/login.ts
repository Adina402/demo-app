import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';
import '../shared/input.js';
import '../shared/button.js';
import { state } from '@lion/core';
import { sharedStyles } from './shared-styles.js';
import { UserRegistration } from '../../models/user.model.js';

@customElement('ui-login-component')
export class LoginComponent extends LitElement {
  @property({ type: String }) emailAddress: string = '';

  @property({ type: String }) password: string = '';

  @state() private loginError: string = '';

  static styles = [sharedStyles];

  render() {
    return html`
      <div class="container">
        <div class="form-container">
          <lion-form>
            <form @submit=${this.handleLogin}>
              <h2>Login</h2>
              ${this.loginError
                ? html`
                    <div style="color: red; margin-bottom: 15px;">
                      ${this.loginError}
                    </div>
                  `
                : ''}

              <styled-lion-input-email
                name="emailAddress"
                label="Email address"
                @input=${(e: Event) => this.updateField(e, 'emailAddress')}
              ></styled-lion-input-email>

              <styled-lion-input
                name="password"
                label="Password"
                type="password"
                @input=${(e: Event) => this.updateField(e, 'password')}
              ></styled-lion-input>

              <div class="button-container">
                <styled-lion-button type="submit">Sign in</styled-lion-button>
              </div>

              <div class="separator-container">
                <span class="separator-container__custom-hr"></span>
                <div class="separator-container__separator">
                  <span>OR</span>
                </div>
              </div>

              <div class="form-footer">
                <div class="footer-text">Don't have an account?</div>
                <button
                  type="button"
                  class="footer-link"
                  @click=${() => this.navigateTo('register')}
                >
                  Register
                </button>
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

  private handleLogin(e: Event): void {
    e.preventDefault();
    this.loginError = '';
    const usersJson = localStorage.getItem('registeredUsers');
    if (!usersJson) {
      this.loginError = 'No registered users found.';
      return;
    }

    try {
      const users: UserRegistration[] = JSON.parse(usersJson);
      const matchedUser = users.find(
        user =>
          user.emailAddress.toLowerCase() === this.emailAddress.toLowerCase() &&
          user.password === this.password,
      );

      if (matchedUser) {
        localStorage.setItem('currentUser', JSON.stringify(matchedUser));
        this.navigateTo('userInfo');
      } else {
        this.loginError =
          'No account found with this email and password combination.';
      }
    } catch (error) {
      this.loginError = 'Error processing user data. Please try again.';
    }
  }

  private navigateTo(view: 'login' | 'register' | 'userInfo') {
    this.dispatchEvent(
      new CustomEvent('navigate', {
        detail: view,
        bubbles: true,
        composed: true,
      }),
    );
  }
}
