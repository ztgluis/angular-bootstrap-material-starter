import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, MatMenuModule],
            declarations: [AppComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('switchLayout()', () => {
        it('should switch the layout', async(() => {
            fixture.detectChanges();
            expect(component.sidenavLayout).toBeFalsy();
            component.switchLayout();
        }));
    });

    describe('switchTheme()', () => {
        it('should switch the theme', async(() => {
            fixture.detectChanges();
            component.switchTheme();
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
