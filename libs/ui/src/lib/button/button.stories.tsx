import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from '../../theme/theme-provider';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <ThemeProvider><Button {...args}>Button</Button></ThemeProvider>;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  shape: 'standard',
};
