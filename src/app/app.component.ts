import { Component } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { getAppNav } from '@app/app.routing';
import { SettingsService } from '@app/shared/services/settings.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'ngbm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private settingsService: SettingsService,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        public mediaObserver: MediaObserver
    ) {
        this.mediaObserver$ = mediaObserver.asObservable();
        this.matIconRegistry.addSvgIcon(
            'github',
            this.domSanitizer.bypassSecurityTrustResourceUrl(
                '../assets/img/github-circle-white-transparent.svg'
            )
        );
    }

    mediaObserver$: Observable<MediaChange[]>;

    sidenavLayout = this.settingsService.getLayout();

    expandedSidenav = false;

    navLinks = getAppNav();

    switchLayout() {
        this.sidenavLayout = !this.sidenavLayout;
        this.settingsService.setLayout(this.sidenavLayout);
    }

    switchTheme() {
        this.settingsService.switchTheme();
    }

    toggleSidenavText() {
        this.expandedSidenav = !this.expandedSidenav;
    }
}
