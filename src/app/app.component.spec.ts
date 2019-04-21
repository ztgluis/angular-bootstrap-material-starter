import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SettingsService } from './shared/services/settings.service';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let settingsServiceSpy: jasmine.SpyObj<SettingsService>;

    beforeEach(async(() => {
        const spy = jasmine.createSpyObj('SettingsService', [
            'switchTheme',
            'setLayout',
            'getLayout'
        ]);

        TestBed.configureTestingModule({
            imports: [RouterTestingModule, MatMenuModule],
            declarations: [AppComponent],
            providers: [{ provide: SettingsService, useValue: spy }],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        settingsServiceSpy = TestBed.get(SettingsService);
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('switchLayout()', () => {
        it('should switch the layout', async(() => {
            fixture.detectChanges();
            expect(component.sidenavLayout).toBeFalsy();
            component.switchLayout();
            expect(component.sidenavLayout).toBeTruthy();
            expect(settingsServiceSpy.setLayout).toHaveBeenCalled();
        }));
    });

    describe('switchTheme()', () => {
        it('should switch the theme', async(() => {
            fixture.detectChanges();
            component.switchTheme();
            expect(settingsServiceSpy.switchTheme).toHaveBeenCalled();
        }));
    });

    describe('toggleSidenavText()', () => {
        it('should expand the sidenav menu', async(() => {
            fixture.detectChanges();
            expect(component.expandedSidenav).toBeFalsy();
            component.toggleSidenavText();
            expect(component.expandedSidenav).toBeTruthy();
        }));
    });
});
