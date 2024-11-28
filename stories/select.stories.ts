import { html, TemplateResult } from 'lit';
import '../src/components/shared/select.js';

export default {
  title: 'Select',
  component: 'styled-select',
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
  labelText?: string;
}

const Template: Story<ArgTypes> = ({ labelText }: ArgTypes) => html`
  <styled-select labelText="${labelText}">
    <select slot="input">
      <option>Romanian</option>
      <option>British</option>
      <option>American</option>
    </select>
  </styled-select>
`;

export const Select = Template.bind({});
Select.args = {
  labelText: 'Select Nationality',
};
