import { APP_BASE_HREF } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { getAppNav } from '@app/app.routing';
import { SettingsService } from '@app/shared/services/settings.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'ngbm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor(
        private settingsService: SettingsService,
        matIconRegistry: MatIconRegistry,
        domSanitizer: DomSanitizer,
        public mediaObserver: MediaObserver,
        @Inject(APP_BASE_HREF) private baseHref: string
    ) {
        matIconRegistry.addSvgIcon(
            'github',
            domSanitizer.bypassSecurityTrustResourceUrl(
                `../${this.baseHref}/assets/img/github-circle-white-transparent.svg`
            )
        );
    }

    mediaObserver$: Observable<
        MediaChange[]
    > = this.mediaObserver.asObservable();

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
