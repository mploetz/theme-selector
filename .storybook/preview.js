import { addParameters } from '@storybook/react';

addParameters({
    themeStylesheetSelector: {
        stylesheets: [
            {
                id: 'Ferris',
                title: 'Ferris Theme',
                url: 'css/ferris-default.min.css'
            },
            {
                id: 'Vrbo Theme',
                title: 'Vrbo Theme',
                url: 'css/ferris-vrbo.min.css'
            }
        ]
    }
});