import { html, TemplateResult } from 'lit';
import '../src/components/shared/input-email.js';

export default {
  title: 'InputEmail',
  component: 'styled-input-mail',
  argTypes: {
    label: { control: 'string' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label?: string;
}

const Template: Story<ArgTypes> = ({ label }: ArgTypes) => html`
  <styled-lion-input-email label="${label}"></styled-lion-input-email>
`;

export const InputEmail = Template.bind({});
InputEmail.args = {
  label: 'Default label for email input',
};
