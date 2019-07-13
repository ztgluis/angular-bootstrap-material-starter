import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwapiComponent } from './swapi.component';

xdescribe('SwapiComponent', () => {
    let component: SwapiComponent;
    let fixture: ComponentFixture<SwapiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SwapiComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SwapiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
