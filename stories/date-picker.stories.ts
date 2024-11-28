import { html, TemplateResult } from 'lit';
import '../src/components/shared/date-picker.js';

export default {
  title: 'DatePicker',
  component: 'styled-date-picker',
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
  <styled-date-picker label="${label}"></styled-date-picker>
`;

export const DatePicker = Template.bind({});
DatePicker.args = {
  label: 'Date picker',
};
