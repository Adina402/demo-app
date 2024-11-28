import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../shared/input.js';
import '../shared/button.js';
import '../shared/input-email.js';
import '../shared/input-tel.js';
import '../shared/select.js';
import '../shared/date-picker.js';

interface Country {
  demonyms?: {
    eng?: {
      m?: string;
      f?: string;
    };
  };
  name: { common: string };
}

@customElement('ui-register-component')
export class RegisterComponent extends LitElement {
  @property({ type: Array })
  nationalities: string[] = [];

  @property({ type: String }) firstName: string = '';

  @property({ type: String }) lastName: string = '';

  @property({ type: String }) nationality: string = '';

  @property({ type: String }) birthDate: string = '';

  @property({ type: String }) emailAddress: string = '';

  @property({ type: String }) phoneNumber: string = '';

  @property({ type: String }) password: string = '';

  @property({ type: String }) confirmPassword: string = '';

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      padding: 40px 20px;
      border-radius: 16px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
      background-color: #fff;
      min-height: 50vh;
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

  firstUpdated() {
    this.fetchNationalities();
  }

  render() {
    return html`
      <div class="container">
        <div class="form-container">
          <lion-form>
            <form>
              <h2>Register</h2>
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
              <div class="form-row">
                <styled-lion-input-email
                  name="emailAddress"
                  label="Email address"
                  @input=${(e: Event) => this.updateField(e, 'emailAddress')}
                ></styled-lion-input-email>

                <styled-date-picker
                  name="birthDate"
                  label="Birth date"
                  @input=${(e: Event) => this.updateField(e, 'birthDate')}
                ></styled-date-picker>
              </div>

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
                <styled-lion-button @click=${this.handleLogin}
                  >Register
                </styled-lion-button>
              </div>

              <div class="separator-container">
                <span class="separator-container__custom-hr"></span>
                <div class="separator-container__separator">
                  <span>OR</span>
                </div>
              </div>

              <div class="form-footer">
                <div class="footer-text">Already registered?</div>
                <a
                  href="https://www.google.com"
                  target="_self"
                  class="footer-link"
                >
                  Login
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

  private updateField(
    e: Event,
    field:
      | 'emailAddress'
      | 'password'
      | 'confirmPassword'
      | 'lastName'
      | 'firstName'
      | 'phoneNumber'
      | 'nationality'
      | 'birthDate',
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
      console.error('Failed to fetch nationalities:', error);
      this.nationalities = [];
      this.requestUpdate();
    }
  }

  private handleLogin(): void {
    console.log(
      'Logging in with:',
      this.emailAddress,
      this.password,
      this.lastName,
      this.firstName,
      this.phoneNumber,
      this.birthDate,
    );
  }
}
