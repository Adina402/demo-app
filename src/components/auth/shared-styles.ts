import { css } from 'lit';

export const sharedStyles = css`
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
    color: #333;
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

  .form-footer .footer-link {
    background: none;
    border: none;
    color: #873999;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }

  .form-footer .footer-link:hover {
    text-decoration: underline;
  }

  .form-footer .footer-text {
    color: #001a1c;
    font-size: 14px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;
