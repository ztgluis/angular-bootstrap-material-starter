import { Component } from '@angular/core';

@Component({
    selector: 'ngbm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    features = [
        {
            name: 'angular',
            title: 'Angular',
            description:
                'Built with Angular as the web application framework for its ease of use.'
        },
        {
            name: 'material',
            title: 'Angular Material',
            description:
                'The Angular Material component library is used as the primary library for UI components in this project for the high quality and extensive documentation available.'
        },
        {
            name: 'bootstrap',
            title: 'Bootstrap',
            description:
                'Bootstrap is included to be used primarly for its utility classes which enable easily customizing the UI through CSS classes.'
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
