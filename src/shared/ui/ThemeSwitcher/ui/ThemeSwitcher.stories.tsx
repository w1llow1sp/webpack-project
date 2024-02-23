import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Primary: Story = {
    args: {},
};

export const DarkPrimary: Story = {
    args: {},
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];
