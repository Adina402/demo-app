import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../shared/input.js';
import '../shared/button.js';
import '../shared/input-email.js';
import '../shared/input-tel.js';
import '../shared/select.js';
import '../shared/date-picker.js';
import { sharedStyles } from './shared-styles.js';
import { UserRegistration } from '../../models/user.model.js';
import { Country } from '../../models/country.model.js';

@customElement('ui-register-component')
export class RegisterComponent extends LitElement {
  @property({ type: Array })
  nationalities: string[] = [];

  @property({ type: String }) firstName: string = '';

  @property({ type: String }) lastName: string = '';

  @property({ type: String }) nationality: string = '';

  @property({ type: String }) emailAddress: string = '';

  @property({ type: String }) phoneNumber: string = '';

  @property({ type: String }) password: string = '';

  @property({ type: String }) confirmPassword: string = '';

  @property({ type: Boolean }) registrationError: boolean = false;

  @property({ type: String }) errorMessage: string = '';

  static styles = [
    sharedStyles,
    css`
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      @media (max-width: 425px) {
        .form-row {
          grid-template-columns: 1fr;
        }
      }
    `,
  ];

  firstUpdated() {
    this.fetchNationalities();
  }

  private validateForm(): boolean {
    this.registrationError = false;
    this.errorMessage = '';

    const requiredFields: (keyof UserRegistration)[] = [
      'firstName',
      'lastName',
      'nationality',
      'emailAddress',
      'phoneNumber',
      'password',
    ];

    for (const field of requiredFields) {
      if (!this[field]) {
        this.registrationError = true;
        this.errorMessage = `Please fill in all required fields.`;
        return false;
      }
    }

    if (this.password !== this.confirmPassword) {
      this.registrationError = true;
      this.errorMessage = 'Passwords do not match.';
      return false;
    }

    return true;
  }

  private handleFormSubmit(e: Event): void {
    e.preventDefault();
    this.handleLogin();
  }

  private handleLogin(): void {
    if (this.validateForm()) {
      const userRegistration: UserRegistration = {
        firstName: this.firstName,
        lastName: this.lastName,
        nationality: this.nationality,
        emailAddress: this.emailAddress,
        phoneNumber: this.phoneNumber,
        password: this.password,
      };

      const existingUsers = JSON.parse(
        localStorage.getItem('registeredUsers') || '[]',
      );
      existingUsers.push(userRegistration);
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
      this.navigateTo('login');
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="form-container">
          <lion-form @submit=${this.handleFormSubmit}>
            <form>
              <h2>Register</h2>

              ${this.registrationError
                ? html`
                    <div style="color: red; margin-bottom: 10px;">
                      ${this.errorMessage}
                    </div>
                  `
                : ''}

              <div class="form-row">
                <styled-lion-input
                  name="firstName"
                  label="First name"
                  @input=${(e: Event) => this.updateField(e, 'firstName')}
                ></styled-lion-input>
                <styled-lion-input
                  name="lastName"
                  label="Last name"
                  @input=${(e: Event) => this.updateField(e, 'lastName')}
                ></styled-lion-input>
              </div>

              <styled-lion-input-email
                name="emailAddress"
                label="Email address"
                @input=${(e: Event) => this.updateField(e, 'emailAddress')}
              ></styled-lion-input-email>

              <styled-select
                labelText="Choose Your Nationality"
                name="nationality"
                @input=${(e: Event) => this.updateField(e, 'nationality')}
              >
                <select slot="input">
                  ${this.nationalities.length === 0
                    ? html` <option disabled selected>
                        Loading nationalities...
                      </option>`
                    : html`
                        <option selected hidden value="">
                          Select nationality
                        </option>
                        ${this.nationalities.map(
                          nationality =>
                            html` <option value="${nationality}">
                              ${nationality}
                            </option>`,
                        )}
                      `}
                </select>
              </styled-select>

              <styled-lion-input-tel-dropdown
                name="phoneNumber"
                label="Phone number"
                @input=${(e: Event) => this.updateField(e, 'phoneNumber')}
              ></styled-lion-input-tel-dropdown>

              <div class="form-row">
                <styled-lion-input
                  name="password"
                  label="Password"
                  type="password"
                  @input=${(e: Event) => this.updateField(e, 'password')}
                ></styled-lion-input>
                <styled-lion-input
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  @input=${(e: Event) => this.updateField(e, 'confirmPassword')}
                ></styled-lion-input>
              </div>

              <div class="button-container">
                <styled-lion-button>Register</styled-lion-button>
              </div>

              <div class="separator-container">
                <span class="separator-container__custom-hr"></span>
                <div class="separator-container__separator">
                  <span>OR</span>
                </div>
              </div>

              <div class="form-footer">
                <div class="footer-text">Already registered?</div>
                <button
                  class="footer-link"
                  @click=${() => this.navigateTo('login')}
                >
                  Login
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

  private updateField(
    e: Event,
    field:
      | 'emailAddress'
      | 'password'
      | 'confirmPassword'
      | 'lastName'
      | 'firstName'
      | 'phoneNumber'
      | 'nationality',
  ): void {
    const input = e.target as HTMLInputElement;
    this[field] = input.value;
  }

  async fetchNationalities(): Promise<void> {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const countries: Country[] = await response.json();

      this.nationalities = countries
        .map(
          (country: Country) => country.demonyms?.eng?.m || country.name.common,
        )
        .filter((nationality): nationality is string => Boolean(nationality))
        .sort();

      this.requestUpdate();
    } catch (error) {
      this.nationalities = ['Romanian', 'British', 'American'];
      this.requestUpdate();
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
