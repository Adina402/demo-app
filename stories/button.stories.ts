import { html, TemplateResult } from 'lit';
import '../src/components/shared/button.js';

export default {
  title: 'Button',
  component: 'styled-lion-button',
  argTypes: {
    text: { control: 'string' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  text?: string;
}

const Template: Story<ArgTypes> = ({ text }: ArgTypes) => html`
  <styled-lion-button>${text}</styled-lion-button>
`;

export const Button = Template.bind({});
Button.args = {
  text: 'Default Button',
};
