import { TestBed } from '@angular/core/testing';
import { SettingsService } from './settings.service';

describe('SettingsService', () => {
    let service: SettingsService;
    const Themes = {
        default: 'default-theme.css',
        dark: 'dark-theme.css'
    };

    beforeAll(() => {
        const theme = document.querySelector('link[href*="-theme"]');
        if (theme) {
            theme.remove();
        }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = Themes.default;
        document.head.appendChild(link);
    });

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(SettingsService);
        service.setTheme(Themes.default);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#setTheme', () => {
        it('should set default theme', () => {
            service.setTheme(Themes.default);
            const theme = document.querySelector('link[href*="-theme"]');
            expect(theme.getAttribute('href')).toContain(Themes.default);
        });
        it('should set dark theme', () => {
            service.setTheme(Themes.dark);
            const theme = document.querySelector('link[href*="-theme"]');
            expect(theme.getAttribute('href')).toContain(Themes.dark);
        });
    });

    describe('#switchTheme', () => {
        it('should switch from default to dark theme', () => {
            service.setTheme(Themes.default);
            service.switchTheme();
            const theme = document.querySelector('link[href*="-theme"]');
            expect(theme.getAttribute('href')).toContain(Themes.dark);
        });
        it('should switch from dark to default theme', () => {
            service.setTheme(Themes.dark);
            service.switchTheme();
            const theme = document.querySelector('link[href*="-theme"]');
            expect(theme.getAttribute('href')).toContain(Themes.default);
        });
    });
});
