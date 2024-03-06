import { Story } from '@storybook/react';
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider';

export const ThemeDecorator = function ThemeDecorator(theme: Theme) {
    return function(StoryComponent: Story) {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
};
