import { html, TemplateResult } from 'lit';
import '../src/components/shared/input.js';

export default {
  title: 'Input',
  component: 'styled-input',
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
  <styled-lion-input label="${label}"></styled-lion-input>
`;

export const Input = Template.bind({});
Input.args = {
  label: 'Default label',
};
