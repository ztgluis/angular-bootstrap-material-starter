import { Component } from '@angular/core';

@Component({
    selector: 'ngbm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    features = [
        {
            title: 'Angular',
            description:
                'Built with Angular as the web application framework for its ease of use.'
        },
        {
            title: 'Angular Material',
            description:
                'The Angular Material component library is used as the primary library for UI components in this project for the high quality and extensive documentation available.'
        },
        {
            title: 'Bootstrap',
            description:
                'Bootstrap is included to be used primarly for its utility classes which enable easily customizing the UI through CSS classes.'
        },
        {
            title: 'Theming',
            description:
                'This project is themable, a regular and a dark themes are included. Adding more themes is as easy as adding one more SCSS file with the desired palette of colors'
        },
        {
            title: 'Layout',
            description:
                'Interchangeable navigation layout, allows for the main navigation to be switched from a sidenav to top nav'
        },
        {
            title: 'Responsive',
            description:
                'Application adapts to the size of the viewport to optimize user experience'
        }
    ];

    devFeatures = [
        {
            name: 'prettier',
            title: 'Prettier',
            description:
                'Prettier is set up as a dev dependency to ensure consistent formatting of the code.'
        },
        {
            name: 'husky',
            title: 'Husky',
            description:
                'Husky is used to add development cycle hooks, such as running prettier on committing changes or publish to Github Pages on pushing updates.'
        },
        {
            name: 'tslint',
            title: 'TSLint',
            description:
                'TSLint has been extended to enable ensure coding standards, enforcing strict linting rules based on the Airbnb styleguide.'
        }
    ];
}
