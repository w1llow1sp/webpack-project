import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from "shared/ui/Modal/Modal";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;


export const ModalLightTheme = Template.bind({});
ModalLightTheme.args = {
    isOpen:true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aut corporis dignissimos eos error est facilis illum incidunt ipsam ipsum laudantium nihil, non omnis
                    repellendus totam unde? Natus, pariatur?`,
};

export const ModalDarkTheme = Template.bind({});
ModalDarkTheme.args = {
    isOpen:true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aut corporis dignissimos eos error est facilis illum incidunt ipsam ipsum laudantium nihil, non omnis
                    repellendus totam unde? Natus, pariatur?`,
};
ModalDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
