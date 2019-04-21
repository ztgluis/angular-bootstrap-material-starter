import { TestBed } from '@angular/core/testing';
import { SettingsService, StorageKeys, Themes } from './settings.service';
import { StorageService } from './storage.service';

describe('SettingsService', () => {
    let service: SettingsService;
    let storageServiceSpy: jasmine.SpyObj<StorageService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('StorageService', ['set', 'get']);
        TestBed.configureTestingModule({
            providers: [{ provide: StorageService, useValue: spy }]
        });

        service = TestBed.get(SettingsService);
        storageServiceSpy = TestBed.get(StorageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#setTheme', () => {
        it('should set default theme', () => {
            service.setTheme(Themes.default);
            expect(service.selectedTheme).toEqual(Themes.default);
            expect(storageServiceSpy.set).toHaveBeenCalledWith(
                StorageKeys.theme,
                Themes.default
            );
        });
        it('should set dark theme', () => {
            service.setTheme(Themes.dark);
            expect(service.selectedTheme).toEqual(Themes.dark);
            expect(storageServiceSpy.set).toHaveBeenCalledWith(
                StorageKeys.theme,
                Themes.dark
            );
        });
    });

    describe('#switchTheme', () => {
        it('should switch from default to dark theme', () => {
            service.setTheme(Themes.default);
            service.switchTheme();
            expect(service.selectedTheme).toEqual(Themes.dark);
        });
        it('should switch from dark to default theme', () => {
            service.setTheme(Themes.dark);
            service.switchTheme();
            expect(service.selectedTheme).toEqual(Themes.default);
        });
    });
    describe('#setLayout', () => {
        it('should set default layout when receiving true', () => {
            service.setLayout(true);
            expect(storageServiceSpy.set).toHaveBeenCalledWith(
                StorageKeys.layout,
                true
            );
        });
        it('should set alternate layout when receiving false', () => {
            service.setLayout(false);
            expect(storageServiceSpy.set).toHaveBeenCalledWith(
                StorageKeys.layout,
                false
            );
        });
    });
    describe('#getLayout', () => {
        it('should get layout', () => {
            service.getLayout();
            expect(storageServiceSpy.get).toHaveBeenCalledWith(
                StorageKeys.layout
            );
        });
    });
});
