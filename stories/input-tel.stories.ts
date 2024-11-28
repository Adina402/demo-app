import { html, TemplateResult } from 'lit';
import '../src/components/shared/input-tel.js';

export default {
  title: 'InputTel',
  component: 'styled-input-tel',
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
  <styled-lion-input-tel-dropdown
    label="${label}"
  ></styled-lion-input-tel-dropdown>
`;

export const InputTel = Template.bind({});
InputTel.args = {
  label: 'Default label for tel input',
};
