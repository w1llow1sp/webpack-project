import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = function ThemeDecorator(theme: Theme) {
    return function(StoryComponent: Story) {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        );
    };
};
