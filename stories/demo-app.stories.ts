import { html, TemplateResult } from 'lit';
import '../src/demo-app.js';

export default {
  title: 'DemoApp',
  component: 'demo-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <demo-app style="--demo-app-background-color: ${backgroundColor}" .header=${header}></demo-app>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
