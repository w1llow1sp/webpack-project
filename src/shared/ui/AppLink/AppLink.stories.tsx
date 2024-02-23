import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.LIGHT),
        RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
};

export const DarkPrimary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];
export const DarkSecondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];
export const DarkRed: Story = {
    args: {
        theme: AppLinkTheme.RED,
    },
};
DarkRed.decorators = [ThemeDecorator(Theme.DARK)];
